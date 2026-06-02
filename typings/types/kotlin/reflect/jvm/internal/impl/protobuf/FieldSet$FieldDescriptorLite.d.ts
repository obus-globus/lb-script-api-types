import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
import type { MessageLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite.d.ts'
import type { MessageLite$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite$Builder.d.ts'
import type { WireFormat$FieldType } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/WireFormat$FieldType.d.ts'
import type { WireFormat$JavaType } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/WireFormat$JavaType.d.ts'
export interface FieldSet$FieldDescriptorLite<T extends FieldSet$FieldDescriptorLite<T>> extends Object, Comparable<T>{
    getLiteJavaType(): WireFormat$JavaType;
    getLiteType(): WireFormat$FieldType;
    getNumber(): number;
    internalMergeFrom(arg0: MessageLite$Builder, arg1: MessageLite): MessageLite$Builder;
    isPacked(): boolean;
    isRepeated(): boolean;
}