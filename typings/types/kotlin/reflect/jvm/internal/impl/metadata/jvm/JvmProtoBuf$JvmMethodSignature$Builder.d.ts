import type { JvmProtoBuf$JvmMethodSignatureOrBuilder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/JvmProtoBuf$JvmMethodSignatureOrBuilder.d.ts'
import type { JvmProtoBuf$JvmMethodSignature } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/JvmProtoBuf$JvmMethodSignature.d.ts'
import type { CodedInputStream } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$Builder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$Builder.d.ts'
export class JvmProtoBuf$JvmMethodSignature$Builder extends GeneratedMessageLite$Builder<JvmProtoBuf$JvmMethodSignature, JvmProtoBuf$JvmMethodSignature$Builder> implements JvmProtoBuf$JvmMethodSignatureOrBuilder {
    private constructor()
    // private bitField0_: number;
    // private desc_: number;
    // private name_: number;
    build(): JvmProtoBuf$JvmMethodSignature;
    buildPartial(): JvmProtoBuf$JvmMethodSignature;
    clone(): JvmProtoBuf$JvmMethodSignature$Builder;
    getDefaultInstanceForType(): JvmProtoBuf$JvmMethodSignature;
    isInitialized(): boolean;
    // private maybeForceBuilderInitialization(): void;
    mergeFrom(arg0: JvmProtoBuf$JvmMethodSignature): JvmProtoBuf$JvmMethodSignature$Builder;
    mergeFrom(arg0: CodedInputStream, arg1: ExtensionRegistryLite): JvmProtoBuf$JvmMethodSignature$Builder;
    setDesc(arg0: number): JvmProtoBuf$JvmMethodSignature$Builder;
    setName(arg0: number): JvmProtoBuf$JvmMethodSignature$Builder;
}