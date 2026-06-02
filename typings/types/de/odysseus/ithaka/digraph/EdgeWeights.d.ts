import type { OptionalInt } from '../../../../java/util/OptionalInt.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface EdgeWeights<V extends Object | number | string | boolean> extends Object{
    get(arg0: V, arg1: V): OptionalInt;
}