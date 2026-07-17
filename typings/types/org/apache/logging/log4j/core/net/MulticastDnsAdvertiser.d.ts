import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Advertiser } from '../../../../../../org/apache/logging/log4j/core/net/Advertiser.d.ts'
export class MulticastDnsAdvertiser extends Object implements Advertiser {
    constructor()
    advertise(properties: JavaMap<string, string>): Object;
    unadvertise(serviceInfo: Object): void;
}