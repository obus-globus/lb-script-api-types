import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { SourceFile } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceFile.d.ts'
import type { KotlinJvmBinaryClass } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass.d.ts'
import type { ProtoBuf$Package } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Package.d.ts'
import type { MetadataVersion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/MetadataVersion.d.ts'
import type { NameResolver } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/NameResolver.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { JvmClassName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/jvm/JvmClassName.d.ts'
import type { IncompatibleVersionErrorData } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/IncompatibleVersionErrorData.d.ts'
import type { DeserializedContainerAbiStability } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/DeserializedContainerAbiStability.d.ts'
import type { DeserializedContainerSource } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/DeserializedContainerSource.d.ts'
import type { PreReleaseInfo } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/PreReleaseInfo.d.ts'
export class JvmPackagePartSource extends Object implements DeserializedContainerSource {
    static NO_SOURCE: SourceElement;
    constructor(arg0: KotlinJvmBinaryClass, arg1: ProtoBuf$Package, arg2: NameResolver, arg3: IncompatibleVersionErrorData<MetadataVersion>, arg4: boolean, arg5: DeserializedContainerAbiStability)
    constructor(arg0: JvmClassName, arg1: JvmClassName, arg2: JvmClassName, arg3: ProtoBuf$Package, arg4: NameResolver, arg5: IncompatibleVersionErrorData<MetadataVersion>, arg6: PreReleaseInfo, arg7: DeserializedContainerAbiStability, arg8: KotlinJvmBinaryClass)
    // private abiStability: DeserializedContainerAbiStability;
    readonly className: JvmClassName;
    readonly facadeClassName: JvmClassName;
    // private incompatibility: IncompatibleVersionErrorData<MetadataVersion>;
    // private jvmClassName: JvmClassName;
    readonly knownJvmBinaryClass: KotlinJvmBinaryClass;
    // private moduleName: string;
    // private preReleaseInfo: PreReleaseInfo;
    getClassId(): ClassId;
    getClassName(): JvmClassName;
    getContainingFile(): SourceFile;
    getFacadeClassName(): JvmClassName;
    getKnownJvmBinaryClass(): KotlinJvmBinaryClass;
    getPresentableString(): string;
    getSimpleName(): Name;
    toString(): string;
}