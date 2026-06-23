import type { TruffleContext } from '../../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { DebugValue } from '../../../../../com/oracle/truffle/api/debug/DebugValue.d.ts'
import type { DebuggerExecutionLifecycle } from '../../../../../com/oracle/truffle/api/debug/DebuggerExecutionLifecycle.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DebugContext extends Object {
    constructor(executionLifecycle: DebuggerExecutionLifecycle, context: TruffleContext)
    // private context: TruffleContext;
    // private executionLifecycle: DebuggerExecutionLifecycle;
    evaluate(code: string, languageId: string): DebugValue;
    getParent(): DebugContext;
    runInContext<T extends unknown>(run: () => T): T;
}