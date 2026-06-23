import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface TriConsumer<A extends unknown, B extends unknown, C extends unknown> extends Object{
    accept(arg0: A, arg1: B, arg2: C): void;
}