import type { Gatherer$Downstream } from '../../../java/util/stream/Gatherer$Downstream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Gatherer$Integrator<A extends Object | number | string | boolean, T extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object {
    integrate(arg0: A, arg1: T, arg2: (param0: R) => kotlin.Boolean): boolean;
}