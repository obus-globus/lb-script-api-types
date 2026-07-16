import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class EAS_BoolAttributeOperation extends Enum<EAS_BoolAttributeOperation> {
    static ALPHA_BLEND: EAS_BoolAttributeOperation;
    static AND: EAS_BoolAttributeOperation;
    static NAND: EAS_BoolAttributeOperation;
    static NOR: EAS_BoolAttributeOperation;
    static OR: EAS_BoolAttributeOperation;
    static OVERRIDE: EAS_BoolAttributeOperation;
    static XNOR: EAS_BoolAttributeOperation;
    static XOR: EAS_BoolAttributeOperation;
    static getByName(paramarg0: string): EAS_BoolAttributeOperation;
    static getByName(paramarg0: string, paramarg1: EAS_BoolAttributeOperation): EAS_BoolAttributeOperation;
    static getByValue(paramarg0: number): EAS_BoolAttributeOperation;
    static getByValue(paramarg0: number, paramarg1: EAS_BoolAttributeOperation): EAS_BoolAttributeOperation;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): EAS_BoolAttributeOperation;
    static values(): EAS_BoolAttributeOperation[];
    private constructor(arg2: number)
    private constructor(arg2: EAS_BoolAttributeOperation)
    readonly value: number;
    getValue(): number;
    name(): "OVERRIDE" | "ALPHA_BLEND" | "AND" | "NAND" | "OR" | "NOR" | "XOR" | "XNOR";
}