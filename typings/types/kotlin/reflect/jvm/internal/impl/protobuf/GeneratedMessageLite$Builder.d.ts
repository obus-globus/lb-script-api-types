import type { AbstractMessageLite$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/AbstractMessageLite$Builder.d.ts'
import type { GeneratedMessageLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite.d.ts'
export abstract class GeneratedMessageLite$Builder<MessageType extends GeneratedMessageLite, BuilderType extends GeneratedMessageLite$Builder<GeneratedMessageLite, GeneratedMessageLite$Builder<any, any>>> extends AbstractMessageLite$Builder<BuilderType> {
    constructor()
    readonly unknownFields: number[];
    clone(): BuilderType;
    getDefaultInstanceForType(): MessageType;
    getUnknownFields(): number[];
    mergeFrom(arg0: MessageType): BuilderType;
    setUnknownFields(arg0: number[]): BuilderType;
}