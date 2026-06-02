import type { RuntimeException } from '../../../../../../java/lang/RuntimeException.d.ts'
import type { InvalidProtocolBufferException } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/InvalidProtocolBufferException.d.ts'
import type { MessageLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite.d.ts'
export class UninitializedMessageException extends RuntimeException {
    constructor(arg0: MessageLite)
    // private missingFields: string[];
    asInvalidProtocolBufferException(): InvalidProtocolBufferException;
}