import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
export class AutoDivisionStrategy extends Enum<AutoDivisionStrategy> {
    static DISABLED: AutoDivisionStrategy;
    static ENABLED: AutoDivisionStrategy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): AutoDivisionStrategy;
    static values(): AutoDivisionStrategy[];
    constructor(arg2: AutoDivisionStrategy)
    toString(): string;
    name(): "DISABLED" | "ENABLED";
}