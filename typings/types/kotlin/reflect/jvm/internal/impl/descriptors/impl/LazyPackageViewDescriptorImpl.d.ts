import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DeclarationDescriptorVisitor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptorVisitor.d.ts'
import type { PackageFragmentDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageFragmentDescriptor.d.ts'
import type { PackageViewDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageViewDescriptor.d.ts'
import type { DeclarationDescriptorImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/DeclarationDescriptorImpl.d.ts'
import type { ModuleDescriptorImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/ModuleDescriptorImpl.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { MemberScope } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { NotNullLazyValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
export class LazyPackageViewDescriptorImpl extends DeclarationDescriptorImpl implements PackageViewDescriptor {
    static toString(paramarg0: DeclarationDescriptor): string;
    constructor(arg0: ModuleDescriptorImpl, arg1: FqName, arg2: StorageManager)
    // private empty$delegate: NotNullLazyValue<Object>;
    readonly fqName: FqName;
    // private fragments$delegate: NotNullLazyValue<Object>;
    readonly memberScope: MemberScope;
    readonly module: ModuleDescriptorImpl;
    accept<R extends unknown, D extends unknown>(arg0: DeclarationDescriptorVisitor<R, D>, arg1: D): R;
    equals(arg0: Object | null): boolean;
    getContainingDeclaration(): PackageViewDescriptor;
    getEmpty(): boolean;
    getFqName(): FqName;
    getFragments(): PackageFragmentDescriptor[];
    getMemberScope(): MemberScope;
    getModule(): ModuleDescriptorImpl;
    hashCode(): number;
    isEmpty(): boolean;
}