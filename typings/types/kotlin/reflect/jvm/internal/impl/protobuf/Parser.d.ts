import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
export interface Parser<MessageType extends unknown> extends Object{
    parseDelimitedFrom(arg0: InputStream, arg1: ExtensionRegistryLite): MessageType;
    parseFrom(arg0: InputStream, arg1: ExtensionRegistryLite): MessageType;
    parseFrom(arg0: number[], arg1: ExtensionRegistryLite): MessageType;
    parsePartialFrom(arg0: CodedInputStream, arg1: ExtensionRegistryLite): MessageType;
}