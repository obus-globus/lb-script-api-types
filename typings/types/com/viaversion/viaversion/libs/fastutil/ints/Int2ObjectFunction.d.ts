import type { Function } from '../../../../../../com/viaversion/viaversion/libs/fastutil/Function.d.ts'
import type { IntFunction } from '../../../../../../java/util/function/IntFunction.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Int2ObjectFunction<V extends unknown> extends Function<number, V>, IntFunction<V>, Object{
}