/**
 * @desc 连接数据库并返回数据库实例
 * @param {object} dbName 需要连接或者新建的数据库名字
 * @param {string} storeName 对象仓库/表 名称
 * @param {string} version 数据库的版本 默认为1
 * @return {Promise<IDBDatabase>} 返回一个类型为IDBDatabase的Promise对象
 */
const getDB = (dbName: string, storeName: string, version?: number): Promise<IDBDatabase> => {
  let db: IDBDatabase
  return new Promise((rsv, rej) => {
    const request: IDBOpenDBRequest = indexedDB.open(dbName, version)
    request.addEventListener('success', e => {
      console.log(`IDB:${dbName} 连接成功`)
      console.log('req:', request.result)
      db = (e.target as IDBOpenDBRequest).result
      console.log('target:', db)
      rsv(db)
    })
    request.addEventListener('error', e => {
      console.error('数据库打开失败...', (e.target as IDBOpenDBRequest).error)
    })
    request.addEventListener('upgradeneeded', e => {
      db = (e.target as IDBOpenDBRequest).result

      // 判断表是否存在
      if (!db.objectStoreNames.contains(storeName)) {
        // 创建对象仓库,类型新建 sqldb 里的表
        const objectStore: IDBObjectStore = db.createObjectStore(storeName, {
          keyPath: 'id',
          autoIncrement: true
        })

        // 创建索引  objectStore.createIndex('索引名称','索引所绑定的属性',[配置对象])
        objectStore.createIndex('bookName', 'bookName')
        objectStore.createIndex('author', 'author')
      }
    })
  })
}

/**
 * @desc 添加记录
 * @param db 数据库实例
 * @param storeName 对象仓库名/表名
 * @param data 需要插入的数据
 * @warning 插入的数据是一个对象，而且必须包含我们声明的索引键值对。
 */
const addRecord = (db: IDBDatabase, storeName: string, data: any) => {
  // indexedDB需要通过事务进行数据的crud操作
  const request: IDBRequest<IDBValidKey> = db.transaction([storeName], 'readwrite').objectStore(storeName).add(data)

  request.onsuccess = e => {
    console.log('数据添加成功:')
    // console.log(request.result) 输入当前记录的总数
  }
  request.onerror = e => {
    console.error('数据添加失败', request.error)
  }
}

export { getDB, addRecord }
