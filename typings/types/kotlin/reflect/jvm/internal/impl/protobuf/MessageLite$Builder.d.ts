import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../java/lang/Cloneable.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { MessageLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite.d.ts'
import type { MessageLiteOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLiteOrBuilder.d.ts'
export interface MessageLite$Builder extends Object, Cloneable, MessageLiteOrBuilder{
    build(): MessageLite;
    protected clone(): Object;
    getDefaultInstanceForType(): MessageLite;
    isInitialized(): boolean;
    mergeFrom(arg0: CodedInputStream, arg1: ExtensionRegistryLite): MessageLite$Builder;
}