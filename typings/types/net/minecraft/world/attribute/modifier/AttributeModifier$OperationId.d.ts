import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
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
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): AttributeModifier$OperationId;
    static values(): AttributeModifier$OperationId[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    name(): "OVERRIDE" | "ALPHA_BLEND" | "ADD" | "SUBTRACT" | "MULTIPLY" | "BLEND_TO_GRAY" | "MINIMUM" | "MAXIMUM" | "AND" | "NAND" | "OR" | "NOR" | "XOR" | "XNOR";
}