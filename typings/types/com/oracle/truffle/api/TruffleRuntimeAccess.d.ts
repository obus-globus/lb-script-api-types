import type { TruffleRuntime } from '../../../../com/oracle/truffle/api/TruffleRuntime.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TruffleRuntimeAccess extends Object{
    getPriority(): number;
    getRuntime(): TruffleRuntime;
}