import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DeclarationDescriptorVisitor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptorVisitor.d.ts'
import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { PackageFragmentDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageFragmentDescriptor.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { DeclarationDescriptorNonRootImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/DeclarationDescriptorNonRootImpl.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export abstract class PackageFragmentDescriptorImpl extends DeclarationDescriptorNonRootImpl implements PackageFragmentDescriptor {
    static toString(paramarg0: DeclarationDescriptor): string;
    constructor(arg0: ModuleDescriptor, arg1: FqName)
    // private debugString: string;
    readonly fqName: FqName;
    accept<R extends Object | number | string | boolean, D extends Object | number | string | boolean>(arg0: DeclarationDescriptorVisitor<R, D>, arg1: D): R;
    getContainingDeclaration(): ModuleDescriptor;
    getFqName(): FqName;
    getSource(): SourceElement;
    toString(): string;
}