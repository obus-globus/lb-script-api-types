import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
export class AutoDivisionStrategy extends Enum<AutoDivisionStrategy> {
    static DISABLED: AutoDivisionStrategy;
    static ENABLED: AutoDivisionStrategy;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AutoDivisionStrategy;
    static values(): (Object | null)[];
    constructor(arg2: AutoDivisionStrategy)
    toString(): string;
    name(): "DISABLED" | "ENABLED";
}