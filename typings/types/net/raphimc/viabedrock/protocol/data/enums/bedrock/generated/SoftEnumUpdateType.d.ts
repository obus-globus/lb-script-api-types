import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class SoftEnumUpdateType extends Enum<SoftEnumUpdateType> {
    static Add: SoftEnumUpdateType;
    static Remove: SoftEnumUpdateType;
    static Replace: SoftEnumUpdateType;
    static getByName(paramarg0: string): SoftEnumUpdateType;
    static getByName(paramarg0: string, paramarg1: SoftEnumUpdateType): SoftEnumUpdateType;
    static getByValue(paramarg0: number): SoftEnumUpdateType;
    static getByValue(paramarg0: number, paramarg1: SoftEnumUpdateType): SoftEnumUpdateType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SoftEnumUpdateType;
    static values(): SoftEnumUpdateType[];
    private constructor(arg2: number)
    private constructor(arg2: SoftEnumUpdateType)
    readonly value: number;
    getValue(): number;
    name(): "Add" | "Remove" | "Replace";
}