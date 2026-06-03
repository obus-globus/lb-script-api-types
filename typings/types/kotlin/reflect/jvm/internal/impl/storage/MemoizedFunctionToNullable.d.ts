import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface MemoizedFunctionToNullable<P extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object, (param0: P) => R{
    isComputed(arg0: P): boolean;
}