import type { Long2ObjectFunction } from '../../../../../../com/viaversion/viaversion/libs/fastutil/longs/Long2ObjectFunction.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class AbstractLong2ObjectFunction<V extends Object | number | string | boolean> extends Object implements Long2ObjectFunction<V>, Serializable {
    constructor()
}