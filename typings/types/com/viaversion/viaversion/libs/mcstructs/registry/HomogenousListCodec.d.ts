import type { Codec } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class HomogenousListCodec<T extends unknown> extends Object {
    static codec<T extends unknown>(paramarg0: Codec<T>, paramarg1: boolean): Codec<T[]>;
    constructor()
}