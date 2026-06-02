import type { Object } from '../../../../java/lang/Object.d.ts'
export interface InternalField<O extends Object | number | string | boolean, T extends Object | number | string | boolean> extends Object{
    get(arg0: O): T;
    set(arg0: O, arg1: T): void;
}