import type { Function } from '../../../../../../com/viaversion/viaversion/libs/fastutil/Function.d.ts'
import type { LongFunction } from '../../../../../../java/util/function/LongFunction.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Long2ObjectFunction<V extends unknown> extends Function<number, V>, LongFunction<V>, Object{
}