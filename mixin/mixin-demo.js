
module.exports = {
  data: {
    pageInterval: null,
    buriedPoint: {
      operateUserId: 'unknown', // user的id 未登录未 unknown
      operateUserUid: -1, // user中的uid 未登录未 -1
      operateUserType: 'UNAUTHENTICATED', // 登录为 AUTHENTICATED, 未登录为 UNAUTHENTICATED,
      positionCode: null, // 定位code
      clientId: 4,
      deviceId: null, // 设备标识
      advertisement: [],
      use: [],
      page: [],
      content: []
    }
  },
  onLoad() {
    this.initBaseBuriedPoint()
  },
  onShow() {
    this.initBaseBuriedPoint()
  },
  onHide() {

  },
  onUnload() {

  },
  // 初始化baseBuriedPoint
  initBaseBuriedPoint() {
    const userInfo = processor.get('userInfo')
    const addressInfo = processor.get('addressInfo')
    const deviceId = processor.get('deviceId')
    this.setData({
      'buriedPoint.operateUserId': userInfo ? userInfo.id : 'unknown',
      'buriedPoint.operateUserUid': userInfo && userInfo.uid ? userInfo.uid : -1,
      'buriedPoint.operateUserType': userInfo ? 'AUTHENTICATED' : 'UNAUTHENTICATED',
      'buriedPoint.positionCode': addressInfo ? addressInfo.weatherVOCode : null,
      'buriedPoint.deviceId': deviceId ? deviceId : null
    })
  },

}
