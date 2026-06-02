import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Future } from '../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParseContext } from '../../../../org/apache/tika/parser/ParseContext.d.ts'
export class ConcurrentUtils extends Object {
    static execute(paramarg0: ParseContext, paramarg1: () => void): Future<Object>;
    constructor()
}