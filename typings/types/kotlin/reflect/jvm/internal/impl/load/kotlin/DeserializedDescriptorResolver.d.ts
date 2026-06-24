import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { PackageFragmentDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageFragmentDescriptor.d.ts'
import type { DeserializationComponentsForJava } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/DeserializationComponentsForJava.d.ts'
import type { DeserializedDescriptorResolver$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/DeserializedDescriptorResolver$Companion.d.ts'
import type { KotlinJvmBinaryClass } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass.d.ts'
import type { KotlinClassHeader$Kind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/header/KotlinClassHeader$Kind.d.ts'
import type { MetadataVersion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/MetadataVersion.d.ts'
import type { MemberScope } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { ClassData } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ClassData.d.ts'
import type { DeserializationComponents } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/DeserializationComponents.d.ts'
import type { IncompatibleVersionErrorData } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/IncompatibleVersionErrorData.d.ts'
import type { DeserializedContainerAbiStability } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/DeserializedContainerAbiStability.d.ts'
export class DeserializedDescriptorResolver extends Object {
    static Companion: DeserializedDescriptorResolver$Companion;
    constructor()
    components: DeserializationComponents;
    createKotlinPackagePartScope(arg0: PackageFragmentDescriptor, arg1: KotlinJvmBinaryClass): MemberScope;
    // private getAbiStability(arg0: KotlinJvmBinaryClass): DeserializedContainerAbiStability;
    getComponents(): DeserializationComponents;
    // private getIncompatibility(arg0: KotlinJvmBinaryClass): IncompatibleVersionErrorData<MetadataVersion>;
    // private getOwnMetadataVersion(): MetadataVersion;
    // private getSkipMetadataVersionCheck(): boolean;
    // private isCompiledWith13M1(arg0: KotlinJvmBinaryClass): boolean;
    // private isPreReleaseInvisible(arg0: KotlinJvmBinaryClass): boolean;
    readClassData$org_jetbrains_kotlin_descriptors_jvm(arg0: KotlinJvmBinaryClass): ClassData;
    // private readData(arg0: KotlinJvmBinaryClass, arg1: KotlinClassHeader$Kind[]): string[];
    resolveClass(arg0: KotlinJvmBinaryClass): ClassDescriptor;
    setComponents(arg0: DeserializationComponentsForJava): void;
    setComponents(arg0: DeserializationComponents): void;
}