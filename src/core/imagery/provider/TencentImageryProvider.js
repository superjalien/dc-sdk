/*
 * @Author: Caven
 * @Date: 2020-01-21 16:10:47
 * @Last Modified by: Caven
 * @Last Modified time: 2020-05-10 08:18:37
 */
import { Cesium } from '../../../namespace'
import ImageryType from '../ImageryType'

const ELEC_URL =
  'https://rt{s}.map.gtimg.com/tile?z={z}&x={x}&y={reverseY}&styleid=1000&scene=0&version=347'

class TencentImageryProvider extends Cesium.UrlTemplateImageryProvider {
  constructor(options = {}) {
    options['url'] = ELEC_URL
    if (!options.subdomains || !options.subdomains.length) {
      options['subdomains'] = ['0', '1', '2']
    }
    super(options)
  }
}

ImageryType.TENCENT = 'tdt'

export default TencentImageryProvider
