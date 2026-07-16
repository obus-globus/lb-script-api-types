import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class EAS_ColorAttributeOperation extends Enum<EAS_ColorAttributeOperation> {
    static ADD: EAS_ColorAttributeOperation;
    static ALPHA_BLEND: EAS_ColorAttributeOperation;
    static MULTIPLY: EAS_ColorAttributeOperation;
    static OVERRIDE: EAS_ColorAttributeOperation;
    static SUBTRACT: EAS_ColorAttributeOperation;
    static getByName(paramarg0: string): EAS_ColorAttributeOperation;
    static getByName(paramarg0: string, paramarg1: EAS_ColorAttributeOperation): EAS_ColorAttributeOperation;
    static getByValue(paramarg0: number): EAS_ColorAttributeOperation;
    static getByValue(paramarg0: number, paramarg1: EAS_ColorAttributeOperation): EAS_ColorAttributeOperation;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): EAS_ColorAttributeOperation;
    static values(): EAS_ColorAttributeOperation[];
    private constructor(arg2: number)
    private constructor(arg2: EAS_ColorAttributeOperation)
    readonly value: number;
    getValue(): number;
    name(): "OVERRIDE" | "ALPHA_BLEND" | "ADD" | "SUBTRACT" | "MULTIPLY";
}