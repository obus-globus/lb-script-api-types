import type { Object } from '../../../../java/lang/Object.d.ts'
export interface MapValueSet$ValueSupplier<V extends Object | number | string | boolean> extends Object{
    supplyValue(): V;
}