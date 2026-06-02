import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MessageLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite.d.ts'
import type { UninitializedMessageException } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/UninitializedMessageException.d.ts'
export abstract class AbstractMessageLite extends Object implements MessageLite {
    constructor()
    // private memoizedHashCode: number;
    newUninitializedMessageException(): UninitializedMessageException;
    toByteArray(): number[];
    writeDelimitedTo(arg0: OutputStream): void;
}