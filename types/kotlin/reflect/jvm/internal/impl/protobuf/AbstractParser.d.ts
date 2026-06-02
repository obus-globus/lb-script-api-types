import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { MessageLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite.d.ts'
import type { Parser } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Parser.d.ts'
import type { UninitializedMessageException } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/UninitializedMessageException.d.ts'
export abstract class AbstractParser<MessageType extends MessageLite> extends Object implements Parser<MessageType> {
    constructor()
    // private checkMessageInitialized(arg0: MessageType): MessageType;
    // private newUninitializedMessageException(arg0: MessageType): UninitializedMessageException;
    parseDelimitedFrom(arg0: InputStream, arg1: ExtensionRegistryLite): MessageType;
    parseFrom(arg0: InputStream, arg1: ExtensionRegistryLite): MessageType;
    parseFrom(arg0: number[], arg1: ExtensionRegistryLite): MessageType;
    parsePartialDelimitedFrom(arg0: InputStream, arg1: ExtensionRegistryLite): MessageType;
    parsePartialFrom(arg0: InputStream, arg1: ExtensionRegistryLite): MessageType;
    parsePartialFrom(arg0: number[], arg1: ExtensionRegistryLite): MessageType;
}