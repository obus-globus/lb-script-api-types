import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Advertiser extends Object{
    advertise(properties: JavaMap<string, string>): Object;
    unadvertise(advertisedObject: Object): void;
}