import type { Object } from '../../java/lang/Object.d.ts'
export interface Map$Entry<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object{
    readonly key: K;
    readonly value: V;
}