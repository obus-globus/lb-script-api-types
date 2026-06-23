import type { Gatherer$Downstream } from '../../../java/util/stream/Gatherer$Downstream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Gatherer$Integrator<A extends unknown, T extends unknown, R extends unknown> extends Object {
    integrate(arg0: A, arg1: T, arg2: (param0: R) => boolean): boolean;
}