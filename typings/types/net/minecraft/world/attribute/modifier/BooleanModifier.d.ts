import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { EnvironmentAttribute } from '../../../../../net/minecraft/world/attribute/EnvironmentAttribute.d.ts'
import type { LerpFunction } from '../../../../../net/minecraft/world/attribute/LerpFunction.d.ts'
import type { AttributeModifier } from '../../../../../net/minecraft/world/attribute/modifier/AttributeModifier.d.ts'
import type { AttributeModifier$OperationId } from '../../../../../net/minecraft/world/attribute/modifier/AttributeModifier$OperationId.d.ts'
export class BooleanModifier extends Enum<BooleanModifier> implements AttributeModifier<boolean, boolean> {
    static AND: BooleanModifier;
    static ARGB_COLOR_LIBRARY: Map<AttributeModifier$OperationId, AttributeModifier<number, Object>>;
    static BOOLEAN_LIBRARY: Map<AttributeModifier$OperationId, AttributeModifier<boolean, Object>>;
    static FLOAT_LIBRARY: Map<AttributeModifier$OperationId, AttributeModifier<number, Object>>;
    static INTEGER_LIBRARY: Map<AttributeModifier$OperationId, AttributeModifier<number, Object>>;
    static NAND: BooleanModifier;
    static NOR: BooleanModifier;
    static OR: BooleanModifier;
    static RGB_COLOR_LIBRARY: Map<AttributeModifier$OperationId, AttributeModifier<number, Object>>;
    static XNOR: BooleanModifier;
    static XOR: BooleanModifier;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): BooleanModifier;
    static values(): BooleanModifier[];
    private constructor()
    apply(subject: boolean, argument: boolean): boolean;
    argumentCodec(type: EnvironmentAttribute<boolean>): Codec<boolean>;
    argumentKeyframeLerp(type: EnvironmentAttribute<boolean>): LerpFunction<boolean>;
    name(): "AND" | "NAND" | "OR" | "NOR" | "XOR" | "XNOR";
}