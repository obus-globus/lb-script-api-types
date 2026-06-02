import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CodedOutputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedOutputStream.d.ts'
import type { MessageLite$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite$Builder.d.ts'
import type { MessageLiteOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLiteOrBuilder.d.ts'
import type { Parser } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Parser.d.ts'
export interface MessageLite extends Object, MessageLiteOrBuilder{
    getParserForType(): Parser<MessageLite>;
    getSerializedSize(): number;
    newBuilderForType(): MessageLite$Builder;
    toBuilder(): MessageLite$Builder;
    toByteArray(): number[];
    writeTo(arg0: CodedOutputStream): void;
}