import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FieldSet$FieldDescriptorLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/FieldSet$FieldDescriptorLite.d.ts'
import type { Internal$EnumLiteMap } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Internal$EnumLiteMap.d.ts'
import type { MessageLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite.d.ts'
import type { MessageLite$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite$Builder.d.ts'
import type { WireFormat$FieldType } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/WireFormat$FieldType.d.ts'
import type { WireFormat$JavaType } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/WireFormat$JavaType.d.ts'
export class GeneratedMessageLite$ExtensionDescriptor extends Object implements FieldSet$FieldDescriptorLite<GeneratedMessageLite$ExtensionDescriptor> {
    constructor(arg0: Internal$EnumLiteMap<Object>, arg1: number, arg2: WireFormat$FieldType, arg3: boolean, arg4: boolean)
    // private enumTypeMap: Internal$EnumLiteMap<Object>;
    // private isPacked: boolean;
    // private isRepeated: boolean;
    readonly number: number;
    // private type: WireFormat$FieldType;
    compareTo(arg0: GeneratedMessageLite$ExtensionDescriptor): number;
    getEnumType(): Internal$EnumLiteMap<Object>;
    getLiteJavaType(): WireFormat$JavaType;
    getLiteType(): WireFormat$FieldType;
    getNumber(): number;
    internalMergeFrom(arg0: MessageLite$Builder, arg1: MessageLite): MessageLite$Builder;
    isPacked(): boolean;
    isRepeated(): boolean;
}