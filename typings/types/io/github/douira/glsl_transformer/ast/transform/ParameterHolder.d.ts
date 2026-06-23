import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ParameterHolder<J extends unknown> extends Object {
    getJobParameters(): J;
    setJobParameters(arg0: J): void;
    withJobParameters<R extends unknown>(arg0: J, arg1: () => R): R;
}