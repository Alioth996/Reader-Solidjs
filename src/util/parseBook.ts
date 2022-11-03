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
   *  (\s|\n) : 章节名以空格或换行符开始
   * (第) ： 章节名第一个字为第
   * ([\u4e00-\u9fa5a-zA-Z0-9]{1,7}) ：第xx章 中的xx,这里xx表示匹配1-7中文英文和数字，如‘ 第一千五百三十六章：茅山现状 ’
   * [章]： 章节名中的章
   * [^\n]{1,35} ：表示匹配章后面1-35个非换行符的章节名字
   * (|\n) ：表示以换行符结尾
   * @参考资料 https://blog.csdn.net/qq_43257319/article/details/108530208
   */

  const catalogRegx = new RegExp(/(\s|\n)(第)?([\u4e00-\u9fa5a-zA-Z0-9]{1,7})[章|卷|部|回|节|集]?[^\n]{1,35}(|\n)/g)
}

const loadBook = (bookUrl?: string) => {}

export { parseBook, loadBook }
