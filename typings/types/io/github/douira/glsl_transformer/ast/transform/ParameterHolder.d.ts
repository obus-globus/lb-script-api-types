import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ParameterHolder<J extends Object | number | string | boolean> extends Object{
    getJobParameters(): J;
    setJobParameters(arg0: J): void;
    withJobParameters<R extends Object | number | string | boolean>(arg0: J, arg1: () => R): R;
}