import type { ContextLocal } from '../../../../com/oracle/truffle/api/ContextLocal.d.ts'
import type { ContextThreadLocal } from '../../../../com/oracle/truffle/api/ContextThreadLocal.d.ts'
import type { TruffleLanguage$ContextLocalFactory } from '../../../../com/oracle/truffle/api/TruffleLanguage$ContextLocalFactory.d.ts'
import type { TruffleLanguage$ContextThreadLocalFactory } from '../../../../com/oracle/truffle/api/TruffleLanguage$ContextThreadLocalFactory.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TruffleLanguage$ContextLocalProvider<C extends unknown> extends Object {
    private constructor()
    // private contextLocals: ContextLocal<Object>[];
    // private contextThreadLocals: ContextThreadLocal<Object>[];
    createContextLocal<T extends unknown>(factory: (param0: C) => T): ContextLocal<T>;
    createContextThreadLocal<T extends unknown>(factory: (param0: C, param1: Thread) => T): ContextThreadLocal<T>;
}