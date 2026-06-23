import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Enchantment$GenericAction<T extends unknown> extends Object{
    apply(effect: T): void;
}