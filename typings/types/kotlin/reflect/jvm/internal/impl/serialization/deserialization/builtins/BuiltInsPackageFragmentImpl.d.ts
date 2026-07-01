import type { DefaultConstructorMarker } from '../../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { BuiltInsPackageFragment } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/BuiltInsPackageFragment.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { ModuleDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { ProtoBuf$PackageFragment } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$PackageFragment.d.ts'
import type { BuiltInsBinaryVersion } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/builtins/BuiltInsBinaryVersion.d.ts'
import type { FqName } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { DeserializedPackageFragmentImpl } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/DeserializedPackageFragmentImpl.d.ts'
import type { BuiltInsPackageFragmentImpl$Companion } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/builtins/BuiltInsPackageFragmentImpl$Companion.d.ts'
import type { StorageManager } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
export class BuiltInsPackageFragmentImpl extends DeserializedPackageFragmentImpl implements BuiltInsPackageFragment {
    static Companion: BuiltInsPackageFragmentImpl$Companion;
    static toString(paramarg0: DeclarationDescriptor): string;
    constructor(arg0: FqName, arg1: StorageManager, arg2: ModuleDescriptor, arg3: ProtoBuf$PackageFragment, arg4: BuiltInsBinaryVersion, arg5: boolean, arg6: DefaultConstructorMarker)
    // private isFallback: boolean;
    toString(): string;
}