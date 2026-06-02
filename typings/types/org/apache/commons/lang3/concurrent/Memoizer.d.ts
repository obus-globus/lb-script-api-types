import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Computable } from '../../../../../org/apache/commons/lang3/concurrent/Computable.d.ts'
export class Memoizer<I extends Object | number | string | boolean, O extends Object | number | string | boolean> extends Object implements Computable<I, O> {
    constructor(arg0: (param0: I) => O)
    constructor(arg0: (param0: I) => O, arg1: boolean)
    constructor(arg0: (param0: I) => O)
    constructor(arg0: (param0: I) => O, arg1: boolean)
    // private cache: Map<I, Future<O>>;
    // private mappingFunction: (param0: I) => Future<O>;
    // private recalculate: boolean;
    compute(arg0: I): O;
    // private launderException(arg0: Throwable): RuntimeException;
}