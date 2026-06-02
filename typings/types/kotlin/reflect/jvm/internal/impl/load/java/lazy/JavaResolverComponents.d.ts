import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ReflectionTypes } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/ReflectionTypes.d.ts'
import type { ModuleDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { SupertypeLoopChecker } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SupertypeLoopChecker.d.ts'
import type { LookupTracker } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/incremental/components/LookupTracker.d.ts'
import type { AnnotationTypeQualifierResolver } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/AnnotationTypeQualifierResolver.d.ts'
import type { JavaClassFinder } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/JavaClassFinder.d.ts'
import type { JavaClassesTracker } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/JavaClassesTracker.d.ts'
import type { JavaModuleAnnotationsProvider } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/JavaModuleAnnotationsProvider.d.ts'
import type { JavaTypeEnhancementState } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/JavaTypeEnhancementState.d.ts'
import type { JavaPropertyInitializerEvaluator } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/components/JavaPropertyInitializerEvaluator.d.ts'
import type { JavaResolverCache } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/components/JavaResolverCache.d.ts'
import type { SignaturePropagator } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/components/SignaturePropagator.d.ts'
import type { JavaResolverSettings } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/JavaResolverSettings.d.ts'
import type { ModuleClassResolver } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/ModuleClassResolver.d.ts'
import type { JavaSourceElementFactory } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/sources/JavaSourceElementFactory.d.ts'
import type { SignatureEnhancement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/typeEnhancement/SignatureEnhancement.d.ts'
import type { DeserializedDescriptorResolver } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/DeserializedDescriptorResolver.d.ts'
import type { KotlinClassFinder } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinClassFinder.d.ts'
import type { PackagePartProvider } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/PackagePartProvider.d.ts'
import type { SyntheticJavaPartsProvider } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/jvm/SyntheticJavaPartsProvider.d.ts'
import type { SamConversionResolver } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/sam/SamConversionResolver.d.ts'
import type { ErrorReporter } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ErrorReporter.d.ts'
import type { StorageManager } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
import type { NewKotlinTypeChecker } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/NewKotlinTypeChecker.d.ts'
export class JavaResolverComponents extends Object {
    constructor(arg0: StorageManager, arg1: JavaClassFinder, arg2: KotlinClassFinder, arg3: DeserializedDescriptorResolver, arg4: SignaturePropagator, arg5: ErrorReporter, arg6: JavaResolverCache, arg7: JavaPropertyInitializerEvaluator, arg8: SamConversionResolver, arg9: JavaSourceElementFactory, arg10: ModuleClassResolver, arg11: PackagePartProvider, arg12: SupertypeLoopChecker, arg13: LookupTracker, arg14: ModuleDescriptor, arg15: ReflectionTypes, arg16: AnnotationTypeQualifierResolver, arg17: SignatureEnhancement, arg18: JavaClassesTracker, arg19: JavaResolverSettings, arg20: NewKotlinTypeChecker, arg21: JavaTypeEnhancementState, arg22: JavaModuleAnnotationsProvider, arg23: SyntheticJavaPartsProvider)
    readonly annotationTypeQualifierResolver: AnnotationTypeQualifierResolver;
    readonly deserializedDescriptorResolver: DeserializedDescriptorResolver;
    readonly errorReporter: ErrorReporter;
    readonly finder: JavaClassFinder;
    readonly javaClassesTracker: JavaClassesTracker;
    readonly javaModuleResolver: JavaModuleAnnotationsProvider;
    readonly javaPropertyInitializerEvaluator: JavaPropertyInitializerEvaluator;
    readonly javaResolverCache: JavaResolverCache;
    readonly javaTypeEnhancementState: JavaTypeEnhancementState;
    readonly kotlinClassFinder: KotlinClassFinder;
    readonly kotlinTypeChecker: NewKotlinTypeChecker;
    readonly lookupTracker: LookupTracker;
    readonly module: ModuleDescriptor;
    readonly moduleClassResolver: ModuleClassResolver;
    readonly packagePartProvider: PackagePartProvider;
    readonly reflectionTypes: ReflectionTypes;
    // private samConversionResolver: SamConversionResolver;
    readonly settings: JavaResolverSettings;
    readonly signatureEnhancement: SignatureEnhancement;
    readonly signaturePropagator: SignaturePropagator;
    readonly sourceElementFactory: JavaSourceElementFactory;
    readonly storageManager: StorageManager;
    readonly supertypeLoopChecker: SupertypeLoopChecker;
    readonly syntheticPartsProvider: SyntheticJavaPartsProvider;
    getAnnotationTypeQualifierResolver(): AnnotationTypeQualifierResolver;
    getDeserializedDescriptorResolver(): DeserializedDescriptorResolver;
    getErrorReporter(): ErrorReporter;
    getFinder(): JavaClassFinder;
    getJavaClassesTracker(): JavaClassesTracker;
    getJavaModuleResolver(): JavaModuleAnnotationsProvider;
    getJavaPropertyInitializerEvaluator(): JavaPropertyInitializerEvaluator;
    getJavaResolverCache(): JavaResolverCache;
    getJavaTypeEnhancementState(): JavaTypeEnhancementState;
    getKotlinClassFinder(): KotlinClassFinder;
    getKotlinTypeChecker(): NewKotlinTypeChecker;
    getLookupTracker(): LookupTracker;
    getModule(): ModuleDescriptor;
    getModuleClassResolver(): ModuleClassResolver;
    getPackagePartProvider(): PackagePartProvider;
    getReflectionTypes(): ReflectionTypes;
    getSettings(): JavaResolverSettings;
    getSignatureEnhancement(): SignatureEnhancement;
    getSignaturePropagator(): SignaturePropagator;
    getSourceElementFactory(): JavaSourceElementFactory;
    getStorageManager(): StorageManager;
    getSupertypeLoopChecker(): SupertypeLoopChecker;
    getSyntheticPartsProvider(): SyntheticJavaPartsProvider;
    replace(arg0: JavaResolverCache): JavaResolverComponents;
}