import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ProtoBuf$Class } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Class.d.ts'
import type { ProtoBuf$Expression } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Expression.d.ts'
import type { ProtoBuf$Function } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Function.d.ts'
import type { ProtoBuf$Property } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Property.d.ts'
import type { ProtoBuf$Type } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type.d.ts'
import type { ProtoBuf$Type$Argument } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type$Argument.d.ts'
import type { ProtoBuf$TypeAlias } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeAlias.d.ts'
import type { ProtoBuf$TypeParameter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeParameter.d.ts'
import type { ProtoBuf$ValueParameter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$ValueParameter.d.ts'
import type { TypeTable } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/TypeTable.d.ts'
export class ProtoTypeTableUtilKt extends Object {
    static abbreviatedType(paramarg0: ProtoBuf$Type, paramarg1: TypeTable): ProtoBuf$Type;
    static contextReceiverTypes(paramarg0: ProtoBuf$Class, paramarg1: TypeTable): ProtoBuf$Type[];
    static contextReceiverTypes(paramarg0: ProtoBuf$Function, paramarg1: TypeTable): ProtoBuf$Type[];
    static contextReceiverTypes(paramarg0: ProtoBuf$Property, paramarg1: TypeTable): ProtoBuf$Type[];
    static expandedType(paramarg0: ProtoBuf$TypeAlias, paramarg1: TypeTable): ProtoBuf$Type;
    static flexibleUpperBound(paramarg0: ProtoBuf$Type, paramarg1: TypeTable): ProtoBuf$Type;
    static hasReceiver(paramarg0: ProtoBuf$Function): boolean;
    static hasReceiver(paramarg0: ProtoBuf$Property): boolean;
    static inlineClassUnderlyingType(paramarg0: ProtoBuf$Class, paramarg1: TypeTable): ProtoBuf$Type;
    static isInstanceType(paramarg0: ProtoBuf$Expression, paramarg1: TypeTable): ProtoBuf$Type;
    static outerType(paramarg0: ProtoBuf$Type, paramarg1: TypeTable): ProtoBuf$Type;
    static receiverType(paramarg0: ProtoBuf$Function, paramarg1: TypeTable): ProtoBuf$Type;
    static receiverType(paramarg0: ProtoBuf$Property, paramarg1: TypeTable): ProtoBuf$Type;
    static returnType(paramarg0: ProtoBuf$Function, paramarg1: TypeTable): ProtoBuf$Type;
    static returnType(paramarg0: ProtoBuf$Property, paramarg1: TypeTable): ProtoBuf$Type;
    static supertypes(paramarg0: ProtoBuf$Class, paramarg1: TypeTable): ProtoBuf$Type[];
    static type(paramarg0: ProtoBuf$Type$Argument, paramarg1: TypeTable): ProtoBuf$Type;
    static type(paramarg0: ProtoBuf$ValueParameter, paramarg1: TypeTable): ProtoBuf$Type;
    static underlyingType(paramarg0: ProtoBuf$TypeAlias, paramarg1: TypeTable): ProtoBuf$Type;
    static upperBounds(paramarg0: ProtoBuf$TypeParameter, paramarg1: TypeTable): ProtoBuf$Type[];
    static varargElementType(paramarg0: ProtoBuf$ValueParameter, paramarg1: TypeTable): ProtoBuf$Type;
}