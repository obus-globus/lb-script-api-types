import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface AtomicsBuiltins$AtomicBinaryOperator<T extends Object | number | string | boolean> extends Object{
    apply(t: T, u: T): T;
}