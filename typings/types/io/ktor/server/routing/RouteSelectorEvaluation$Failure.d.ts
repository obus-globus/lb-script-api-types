import type { HttpStatusCode } from '../../../../io/ktor/http/HttpStatusCode.d.ts'
import type { RouteSelectorEvaluation } from '../../../../io/ktor/server/routing/RouteSelectorEvaluation.d.ts'
import type { RouteSelectorEvaluation$Companion } from '../../../../io/ktor/server/routing/RouteSelectorEvaluation$Companion.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RouteSelectorEvaluation$Failure extends RouteSelectorEvaluation {
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
    constructor(quality: number, failureStatusCode: HttpStatusCode)
    readonly failureStatusCode: HttpStatusCode;
    readonly quality: number;
    component1(): number;
    component2(): HttpStatusCode;
    copy(quality: number, failureStatusCode: HttpStatusCode): RouteSelectorEvaluation$Failure;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}