import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface PaletteResize<T extends unknown> extends Object{
    onResize(bits: number, lastAddedValue: T): number;
}