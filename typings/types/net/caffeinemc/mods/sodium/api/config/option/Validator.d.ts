import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface Validator<V extends Object | number | string | boolean> extends Object{
    getValidatedValue(arg0: V, arg1: () => V): V;
}