import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TruffleToLibGraal$Id extends Enum<TruffleToLibGraal$Id> {
    static CompilerOptionExists: TruffleToLibGraal$Id;
    static DoCompile: TruffleToLibGraal$Id;
    static GetCompilationId: TruffleToLibGraal$Id;
    static GetCompilerConfigurationFactoryName: TruffleToLibGraal$Id;
    static GetCompilerVersion: TruffleToLibGraal$Id;
    static GetDataPatchesCount: TruffleToLibGraal$Id;
    static GetExceptionHandlersCount: TruffleToLibGraal$Id;
    static GetInfopoints: TruffleToLibGraal$Id;
    static GetInfopointsCount: TruffleToLibGraal$Id;
    static GetMarksCount: TruffleToLibGraal$Id;
    static GetNodeCount: TruffleToLibGraal$Id;
    static GetNodeTypes: TruffleToLibGraal$Id;
    static GetSuppliedString: TruffleToLibGraal$Id;
    static GetTargetCodeSize: TruffleToLibGraal$Id;
    static GetTotalFrameSize: TruffleToLibGraal$Id;
    static InitializeCompiler: TruffleToLibGraal$Id;
    static InitializeIsolate: TruffleToLibGraal$Id;
    static InitializeRuntime: TruffleToLibGraal$Id;
    static InstallTruffleCallBoundaryMethod: TruffleToLibGraal$Id;
    static InstallTruffleReservedOopMethod: TruffleToLibGraal$Id;
    static ListCompilerOptions: TruffleToLibGraal$Id;
    static NewCompiler: TruffleToLibGraal$Id;
    static PendingTransferToInterpreterOffset: TruffleToLibGraal$Id;
    static PurgePartialEvaluationCaches: TruffleToLibGraal$Id;
    static RegisterRuntime: TruffleToLibGraal$Id;
    static Shutdown: TruffleToLibGraal$Id;
    static ValidateCompilerOption: TruffleToLibGraal$Id;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TruffleToLibGraal$Id;
    static values(): TruffleToLibGraal$Id[];
    private constructor()
    getMethodName(): string;
    name(): "DoCompile" | "GetCompilerConfigurationFactoryName" | "GetCompilerVersion" | "GetDataPatchesCount" | "GetExceptionHandlersCount" | "GetInfopoints" | "GetInfopointsCount" | "GetMarksCount" | "GetNodeCount" | "GetNodeTypes" | "GetSuppliedString" | "GetCompilationId" | "GetTargetCodeSize" | "GetTotalFrameSize" | "InitializeIsolate" | "InitializeCompiler" | "RegisterRuntime" | "ListCompilerOptions" | "CompilerOptionExists" | "ValidateCompilerOption" | "InitializeRuntime" | "InstallTruffleCallBoundaryMethod" | "InstallTruffleReservedOopMethod" | "NewCompiler" | "PendingTransferToInterpreterOffset" | "PurgePartialEvaluationCaches" | "Shutdown";
}