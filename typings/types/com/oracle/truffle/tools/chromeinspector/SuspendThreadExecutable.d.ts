import type { DebugException } from '../../../../../com/oracle/truffle/api/debug/DebugException.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface SuspendThreadExecutable<T extends unknown> extends Object{
    executeCommand(): T;
    processException(dex: DebugException): T;
}