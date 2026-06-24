import type { InputStream } from '../../../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { ModuleDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { FqName } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { BuiltInsPackageFragmentImpl } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/builtins/BuiltInsPackageFragmentImpl.d.ts'
import type { StorageManager } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
export class BuiltInsPackageFragmentImpl$Companion extends Object {
    private constructor()
    constructor(arg0: DefaultConstructorMarker)
    create(arg0: FqName, arg1: StorageManager, arg2: ModuleDescriptor, arg3: InputStream, arg4: boolean): BuiltInsPackageFragmentImpl;
}