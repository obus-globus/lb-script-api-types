import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JavaResolverSettings } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/JavaResolverSettings.d.ts'
import type { JavaResolverSettings$Companion } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/JavaResolverSettings$Companion.d.ts'
export class JavaResolverSettings$Default extends Object implements JavaResolverSettings {
    static Companion: JavaResolverSettings$Companion;
    static INSTANCE: JavaResolverSettings$Default;
    private constructor()
    getCorrectNullabilityForNotNullTypeParameter(): boolean;
    getEnhancePrimitiveArrays(): boolean;
    getIgnoreNullabilityForErasedValueParameters(): boolean;
    getTypeEnhancementImprovementsInStrictMode(): boolean;
}