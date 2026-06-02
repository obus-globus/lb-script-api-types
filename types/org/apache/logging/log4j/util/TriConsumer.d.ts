import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface TriConsumer<K extends Object | number | string | boolean, V extends Object | number | string | boolean, S extends Object | number | string | boolean> extends Object{
    accept(k: K, v: V, s: S): void;
}