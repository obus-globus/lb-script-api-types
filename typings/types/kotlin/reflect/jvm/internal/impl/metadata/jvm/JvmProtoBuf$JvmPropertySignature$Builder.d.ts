import type { JvmProtoBuf$JvmPropertySignatureOrBuilder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/JvmProtoBuf$JvmPropertySignatureOrBuilder.d.ts'
import type { JvmProtoBuf$JvmFieldSignature } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/JvmProtoBuf$JvmFieldSignature.d.ts'
import type { JvmProtoBuf$JvmMethodSignature } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/JvmProtoBuf$JvmMethodSignature.d.ts'
import type { JvmProtoBuf$JvmPropertySignature } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/JvmProtoBuf$JvmPropertySignature.d.ts'
import type { CodedInputStream } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$Builder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$Builder.d.ts'
export class JvmProtoBuf$JvmPropertySignature$Builder extends GeneratedMessageLite$Builder<JvmProtoBuf$JvmPropertySignature, JvmProtoBuf$JvmPropertySignature$Builder> implements JvmProtoBuf$JvmPropertySignatureOrBuilder {
    private constructor()
    // private bitField0_: number;
    // private delegateMethod_: JvmProtoBuf$JvmMethodSignature;
    // private field_: JvmProtoBuf$JvmFieldSignature;
    // private getter_: JvmProtoBuf$JvmMethodSignature;
    // private setter_: JvmProtoBuf$JvmMethodSignature;
    // private syntheticMethod_: JvmProtoBuf$JvmMethodSignature;
    build(): JvmProtoBuf$JvmPropertySignature;
    buildPartial(): JvmProtoBuf$JvmPropertySignature;
    clone(): JvmProtoBuf$JvmPropertySignature$Builder;
    getDefaultInstanceForType(): JvmProtoBuf$JvmPropertySignature;
    isInitialized(): boolean;
    // private maybeForceBuilderInitialization(): void;
    mergeDelegateMethod(arg0: JvmProtoBuf$JvmMethodSignature): JvmProtoBuf$JvmPropertySignature$Builder;
    mergeField(arg0: JvmProtoBuf$JvmFieldSignature): JvmProtoBuf$JvmPropertySignature$Builder;
    mergeFrom(arg0: JvmProtoBuf$JvmPropertySignature): JvmProtoBuf$JvmPropertySignature$Builder;
    mergeFrom(arg0: CodedInputStream, arg1: ExtensionRegistryLite): JvmProtoBuf$JvmPropertySignature$Builder;
    mergeGetter(arg0: JvmProtoBuf$JvmMethodSignature): JvmProtoBuf$JvmPropertySignature$Builder;
    mergeSetter(arg0: JvmProtoBuf$JvmMethodSignature): JvmProtoBuf$JvmPropertySignature$Builder;
    mergeSyntheticMethod(arg0: JvmProtoBuf$JvmMethodSignature): JvmProtoBuf$JvmPropertySignature$Builder;
    setDelegateMethod(arg0: JvmProtoBuf$JvmMethodSignature): JvmProtoBuf$JvmPropertySignature$Builder;
    setField(arg0: JvmProtoBuf$JvmFieldSignature): JvmProtoBuf$JvmPropertySignature$Builder;
    setGetter(arg0: JvmProtoBuf$JvmMethodSignature): JvmProtoBuf$JvmPropertySignature$Builder;
    setSetter(arg0: JvmProtoBuf$JvmMethodSignature): JvmProtoBuf$JvmPropertySignature$Builder;
    setSyntheticMethod(arg0: JvmProtoBuf$JvmMethodSignature): JvmProtoBuf$JvmPropertySignature$Builder;
}