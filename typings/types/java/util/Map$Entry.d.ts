import type { Object } from '../../java/lang/Object.d.ts'
export interface Map$Entry<K extends unknown, V extends unknown> extends Object{
    readonly key: K;
    readonly value: V;
}