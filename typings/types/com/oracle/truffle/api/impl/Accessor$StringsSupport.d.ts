import type { Accessor$Support } from '../../../../../com/oracle/truffle/api/impl/Accessor$Support.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Accessor$StringsSupport extends Accessor$Support {
    constructor()
    fromNativePointerEmbedder(address: number, byteOffset: number, byteLength: number, encoding: Object, copy: boolean): Object;
}