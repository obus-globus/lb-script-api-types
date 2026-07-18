import type { RouteSelectorEvaluation } from '../../../../io/ktor/server/routing/RouteSelectorEvaluation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RouteSelectorKt extends Object {
    static evaluatePathSegmentParameter(segments: string[], segmentIndex: number, name: string, prefix: string | null, suffix: string | null, isOptional: boolean): RouteSelectorEvaluation;
}