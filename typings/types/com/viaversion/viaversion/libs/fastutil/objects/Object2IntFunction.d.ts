import type { Function } from '../../../../../../com/viaversion/viaversion/libs/fastutil/Function.d.ts'
import type { ToIntFunction } from '../../../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Object2IntFunction<K extends unknown> extends Function<K, number>, ToIntFunction<K>, Object{
}