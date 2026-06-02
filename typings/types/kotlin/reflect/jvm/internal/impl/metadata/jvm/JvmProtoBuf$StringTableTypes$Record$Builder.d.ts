import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { JvmProtoBuf$StringTableTypes$RecordOrBuilder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/JvmProtoBuf$StringTableTypes$RecordOrBuilder.d.ts'
import type { JvmProtoBuf$StringTableTypes$Record } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/JvmProtoBuf$StringTableTypes$Record.d.ts'
import type { JvmProtoBuf$StringTableTypes$Record$Operation } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/JvmProtoBuf$StringTableTypes$Record$Operation.d.ts'
import type { CodedInputStream } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$Builder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$Builder.d.ts'
export class JvmProtoBuf$StringTableTypes$Record$Builder extends GeneratedMessageLite$Builder<JvmProtoBuf$StringTableTypes$Record, JvmProtoBuf$StringTableTypes$Record$Builder> implements JvmProtoBuf$StringTableTypes$RecordOrBuilder {
    private constructor()
    // private bitField0_: number;
    // private operation_: JvmProtoBuf$StringTableTypes$Record$Operation;
    // private predefinedIndex_: number;
    // private range_: number;
    // private replaceChar_: number[];
    // private string_: Object;
    // private substringIndex_: number[];
    build(): JvmProtoBuf$StringTableTypes$Record;
    buildPartial(): JvmProtoBuf$StringTableTypes$Record;
    clone(): JvmProtoBuf$StringTableTypes$Record$Builder;
    // private ensureReplaceCharIsMutable(): void;
    // private ensureSubstringIndexIsMutable(): void;
    getDefaultInstanceForType(): JvmProtoBuf$StringTableTypes$Record;
    isInitialized(): boolean;
    // private maybeForceBuilderInitialization(): void;
    mergeFrom(arg0: JvmProtoBuf$StringTableTypes$Record): JvmProtoBuf$StringTableTypes$Record$Builder;
    mergeFrom(arg0: CodedInputStream, arg1: ExtensionRegistryLite): JvmProtoBuf$StringTableTypes$Record$Builder;
    setOperation(arg0: JvmProtoBuf$StringTableTypes$Record$Operation): JvmProtoBuf$StringTableTypes$Record$Builder;
    setPredefinedIndex(arg0: number): JvmProtoBuf$StringTableTypes$Record$Builder;
    setRange(arg0: number): JvmProtoBuf$StringTableTypes$Record$Builder;
}