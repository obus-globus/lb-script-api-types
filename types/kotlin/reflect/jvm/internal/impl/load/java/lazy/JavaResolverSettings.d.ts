import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface JavaResolverSettings extends Object{
    getCorrectNullabilityForNotNullTypeParameter(): boolean;
    getEnhancePrimitiveArrays(): boolean;
    getIgnoreNullabilityForErasedValueParameters(): boolean;
    getTypeEnhancementImprovementsInStrictMode(): boolean;
}