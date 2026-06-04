import type { TruffleCompilerListener$CompilationResultInfo } from '../../../../../../com/oracle/truffle/compiler/TruffleCompilerListener$CompilationResultInfo.d.ts'
import type { LibGraalScopedHandle } from '../../../../../../com/oracle/truffle/runtime/hotspot/libgraal/LibGraalScopedHandle.d.ts'
export class LibGraalCompilationResultInfo extends LibGraalScopedHandle implements TruffleCompilerListener$CompilationResultInfo {
    constructor(handle: number)
    getCompilationId(): number;
    getDataPatchesCount(): number;
    getExceptionHandlersCount(): number;
    getInfopoints(): string[];
    getInfopointsCount(): number;
    getMarksCount(): number;
    getTargetCodeSize(): number;
    getTotalFrameSize(): number;
}