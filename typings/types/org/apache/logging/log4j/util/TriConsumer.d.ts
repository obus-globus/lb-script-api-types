import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface TriConsumer<K extends unknown, V extends unknown, S extends unknown> extends Object{
    accept(k: K, v: V, s: S): void;
}