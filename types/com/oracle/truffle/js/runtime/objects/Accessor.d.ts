import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Accessor extends Object {
    constructor(getter: Object, setter: Object)
    readonly getter: Object;
    readonly setter: Object;
    equals(obj: Object | null): boolean;
    getGetter(): Object;
    getSetter(): Object;
    hasGetter(): boolean;
    hasSetter(): boolean;
    hashCode(): number;
}