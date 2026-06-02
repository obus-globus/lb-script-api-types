import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MutableHolder<O extends Object | number | string | boolean> extends Object {
    constructor(arg0: O)
    // private obj: O;
    get(): O;
    set(arg0: O): void;
}