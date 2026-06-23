import type { Reference2ObjectFunction } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/Reference2ObjectFunction.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class AbstractReference2ObjectFunction<K extends unknown, V extends unknown> extends Object implements Reference2ObjectFunction<K, V>, Serializable {
    constructor()
}