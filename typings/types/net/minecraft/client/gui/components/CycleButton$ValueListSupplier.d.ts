import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CycleButton$ValueListSupplier<T extends unknown> extends Object{
    getDefaultList(): T[];
    getSelectedList(): T[];
}