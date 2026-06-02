import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface PaletteResize<T extends Object | number | string | boolean> extends Object{
    onResize(bits: number, lastAddedValue: T): number;
}