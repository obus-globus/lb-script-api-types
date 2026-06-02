import type { IOException } from '../../../../../../java/io/IOException.d.ts'
import type { MessageLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite.d.ts'
export class InvalidProtocolBufferException extends IOException {
    constructor(arg0: string)
    readonly unfinishedMessage: MessageLite;
    getUnfinishedMessage(): MessageLite;
    setUnfinishedMessage(arg0: MessageLite): InvalidProtocolBufferException;
}