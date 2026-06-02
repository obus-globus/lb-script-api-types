import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Streams$LongFunctionWithIndex<R extends Object | number | string | boolean> extends Object{
    apply(from: number, index: number): R;
}