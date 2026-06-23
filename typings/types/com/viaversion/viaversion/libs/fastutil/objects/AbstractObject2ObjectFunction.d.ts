import type { Object2ObjectFunction } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/Object2ObjectFunction.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class AbstractObject2ObjectFunction<K extends unknown, V extends unknown> extends Object implements Object2ObjectFunction<K, V>, Serializable {
    constructor()
}