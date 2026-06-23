import type { Int2ObjectFunction } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2ObjectFunction.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class AbstractInt2ObjectFunction<V extends unknown> extends Object implements Int2ObjectFunction<V>, Serializable {
    constructor()
}