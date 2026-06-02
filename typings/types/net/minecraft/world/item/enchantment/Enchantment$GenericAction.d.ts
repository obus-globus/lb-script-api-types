import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Enchantment$GenericAction<T extends Object | number | string | boolean> extends Object{
    apply(effect: T): void;
}