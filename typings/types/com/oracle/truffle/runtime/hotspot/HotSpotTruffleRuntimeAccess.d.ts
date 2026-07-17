import type { TruffleRuntime } from '../../../../../com/oracle/truffle/api/TruffleRuntime.d.ts'
import type { TruffleRuntimeAccess } from '../../../../../com/oracle/truffle/api/TruffleRuntimeAccess.d.ts'
import type { TruffleCompilationSupport } from '../../../../../com/oracle/truffle/compiler/TruffleCompilationSupport.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Version } from '../../../../../org/graalvm/home/Version.d.ts'
export class HotSpotTruffleRuntimeAccess extends Object implements TruffleRuntimeAccess {
    static getCompilerVersion(paramcompilationSupport: TruffleCompilationSupport): Version;
    constructor()
    getPriority(): number;
    getRuntime(): TruffleRuntime;
}