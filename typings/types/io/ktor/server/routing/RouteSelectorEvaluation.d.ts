import type { RouteSelectorEvaluation$Companion } from '../../../../io/ktor/server/routing/RouteSelectorEvaluation$Companion.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RouteSelectorEvaluation extends Object {
    static Companion: RouteSelectorEvaluation$Companion;
    static qualityConstant: number;
    static qualityFailedMethod: number;
    static qualityFailedParameter: number;
    static qualityMethodParameter: number;
    static qualityMissing: number;
    static qualityParameter: number;
    static qualityParameterWithPrefixOrSuffix: number;
    static qualityPathParameter: number;
    static qualityQueryParameter: number;
    static qualityTailcard: number;
    static qualityTransparent: number;
    static qualityWildcard: number;
    protected constructor(succeeded: boolean)
    readonly succeeded: boolean;
}