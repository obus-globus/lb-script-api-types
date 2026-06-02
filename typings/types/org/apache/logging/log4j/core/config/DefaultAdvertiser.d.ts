import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Advertiser } from '../../../../../../org/apache/logging/log4j/core/net/Advertiser.d.ts'
export class DefaultAdvertiser extends Object implements Advertiser {
    constructor()
    advertise(properties: { [key: string]: string }): Object;
    unadvertise(advertisedObject: Object): void;
}