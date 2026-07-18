import type { Parameters } from '../../../../io/ktor/http/Parameters.d.ts'
import type { RouteSelectorEvaluation } from '../../../../io/ktor/server/routing/RouteSelectorEvaluation.d.ts'
import type { RouteSelectorEvaluation$Failure } from '../../../../io/ktor/server/routing/RouteSelectorEvaluation$Failure.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RouteSelectorEvaluation$Companion extends Object {
    // private Constant: RouteSelectorEvaluation;
    /*not mapped: */ getConstant(): RouteSelectorEvaluation;
    // private ConstantPath: RouteSelectorEvaluation;
    /*not mapped: */ getConstantPath(): RouteSelectorEvaluation;
    // private Failed: RouteSelectorEvaluation$Failure;
    /*not mapped: */ getFailed(): RouteSelectorEvaluation$Failure;
    // private FailedAcceptHeader: RouteSelectorEvaluation$Failure;
    /*not mapped: */ getFailedAcceptHeader(): RouteSelectorEvaluation$Failure;
    // private FailedMethod: RouteSelectorEvaluation$Failure;
    /*not mapped: */ getFailedMethod(): RouteSelectorEvaluation$Failure;
    // private FailedParameter: RouteSelectorEvaluation$Failure;
    /*not mapped: */ getFailedParameter(): RouteSelectorEvaluation$Failure;
    // private FailedPath: RouteSelectorEvaluation$Failure;
    /*not mapped: */ getFailedPath(): RouteSelectorEvaluation$Failure;
    // private Missing: RouteSelectorEvaluation;
    /*not mapped: */ getMissing(): RouteSelectorEvaluation;
    // private Transparent: RouteSelectorEvaluation;
    /*not mapped: */ getTransparent(): RouteSelectorEvaluation;
    // private WildcardPath: RouteSelectorEvaluation;
    /*not mapped: */ getWildcardPath(): RouteSelectorEvaluation;
    qualityConstant: number;
    qualityFailedMethod: number;
    qualityFailedParameter: number;
    qualityMethodParameter: number;
    qualityMissing: number;
    qualityParameter: number;
    qualityParameterWithPrefixOrSuffix: number;
    qualityPathParameter: number;
    qualityQueryParameter: number;
    qualityTailcard: number;
    qualityTransparent: number;
    qualityWildcard: number;
    invoke(succeeded: boolean, quality: number, parameters: Parameters, segmentIncrement: number): RouteSelectorEvaluation;
}