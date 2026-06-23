import type { Object } from '../../../java/lang/Object.d.ts'
export interface UnmodifiableMapCursor<K extends unknown, V extends unknown> extends Object{
    advance(): boolean;
    getKey(): K;
    getValue(): V;
}