import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface PalettedContainer$CountConsumer<T extends unknown> extends Object{
    accept(entry: T, count: number): void;
}