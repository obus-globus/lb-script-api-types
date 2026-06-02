import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ModuleDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { NotFoundClasses$ClassRequest } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/NotFoundClasses$ClassRequest.d.ts'
import type { PackageFragmentDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageFragmentDescriptor.d.ts'
import type { ClassId } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { FqName } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { MemoizedFunctionToNotNull } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/MemoizedFunctionToNotNull.d.ts'
import type { StorageManager } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
export class NotFoundClasses extends Object {
    constructor(arg0: StorageManager, arg1: ModuleDescriptor)
    // private classes: MemoizedFunctionToNotNull<NotFoundClasses$ClassRequest, ClassDescriptor>;
    // private module: ModuleDescriptor;
    // private packageFragments: MemoizedFunctionToNotNull<FqName, PackageFragmentDescriptor>;
    // private storageManager: StorageManager;
    getClass(arg0: ClassId, arg1: number[]): ClassDescriptor;
}