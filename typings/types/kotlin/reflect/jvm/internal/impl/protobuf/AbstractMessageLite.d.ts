import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CodedOutputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedOutputStream.d.ts'
import type { MessageLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite.d.ts'
import type { MessageLite$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite$Builder.d.ts'
import type { UninitializedMessageException } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/UninitializedMessageException.d.ts'
export abstract class AbstractMessageLite extends Object implements MessageLite {
    constructor()
    // private memoizedHashCode: number;
    getDefaultInstanceForType(): MessageLite;
    getSerializedSize(): number;
    isInitialized(): boolean;
    newBuilderForType(): MessageLite$Builder;
    newUninitializedMessageException(): UninitializedMessageException;
    toBuilder(): MessageLite$Builder;
    toByteArray(): number[];
    writeDelimitedTo(arg0: OutputStream): void;
    writeTo(arg0: CodedOutputStream): void;
}