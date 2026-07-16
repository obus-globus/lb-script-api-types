import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class AttributeModifierOperation extends Enum<AttributeModifierOperation> {
    static OPERATION_ADDITION: AttributeModifierOperation;
    static OPERATION_CAP: AttributeModifierOperation;
    static OPERATION_INVALID: AttributeModifierOperation;
    static OPERATION_MULTIPLY_BASE: AttributeModifierOperation;
    static OPERATION_MULTIPLY_TOTAL: AttributeModifierOperation;
    static getByName(paramarg0: string): AttributeModifierOperation;
    static getByName(paramarg0: string, paramarg1: AttributeModifierOperation): AttributeModifierOperation;
    static getByValue(paramarg0: number): AttributeModifierOperation;
    static getByValue(paramarg0: number, paramarg1: AttributeModifierOperation): AttributeModifierOperation;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): AttributeModifierOperation;
    static values(): AttributeModifierOperation[];
    private constructor(arg2: number)
    private constructor(arg2: AttributeModifierOperation)
    readonly value: number;
    getValue(): number;
    name(): "OPERATION_ADDITION" | "OPERATION_MULTIPLY_BASE" | "OPERATION_MULTIPLY_TOTAL" | "OPERATION_CAP" | "OPERATION_INVALID";
}