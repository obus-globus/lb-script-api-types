import type { Object } from '../../../java/lang/Object.d.ts'
export interface UnmodifiableMapCursor<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object{
    advance(): boolean;
    getKey(): K;
    getValue(): V;
}