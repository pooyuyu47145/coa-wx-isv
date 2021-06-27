import { WxIsvServiceBase } from '../libs/WxIsvServiceBase'
import { WxIsv } from '../typings'

export class WxIsvMpService extends WxIsvServiceBase {
  /**
   * 获取展示的公众号信息
   * 使用本接口可以获取扫码关注组件所展示的公众号信息
   * 详见 https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/subscribe_component/getshowwxaitem.html
   * @param accessToken 小程序接口调用令牌
   */
  async getShowItem(accessToken: string) {
    return (await this.request('GET', '/wxa/getshowwxaitem', {}, { access_token: accessToken })) as WxIsv.WxIsvMpShowItem
  }

  /**
   * 获取可以用来设置的公众号列表
   * 通过本接口可以获取扫码关注组件允许展示的公众号列表
   * 详见 https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/subscribe_component/getwxamplinkforshow.html
   * @param accessToken 小程序接口调用令牌
   * @param page 页码，从 0 开始
   * @param num 每页记录数，最大为 20
   */
  async getShowItemList(accessToken: string, page = 0, num = 20) {
    return (await this.request('GET', '/wxa/getwxamplinkforshow', {}, { page, num, access_token: accessToken })) as WxIsv.WxIsvMpShowItemList
  }

  /**
   * 设置展示的公众号信息
   * 使用本接口可以设置扫码关注组件所展示的公众号信息
   * 详见 https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/subscribe_component/updateshowwxaitem.html
   * @param accessToken
   * @param appId 新的公众号 appid
   * @param subscribe 是否打开扫码关注组件，0 关闭，1 开启，默认为1
   */
  async getList(accessToken: string, appId: string, subscribe = 1) {
    return (await this.request(
      'POST',
      '/wxa/updateshowwxaitem',
      { appid: appId, wxa_subscribe_biz_flag: subscribe },
      { access_token: accessToken }
    )) as WxIsv.WxIsvNormalResponse
  }
}
