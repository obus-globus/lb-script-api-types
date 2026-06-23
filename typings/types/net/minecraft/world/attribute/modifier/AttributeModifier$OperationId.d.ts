import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class AttributeModifier$OperationId extends Enum<AttributeModifier$OperationId> implements StringRepresentable {
    static ADD: AttributeModifier$OperationId;
    static ALPHA_BLEND: AttributeModifier$OperationId;
    static AND: AttributeModifier$OperationId;
    static BLEND_TO_GRAY: AttributeModifier$OperationId;
    static CODEC: Codec<AttributeModifier$OperationId>;
    static MAXIMUM: AttributeModifier$OperationId;
    static MINIMUM: AttributeModifier$OperationId;
    static MULTIPLY: AttributeModifier$OperationId;
    static NAND: AttributeModifier$OperationId;
    static NOR: AttributeModifier$OperationId;
    static OR: AttributeModifier$OperationId;
    static OVERRIDE: AttributeModifier$OperationId;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static SUBTRACT: AttributeModifier$OperationId;
    static XNOR: AttributeModifier$OperationId;
    static XOR: AttributeModifier$OperationId;
    static createNameLookup(paramvalueArray: Object | null): (param0: string) => StringRepresentable | null;
    static createNameLookup(paramvalueArray: Object | null, paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => Object | null): StringRepresentable$EnumCodec<any>;
    static fromEnumWithMapping(paramvalues: () => Object | null, paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<any>;
    static fromValues(paramvalues: () => Object | null): Codec<StringRepresentable>;
    static keys(paramvalues: (Object | null)[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): AttributeModifier$OperationId;
    static values(): (Object | null)[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    name(): "OVERRIDE" | "ALPHA_BLEND" | "ADD" | "SUBTRACT" | "MULTIPLY" | "BLEND_TO_GRAY" | "MINIMUM" | "MAXIMUM" | "AND" | "NAND" | "OR" | "NOR" | "XOR" | "XNOR";
}