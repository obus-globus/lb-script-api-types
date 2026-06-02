import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { SourceFile } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceFile.d.ts'
import type { KotlinJvmBinaryClass } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass.d.ts'
import type { MetadataVersion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/MetadataVersion.d.ts'
import type { IncompatibleVersionErrorData } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/IncompatibleVersionErrorData.d.ts'
import type { DeserializedContainerAbiStability } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/DeserializedContainerAbiStability.d.ts'
import type { DeserializedContainerSource } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/DeserializedContainerSource.d.ts'
import type { PreReleaseInfo } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/PreReleaseInfo.d.ts'
export class KotlinJvmBinarySourceElement extends Object implements DeserializedContainerSource {
    static NO_SOURCE: SourceElement;
    constructor(arg0: KotlinJvmBinaryClass, arg1: IncompatibleVersionErrorData<MetadataVersion>, arg2: PreReleaseInfo, arg3: DeserializedContainerAbiStability)
    // private abiStability: DeserializedContainerAbiStability;
    readonly binaryClass: KotlinJvmBinaryClass;
    // private incompatibility: IncompatibleVersionErrorData<MetadataVersion>;
    // private preReleaseInfo: PreReleaseInfo;
    getBinaryClass(): KotlinJvmBinaryClass;
    getContainingFile(): SourceFile;
    getPresentableString(): string;
    toString(): string;
}