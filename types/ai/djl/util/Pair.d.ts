import type { Object } from '../../../java/lang/Object.d.ts'
export class Pair<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object {
    constructor(arg0: K, arg1: V)
    readonly key: K;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    getKey(): K;
    getValue(): V;
    hashCode(): number;
}