import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { ClassDescriptorFactory } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/deserialization/ClassDescriptorFactory.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
export class BuiltInFictitiousFunctionClassFactory extends Object implements ClassDescriptorFactory {
    constructor(arg0: StorageManager, arg1: ModuleDescriptor)
    // private module: ModuleDescriptor;
    // private storageManager: StorageManager;
    createClass(arg0: ClassId): ClassDescriptor;
    getAllContributedClassesIfPossible(arg0: FqName): E[];
    shouldCreateClass(arg0: FqName, arg1: Name): boolean;
}