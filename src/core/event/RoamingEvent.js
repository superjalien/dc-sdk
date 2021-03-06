/*
 * @Author: Caven
 * @Date: 2020-04-10 16:58:31
 * @Last Modified by: Caven
 * @Last Modified time: 2020-05-10 08:13:53
 */

import { Cesium } from '../../namespace'
import { RoamingEventType } from './EventType'
import Event from './Event'

class RoamingEvent extends Event {
  constructor() {
    super()
  }

  _registerEvent() {
    Object.keys(RoamingEventType).forEach(key => {
      let type = RoamingEventType[key]
      this._cache[type] = new Cesium.Event()
    })
  }
}

export default RoamingEvent
