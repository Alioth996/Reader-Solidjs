interface BookInfo {
  author: string
  localPath: string
}

/**
 * @desc 正则解析小说目录,章节内容分片
 * @param  { *File} book
 *
 */

const parseBook = book => {
  let author = ''

  // 章节数组: 存放所有章节
  let catalogList = ['']

  //   console.log(book)

  // 作者正则
  const authorRegx = new RegExp(/(\s|\n)?[作者:]?[\u4e00-\u9fa5]{2,}(|\n)/g)

  /**
   * @description 提取章节
   * @param str 小说 .txt 格式
   * @desc (\s|\n) : 章节名以空格或换行符开始
   * @desc (第) ： 章节名第一个字为第
   * @desc ([\u4e00-\u9fa5a-zA-Z0-9]{1,7}) ：第xx章 中的xx,这里xx表示匹配1-7中文英文和数字，如‘ 第一千五百三十六章：茅山现状 ’
   * @desc [章]： 章节名中的章
   * @desc [^\n]{1,35} ：表示匹配章后面1-35个非换行符的章节名字
   * @desc (|\n) ：表示以换行符结尾
   * @参考资料 https://blog.csdn.net/qq_43257319/article/details/108530208
   */
  function getZJ(str) {
    const reg =
      /(正文){0,1}(第)([零〇一二三四五六七八九十百千万a-zA-Z0-9]{1,7})[章节卷集部篇回]((?! {4}).)((?!\t{1,4}).){0,30}\r?\n/g
    let list = []
    let result = null
    result = str.match(reg)
    result && list.push(...result)
    for (let i = 0; i < list.length; i++) {
      list[i] = list[i].split('\n').join('')
      list[i] = list[i].split('\r').join('')
      list[i] = list[i].split('\t').join('')
    }
    return list
  }
}

export default parseBook
