import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Feature$BeforeAnalysisAccess } from '../../../../org/graalvm/nativeimage/hosted/Feature$BeforeAnalysisAccess.d.ts'
import type { Feature$QueryReachabilityAccess } from '../../../../org/graalvm/nativeimage/hosted/Feature$QueryReachabilityAccess.d.ts'
export interface Feature$DuringAnalysisAccess extends Object, Feature$BeforeAnalysisAccess, Feature$QueryReachabilityAccess{
    requireAnalysisIteration(): void;
}