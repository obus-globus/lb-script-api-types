import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CycleButton$ValueListSupplier<T extends Object | number | string | boolean> extends Object{
    getDefaultList(): T[];
    getSelectedList(): T[];
}