import type { TruffleRuntime } from '../../../../../com/oracle/truffle/api/TruffleRuntime.d.ts'
import type { TruffleRuntimeAccess } from '../../../../../com/oracle/truffle/api/TruffleRuntimeAccess.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HotSpotTruffleRuntimeAccess extends Object implements TruffleRuntimeAccess {
    constructor()
    getPriority(): number;
    getPriority(): number;
    getRuntime(): TruffleRuntime;
}