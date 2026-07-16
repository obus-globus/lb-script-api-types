import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class EAS_FloatAttributeOperation extends Enum<EAS_FloatAttributeOperation> {
    static ADD: EAS_FloatAttributeOperation;
    static ALPHA_BLEND: EAS_FloatAttributeOperation;
    static MAXIMUM: EAS_FloatAttributeOperation;
    static MINIMUM: EAS_FloatAttributeOperation;
    static MULTIPLY: EAS_FloatAttributeOperation;
    static OVERRIDE: EAS_FloatAttributeOperation;
    static SUBTRACT: EAS_FloatAttributeOperation;
    static getByName(paramarg0: string): EAS_FloatAttributeOperation;
    static getByName(paramarg0: string, paramarg1: EAS_FloatAttributeOperation): EAS_FloatAttributeOperation;
    static getByValue(paramarg0: number): EAS_FloatAttributeOperation;
    static getByValue(paramarg0: number, paramarg1: EAS_FloatAttributeOperation): EAS_FloatAttributeOperation;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): EAS_FloatAttributeOperation;
    static values(): EAS_FloatAttributeOperation[];
    private constructor(arg2: number)
    private constructor(arg2: EAS_FloatAttributeOperation)
    readonly value: number;
    getValue(): number;
    name(): "OVERRIDE" | "ALPHA_BLEND" | "ADD" | "SUBTRACT" | "MULTIPLY" | "MINIMUM" | "MAXIMUM";
}