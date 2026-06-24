import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { JvmBuiltInClassDescriptorFactory$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/jvm/JvmBuiltInClassDescriptorFactory$Companion.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { ClassDescriptorFactory } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/deserialization/ClassDescriptorFactory.d.ts'
import type { ClassDescriptorImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/ClassDescriptorImpl.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { NotNullLazyValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
export class JvmBuiltInClassDescriptorFactory extends Object implements ClassDescriptorFactory {
    static Companion: JvmBuiltInClassDescriptorFactory$Companion;
    constructor(arg0: StorageManager, arg1: ModuleDescriptor, arg2: (param0: ModuleDescriptor) => DeclarationDescriptor)
    constructor(arg0: StorageManager, arg1: ModuleDescriptor, arg2: (param0: Object | null) => Object | null, arg3: number, arg4: DefaultConstructorMarker)
    // private cloneable$delegate: NotNullLazyValue<Object>;
    // private computeContainingDeclaration: (param0: ModuleDescriptor) => DeclarationDescriptor;
    // private moduleDescriptor: ModuleDescriptor;
    createClass(arg0: ClassId): ClassDescriptor;
    getAllContributedClassesIfPossible(arg0: FqName): ClassDescriptor[];
    // private getCloneable(): ClassDescriptorImpl;
    shouldCreateClass(arg0: FqName, arg1: Name): boolean;
}