import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { SourceElement } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { PackageFragmentDescriptorImpl } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/PackageFragmentDescriptorImpl.d.ts'
import type { LazyJavaResolverContext } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/LazyJavaResolverContext.d.ts'
import type { JvmPackageScope } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/descriptors/JvmPackageScope.d.ts'
import type { JavaClass } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaClass.d.ts'
import type { JavaPackage } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaPackage.d.ts'
import type { KotlinJvmBinaryClass } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass.d.ts'
import type { MetadataVersion } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/MetadataVersion.d.ts'
import type { FqName } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { NotNullLazyValue } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
export class LazyJavaPackageFragment extends PackageFragmentDescriptorImpl {
    static toString(paramarg0: DeclarationDescriptor): string;
    constructor(arg0: LazyJavaResolverContext, arg1: JavaPackage)
    readonly annotations: AnnotationDescriptor[];
    // private binaryClasses$delegate: NotNullLazyValue<Object>;
    // private c: LazyJavaResolverContext;
    // private jPackage: JavaPackage;
    // private metadataVersion: MetadataVersion;
    // private partToFacade$delegate: NotNullLazyValue<Object>;
    // private scope: JvmPackageScope;
    // private subPackages: NotNullLazyValue<FqName[]>;
    findClassifierByJavaClass$org_jetbrains_kotlin_descriptors_jvm(arg0: JavaClass): ClassDescriptor;
    getAnnotations(): AnnotationDescriptor[];
    getBinaryClasses$org_jetbrains_kotlin_descriptors_jvm(): { [key: string]: KotlinJvmBinaryClass };
    getMemberScope(): JvmPackageScope;
    getSource(): SourceElement;
    getSubPackageFqNames$org_jetbrains_kotlin_descriptors_jvm(): FqName[];
    toString(): string;
}