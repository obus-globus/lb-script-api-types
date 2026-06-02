import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ICUResourceBundleReader$ResourceCache$Level } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUResourceBundleReader$ResourceCache$Level.d.ts'
export class ICUResourceBundleReader$ResourceCache extends Object {
    constructor(maxOffset: number)
    // private keys: number[];
    // private length: number;
    // private levelBitsList: number;
    // private maxOffsetBits: number;
    // private rootLevel: ICUResourceBundleReader$ResourceCache$Level;
    // private values: Object[];
    // private findSimple(key: number): number;
    get(res: number): Object;
    // private makeKey(res: number): number;
    putIfAbsent(res: number, item: Object, size: number): Object;
}