import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class AttributeOperands extends Enum<AttributeOperands> {
    static OPERAND_CURRENT: AttributeOperands;
    static OPERAND_INVALID: AttributeOperands;
    static OPERAND_MAX: AttributeOperands;
    static OPERAND_MIN: AttributeOperands;
    static getByName(paramarg0: string): AttributeOperands;
    static getByName(paramarg0: string, paramarg1: AttributeOperands): AttributeOperands;
    static getByValue(paramarg0: number): AttributeOperands;
    static getByValue(paramarg0: number, paramarg1: AttributeOperands): AttributeOperands;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AttributeOperands;
    static values(): AttributeOperands[];
    private constructor(arg2: number)
    private constructor(arg2: AttributeOperands)
    readonly value: number;
    getValue(): number;
    name(): "OPERAND_MIN" | "OPERAND_MAX" | "OPERAND_CURRENT" | "OPERAND_INVALID";
}