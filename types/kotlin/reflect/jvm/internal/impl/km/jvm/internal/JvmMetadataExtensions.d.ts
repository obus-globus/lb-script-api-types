import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { KmClass } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmClass.d.ts'
import type { KmConstructor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmConstructor.d.ts'
import type { KmEnumEntry } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmEnumEntry.d.ts'
import type { KmFunction } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmFunction.d.ts'
import type { KmPackage } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmPackage.d.ts'
import type { KmProperty } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmProperty.d.ts'
import type { KmType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmType.d.ts'
import type { KmTypeAlias } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmTypeAlias.d.ts'
import type { KmTypeParameter } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmTypeParameter.d.ts'
import type { KmValueParameter } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmValueParameter.d.ts'
import type { ReadContext } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/ReadContext.d.ts'
import type { WriteContext } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/WriteContext.d.ts'
import type { KmModuleFragment } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/common/KmModuleFragment.d.ts'
import type { KmClassExtension } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmClassExtension.d.ts'
import type { KmConstructorExtension } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmConstructorExtension.d.ts'
import type { KmEnumEntryExtension } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmEnumEntryExtension.d.ts'
import type { KmFunctionExtension } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmFunctionExtension.d.ts'
import type { KmModuleFragmentExtension } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmModuleFragmentExtension.d.ts'
import type { KmPackageExtension } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmPackageExtension.d.ts'
import type { KmPropertyExtension } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmPropertyExtension.d.ts'
import type { KmTypeAliasExtension } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmTypeAliasExtension.d.ts'
import type { KmTypeExtension } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmTypeExtension.d.ts'
import type { KmTypeParameterExtension } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmTypeParameterExtension.d.ts'
import type { KmValueParameterExtension } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmValueParameterExtension.d.ts'
import type { MetadataExtensions } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/MetadataExtensions.d.ts'
import type { MetadataExtensions$Companion } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/MetadataExtensions$Companion.d.ts'
import type { JvmMemberSignature } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/JvmMemberSignature.d.ts'
import type { ProtoBuf$Class } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Class.d.ts'
import type { ProtoBuf$Class$Builder } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Class$Builder.d.ts'
import type { ProtoBuf$Constructor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Constructor.d.ts'
import type { ProtoBuf$Constructor$Builder } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Constructor$Builder.d.ts'
import type { ProtoBuf$EnumEntry } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$EnumEntry.d.ts'
import type { ProtoBuf$EnumEntry$Builder } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$EnumEntry$Builder.d.ts'
import type { ProtoBuf$Function } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Function.d.ts'
import type { ProtoBuf$Function$Builder } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Function$Builder.d.ts'
import type { ProtoBuf$Package } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Package.d.ts'
import type { ProtoBuf$Package$Builder } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Package$Builder.d.ts'
import type { ProtoBuf$PackageFragment } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$PackageFragment.d.ts'
import type { ProtoBuf$PackageFragment$Builder } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$PackageFragment$Builder.d.ts'
import type { ProtoBuf$Property } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Property.d.ts'
import type { ProtoBuf$Property$Builder } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Property$Builder.d.ts'
import type { ProtoBuf$Type } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type.d.ts'
import type { ProtoBuf$Type$Builder } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type$Builder.d.ts'
import type { ProtoBuf$TypeAlias } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeAlias.d.ts'
import type { ProtoBuf$TypeAlias$Builder } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeAlias$Builder.d.ts'
import type { ProtoBuf$TypeParameter } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeParameter.d.ts'
import type { ProtoBuf$TypeParameter$Builder } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeParameter$Builder.d.ts'
import type { ProtoBuf$ValueParameter } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$ValueParameter.d.ts'
import type { ProtoBuf$ValueParameter$Builder } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$ValueParameter$Builder.d.ts'
import type { JvmProtoBuf$JvmMethodSignature } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/JvmProtoBuf$JvmMethodSignature.d.ts'
export class JvmMetadataExtensions extends Object implements MetadataExtensions {
    static Companion: MetadataExtensions$Companion;
    constructor()
    createClassExtension(): KmClassExtension;
    createConstructorExtension(): KmConstructorExtension;
    createEnumEntryExtension(): KmEnumEntryExtension;
    createFunctionExtension(): KmFunctionExtension;
    createModuleFragmentExtensions(): KmModuleFragmentExtension;
    createPackageExtension(): KmPackageExtension;
    createPropertyExtension(): KmPropertyExtension;
    createTypeAliasExtension(): KmTypeAliasExtension;
    createTypeExtension(): KmTypeExtension;
    createTypeParameterExtension(): KmTypeParameterExtension;
    createValueParameterExtension(): KmValueParameterExtension;
    readClassExtensions(arg0: KmClass, arg1: ProtoBuf$Class, arg2: ReadContext): void;
    readConstructorExtensions(arg0: KmConstructor, arg1: ProtoBuf$Constructor, arg2: ReadContext): void;
    readEnumEntryExtensions(arg0: KmEnumEntry, arg1: ProtoBuf$EnumEntry, arg2: ReadContext): void;
    readFunctionExtensions(arg0: KmFunction, arg1: ProtoBuf$Function, arg2: ReadContext): void;
    readModuleFragmentExtensions(arg0: KmModuleFragment, arg1: ProtoBuf$PackageFragment, arg2: ReadContext): void;
    readPackageExtensions(arg0: KmPackage, arg1: ProtoBuf$Package, arg2: ReadContext): void;
    readPropertyExtensions(arg0: KmProperty, arg1: ProtoBuf$Property, arg2: ReadContext): void;
    readTypeAliasExtensions(arg0: KmTypeAlias, arg1: ProtoBuf$TypeAlias, arg2: ReadContext): void;
    readTypeExtensions(arg0: KmType, arg1: ProtoBuf$Type, arg2: ReadContext): void;
    readTypeParameterExtensions(arg0: KmTypeParameter, arg1: ProtoBuf$TypeParameter, arg2: ReadContext): void;
    readValueParameterExtensions(arg0: KmValueParameter, arg1: ProtoBuf$ValueParameter, arg2: ReadContext): void;
    // private toJvmMethodSignature(arg0: JvmMemberSignature, arg1: WriteContext): JvmProtoBuf$JvmMethodSignature;
    writeClassExtensions(arg0: KmClass, arg1: ProtoBuf$Class$Builder, arg2: WriteContext): void;
    writeConstructorExtensions(arg0: KmConstructor, arg1: ProtoBuf$Constructor$Builder, arg2: WriteContext): void;
    writeEnumEntryExtensions(arg0: KmEnumEntry, arg1: ProtoBuf$EnumEntry$Builder, arg2: WriteContext): void;
    writeFunctionExtensions(arg0: KmFunction, arg1: ProtoBuf$Function$Builder, arg2: WriteContext): void;
    writeModuleFragmentExtensions(arg0: KmModuleFragment, arg1: ProtoBuf$PackageFragment$Builder, arg2: WriteContext): void;
    writePackageExtensions(arg0: KmPackage, arg1: ProtoBuf$Package$Builder, arg2: WriteContext): void;
    writePropertyExtensions(arg0: KmProperty, arg1: ProtoBuf$Property$Builder, arg2: WriteContext): void;
    writeTypeAliasExtensions(arg0: KmTypeAlias, arg1: ProtoBuf$TypeAlias$Builder, arg2: WriteContext): void;
    writeTypeExtensions(arg0: KmType, arg1: ProtoBuf$Type$Builder, arg2: WriteContext): void;
    writeTypeParameterExtensions(arg0: KmTypeParameter, arg1: ProtoBuf$TypeParameter$Builder, arg2: WriteContext): void;
    writeValueParameterExtensions(arg0: KmValueParameter, arg1: ProtoBuf$ValueParameter$Builder, arg2: WriteContext): void;
}