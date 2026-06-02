import type { Object } from '../../../../java/lang/Object.d.ts'
export interface DefaultHeaders$ValueValidator<V extends Object | number | string | boolean> extends Object{
    validate(arg0: V): void;
}