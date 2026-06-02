import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Advertiser extends Object{
    advertise(properties: { [key: string]: string }): Object;
    unadvertise(advertisedObject: Object): void;
}