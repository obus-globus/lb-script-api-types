import type { ContextLocal } from '../../../../../com/oracle/truffle/api/ContextLocal.d.ts'
import type { ContextThreadLocal } from '../../../../../com/oracle/truffle/api/ContextThreadLocal.d.ts'
import type { TruffleContext } from '../../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { TruffleInstrument$ContextLocalFactory } from '../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$ContextLocalFactory.d.ts'
import type { TruffleInstrument$ContextThreadLocalFactory } from '../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$ContextThreadLocalFactory.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TruffleInstrument$ContextLocalProvider extends Object {
    private constructor()
    // private contextLocals: ContextLocal<Object>[];
    // private contextThreadLocals: ContextThreadLocal<Object>[];
    createContextLocal(factory: (param0: T) => unknown): ContextLocal<T>;
    createContextThreadLocal(factory: (param0: T, param1: TruffleContext) => unknown): ContextThreadLocal<T>;
}