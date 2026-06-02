import type { CharsetEncoder } from '../../../../../java/nio/charset/CharsetEncoder.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharsetEncoders extends Object {
    static toCharsetEncoder(paramarg0: CharsetEncoder): CharsetEncoder;
    static toCharsetEncoder(paramarg0: CharsetEncoder, paramarg1: () => CharsetEncoder): CharsetEncoder;
    private constructor()
}