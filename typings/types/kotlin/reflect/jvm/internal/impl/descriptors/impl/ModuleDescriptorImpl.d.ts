import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../../../../kotlin/Lazy.d.ts'
import type { KotlinBuiltIns } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DeclarationDescriptorVisitor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptorVisitor.d.ts'
import type { ModuleCapability } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleCapability.d.ts'
import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { PackageFragmentProvider } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageFragmentProvider.d.ts'
import type { PackageViewDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageViewDescriptor.d.ts'
import type { CompositePackageFragmentProvider } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/CompositePackageFragmentProvider.d.ts'
import type { DeclarationDescriptorImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/DeclarationDescriptorImpl.d.ts'
import type { ModuleDependencies } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/ModuleDependencies.d.ts'
import type { PackageViewDescriptorFactory } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/PackageViewDescriptorFactory.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { MemoizedFunctionToNotNull } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/MemoizedFunctionToNotNull.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
export class ModuleDescriptorImpl extends DeclarationDescriptorImpl implements ModuleDescriptor {
    static toString(paramarg0: DeclarationDescriptor): string;
    constructor(arg0: Name, arg1: StorageManager, arg2: KotlinBuiltIns, arg3: Object[])
    constructor(arg0: Name, arg1: StorageManager, arg2: KotlinBuiltIns, arg3: Object[], arg4: JavaMap<ModuleCapability<Object>, Object | null>, arg5: Name)
    readonly builtIns: KotlinBuiltIns;
    // private capabilities: JavaMap<ModuleCapability<Object>, Object>;
    readonly dependencies: ModuleDependencies;
    // private isValid: boolean;
    // private packageFragmentProviderForModuleContent: PackageFragmentProvider;
    // private packageFragmentProviderForWholeModuleWithDependencies$delegate: Lazy<Object>;
    // private packageViewDescriptorFactory: PackageViewDescriptorFactory;
    // private packages: MemoizedFunctionToNotNull<FqName, PackageViewDescriptor>;
    // private platform: Object[];
    // private stableName: Name;
    // private storageManager: StorageManager;
    accept<R extends unknown, D extends unknown>(arg0: DeclarationDescriptorVisitor<R, D>, arg1: D): R;
    assertValid(): void;
    getBuiltIns(): KotlinBuiltIns;
    getCapability<T extends unknown>(arg0: ModuleCapability<T>): T;
    getContainingDeclaration(): DeclarationDescriptor;
    getExpectedByModules(): ModuleDescriptor[];
    // private getId(): string;
    getPackage(arg0: FqName): PackageViewDescriptor;
    getPackageFragmentProvider(): PackageFragmentProvider;
    // private getPackageFragmentProviderForWholeModuleWithDependencies(): CompositePackageFragmentProvider;
    getSubPackagesOf(arg0: FqName, arg1: (param0: Name) => boolean): FqName[];
    initialize(arg0: PackageFragmentProvider): void;
    // private isInitialized(): boolean;
    isValid(): boolean;
    setDependencies(...arg0: ModuleDescriptorImpl[]): void;
    setDependencies(arg0: ModuleDescriptorImpl[]): void;
    setDependencies(arg0: ModuleDescriptorImpl[], arg1: ModuleDescriptorImpl[]): void;
    setDependencies(arg0: ModuleDependencies): void;
    shouldSeeInternalsOf(arg0: ModuleDescriptor): boolean;
    toString(): string;
}