import type { Parameters } from '../../../../io/ktor/http/Parameters.d.ts'
import type { RouteSelectorEvaluation } from '../../../../io/ktor/server/routing/RouteSelectorEvaluation.d.ts'
import type { RouteSelectorEvaluation$Companion } from '../../../../io/ktor/server/routing/RouteSelectorEvaluation$Companion.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RouteSelectorEvaluation$Success extends RouteSelectorEvaluation {
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
    constructor(quality: number, parameters: Parameters, segmentIncrement: number)
    readonly parameters: Parameters;
    readonly quality: number;
    readonly segmentIncrement: number;
    component1(): number;
    component2(): Parameters;
    component3(): number;
    copy(quality: number, parameters: Parameters, segmentIncrement: number): RouteSelectorEvaluation$Success;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}