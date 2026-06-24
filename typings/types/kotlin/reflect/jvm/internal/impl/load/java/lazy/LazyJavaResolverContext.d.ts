import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../../../../../kotlin/Lazy.d.ts'
import type { ModuleDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { JavaTypeQualifiersByElementType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/JavaTypeQualifiersByElementType.d.ts'
import type { JavaResolverComponents } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/JavaResolverComponents.d.ts'
import type { TypeParameterResolver } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/TypeParameterResolver.d.ts'
import type { JavaTypeResolver } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/types/JavaTypeResolver.d.ts'
import type { StorageManager } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
export class LazyJavaResolverContext extends Object {
    constructor(arg0: JavaResolverComponents, arg1: TypeParameterResolver, arg2: Lazy<JavaTypeQualifiersByElementType>)
    readonly components: JavaResolverComponents;
    // private delegateForDefaultTypeQualifiers: Lazy<JavaTypeQualifiersByElementType>;
    readonly typeParameterResolver: TypeParameterResolver;
    readonly typeResolver: JavaTypeResolver;
    getComponents(): JavaResolverComponents;
    getDefaultTypeQualifiers(): JavaTypeQualifiersByElementType;
    getDelegateForDefaultTypeQualifiers$org_jetbrains_kotlin_descriptors_jvm(): Lazy<JavaTypeQualifiersByElementType>;
    getModule(): ModuleDescriptor;
    getStorageManager(): StorageManager;
    getTypeParameterResolver(): TypeParameterResolver;
    getTypeResolver(): JavaTypeResolver;
}