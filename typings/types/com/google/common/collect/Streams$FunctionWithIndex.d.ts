import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Streams$FunctionWithIndex<T extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object{
    apply(from: T, index: number): R;
}