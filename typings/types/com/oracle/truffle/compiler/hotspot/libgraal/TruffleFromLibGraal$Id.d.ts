import type { FromLibGraalId } from '../../../../../../com/oracle/truffle/compiler/hotspot/libgraal/FromLibGraalId.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TruffleFromLibGraal$Id extends Enum<TruffleFromLibGraal$Id> implements FromLibGraalId {
    static AddInlinedTarget: TruffleFromLibGraal$Id;
    static AddTargetToDequeue: TruffleFromLibGraal$Id;
    static AsJavaConstant: TruffleFromLibGraal$Id;
    static CanBeInlined: TruffleFromLibGraal$Id;
    static CancelCompilation: TruffleFromLibGraal$Id;
    static CompilableToString: TruffleFromLibGraal$Id;
    static ConsumeOptimizedAssumptionDependency: TruffleFromLibGraal$Id;
    static CountDirectCallNodes: TruffleFromLibGraal$Id;
    static CreateStringSupplier: TruffleFromLibGraal$Id;
    static EngineId: TruffleFromLibGraal$Id;
    static GetCompilableCallCount: TruffleFromLibGraal$Id;
    static GetCompilableName: TruffleFromLibGraal$Id;
    static GetCompilerOptions: TruffleFromLibGraal$Id;
    static GetDebugProperties: TruffleFromLibGraal$Id;
    static GetDescription: TruffleFromLibGraal$Id;
    static GetFailedSpeculationsAddress: TruffleFromLibGraal$Id;
    static GetKnownCallSiteCount: TruffleFromLibGraal$Id;
    static GetLanguage: TruffleFromLibGraal$Id;
    static GetLineNumber: TruffleFromLibGraal$Id;
    static GetNodeClassName: TruffleFromLibGraal$Id;
    static GetNodeId: TruffleFromLibGraal$Id;
    static GetNonTrivialNodeCount: TruffleFromLibGraal$Id;
    static GetOffsetEnd: TruffleFromLibGraal$Id;
    static GetOffsetStart: TruffleFromLibGraal$Id;
    static GetPosition: TruffleFromLibGraal$Id;
    static GetSuccessfulCompilationCount: TruffleFromLibGraal$Id;
    static GetSuppliedString: TruffleFromLibGraal$Id;
    static GetURI: TruffleFromLibGraal$Id;
    static HasNextTier: TruffleFromLibGraal$Id;
    static IsCancelled: TruffleFromLibGraal$Id;
    static IsLastTier: TruffleFromLibGraal$Id;
    static IsSameOrSplit: TruffleFromLibGraal$Id;
    static IsSuppressedFailure: TruffleFromLibGraal$Id;
    static IsTrivial: TruffleFromLibGraal$Id;
    static Log: TruffleFromLibGraal$Id;
    static OnCodeInstallation: TruffleFromLibGraal$Id;
    static OnCompilationFailed: TruffleFromLibGraal$Id;
    static OnCompilationRetry: TruffleFromLibGraal$Id;
    static OnCompilationSuccess: TruffleFromLibGraal$Id;
    static OnFailure: TruffleFromLibGraal$Id;
    static OnGraalTierFinished: TruffleFromLibGraal$Id;
    static OnIsolateShutdown: TruffleFromLibGraal$Id;
    static OnSuccess: TruffleFromLibGraal$Id;
    static OnTruffleTierFinished: TruffleFromLibGraal$Id;
    static PrepareForCompilation: TruffleFromLibGraal$Id;
    static RegisterOptimizedAssumptionDependency: TruffleFromLibGraal$Id;
    static SetCallCounts: TruffleFromLibGraal$Id;
    static encodeMethodSignature(paramreturnType: Class<Object>, ...paramparameterTypes: Class<Object>[]): string;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TruffleFromLibGraal$Id;
    static values(): TruffleFromLibGraal$Id[];
    private constructor()
    readonly methodName: string;
    readonly parameterTypes: Class<Object>[];
    readonly returnType: Class<Object>;
    readonly signature: string;
    getMethodName(): string;
    getName(): string;
    getParameterTypes(): Class<Object>[];
    getReturnType(): Class<Object>;
    getSignature(): string;
    toString(): string;
    name(): "AddInlinedTarget" | "AddTargetToDequeue" | "AsJavaConstant" | "CanBeInlined" | "CancelCompilation" | "CompilableToString" | "ConsumeOptimizedAssumptionDependency" | "CountDirectCallNodes" | "CreateStringSupplier" | "EngineId" | "GetCompilableCallCount" | "GetCompilableName" | "GetCompilerOptions" | "GetDebugProperties" | "GetDescription" | "GetFailedSpeculationsAddress" | "GetKnownCallSiteCount" | "GetLanguage" | "GetLineNumber" | "GetNodeClassName" | "GetNodeId" | "GetNonTrivialNodeCount" | "GetOffsetEnd" | "GetOffsetStart" | "GetPosition" | "GetSuccessfulCompilationCount" | "GetSuppliedString" | "GetURI" | "HasNextTier" | "IsCancelled" | "IsLastTier" | "IsSameOrSplit" | "IsSuppressedFailure" | "IsTrivial" | "Log" | "OnCodeInstallation" | "OnCompilationFailed" | "OnCompilationRetry" | "OnCompilationSuccess" | "OnFailure" | "OnGraalTierFinished" | "OnIsolateShutdown" | "OnSuccess" | "OnTruffleTierFinished" | "PrepareForCompilation" | "RegisterOptimizedAssumptionDependency" | "SetCallCounts";
}