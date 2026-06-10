import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { KotlinBuiltIns } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DeclarationDescriptorVisitor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptorVisitor.d.ts'
import type { ModuleCapability } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleCapability.d.ts'
import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { PackageViewDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageViewDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class ErrorModuleDescriptor extends Object implements ModuleDescriptor {
    static INSTANCE: ErrorModuleDescriptor;
    private constructor()
    accept<R extends Object | number | string | boolean, D extends Object | number | string | boolean>(arg0: DeclarationDescriptorVisitor<R, D>, arg1: D): R;
    getAnnotations(): AnnotationDescriptor[];
    getBuiltIns(): KotlinBuiltIns;
    getCapability<T extends Object | number | string | boolean>(arg0: ModuleCapability<T>): T;
    getContainingDeclaration(): DeclarationDescriptor;
    getExpectedByModules(): ModuleDescriptor[];
    getName(): Name;
    getOriginal(): DeclarationDescriptor;
    getPackage(arg0: FqName): PackageViewDescriptor;
    getStableName(): Name;
    getSubPackagesOf(arg0: FqName, arg1: (param0: Name) => boolean): FqName[];
    shouldSeeInternalsOf(arg0: ModuleDescriptor): boolean;
}