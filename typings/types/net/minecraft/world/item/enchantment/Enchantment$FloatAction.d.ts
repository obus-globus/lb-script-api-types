import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enchantment$GenericAction } from '../../../../../net/minecraft/world/item/enchantment/Enchantment$GenericAction.d.ts'
import type { MutableFloat } from '../../../../../org/apache/commons/lang3/mutable/MutableFloat.d.ts'
export interface Enchantment$FloatAction<T extends unknown> extends Object {
    apply(effect: T, value: number): number;
    asGeneric(v: MutableFloat): (param0: T) => void;
}