import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../../kotlin/jvm/functions/Function1.d.ts'
export interface MemoizedFunctionToNullable<P extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object, Function1<P, R>{
    isComputed(arg0: P): boolean;
}