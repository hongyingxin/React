import { fromJS } from 'immutable';

const defaultState = fromJS({
  title: `“我可以睡你吗？”“滚！”`,
  content: `<img src="//upload-images.jianshu.io/upload_images/15454884-f03cc99d883d224b.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp" alt=""/>
  <p>近日，一段由洪晃、刘索拉、李勤勤、平燕妮主演的电影片段火了。在视频片段中，洪晃吐槽了某些文艺男为了睡姑娘，可以东扯西聊到三更半夜。聊得姑娘都困得像孙子似的，那哥们还没有提上床的事。这得多含蓄一男人啊！</p>
  <p>确实过去的男人，不论是不是搞艺术的，只要不是流氓，但凡上过几天学的男人，多多少少都有些含蓄，毕竟都是有家教的。</p>
  <p>有含蓄是好的，但是不要太过，人家姑娘都困得像孙子了，你还在那不管不顾的叨叨，这就是不解风情，不识趣。</p>
  <p>可以含蓄，但不要太过。礼貌要有，但是要懂风情。别让人觉得你不是文艺，不是礼貌，就是一傻瓜。</p>
  <p>当然，放在现在看来，这没什么不好，反而是一种很难得的品质，尽管不解风情，可毕竟脑子里不都是精虫。</p>`,

});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}