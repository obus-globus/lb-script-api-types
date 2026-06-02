import type { JvmProtoBuf$JvmFieldSignatureOrBuilder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/JvmProtoBuf$JvmFieldSignatureOrBuilder.d.ts'
import type { JvmProtoBuf$JvmFieldSignature } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/JvmProtoBuf$JvmFieldSignature.d.ts'
import type { CodedInputStream } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$Builder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$Builder.d.ts'
export class JvmProtoBuf$JvmFieldSignature$Builder extends GeneratedMessageLite$Builder<JvmProtoBuf$JvmFieldSignature, JvmProtoBuf$JvmFieldSignature$Builder> implements JvmProtoBuf$JvmFieldSignatureOrBuilder {
    private constructor()
    // private bitField0_: number;
    // private desc_: number;
    // private name_: number;
    build(): JvmProtoBuf$JvmFieldSignature;
    buildPartial(): JvmProtoBuf$JvmFieldSignature;
    clone(): JvmProtoBuf$JvmFieldSignature$Builder;
    getDefaultInstanceForType(): JvmProtoBuf$JvmFieldSignature;
    isInitialized(): boolean;
    // private maybeForceBuilderInitialization(): void;
    mergeFrom(arg0: JvmProtoBuf$JvmFieldSignature): JvmProtoBuf$JvmFieldSignature$Builder;
    mergeFrom(arg0: CodedInputStream, arg1: ExtensionRegistryLite): JvmProtoBuf$JvmFieldSignature$Builder;
    setDesc(arg0: number): JvmProtoBuf$JvmFieldSignature$Builder;
    setName(arg0: number): JvmProtoBuf$JvmFieldSignature$Builder;
}