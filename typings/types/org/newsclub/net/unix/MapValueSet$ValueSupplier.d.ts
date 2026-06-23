import type { Object } from '../../../../java/lang/Object.d.ts'
export interface MapValueSet$ValueSupplier<V extends unknown> extends Object{
    supplyValue(): V;
}