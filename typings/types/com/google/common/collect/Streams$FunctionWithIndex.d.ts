import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Streams$FunctionWithIndex<T extends unknown, R extends unknown> extends Object{
    apply(from: T, index: number): R;
}