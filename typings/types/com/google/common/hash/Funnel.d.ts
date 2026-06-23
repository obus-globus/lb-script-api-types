import type { PrimitiveSink } from '../../../../com/google/common/hash/PrimitiveSink.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Funnel<T extends unknown> extends Serializable, Object{
    funnel(from: T, into: PrimitiveSink): void;
}