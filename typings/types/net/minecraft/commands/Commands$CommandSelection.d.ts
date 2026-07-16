import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Commands$CommandSelection extends Enum<Commands$CommandSelection> {
    static ALL: Commands$CommandSelection;
    static DEDICATED: Commands$CommandSelection;
    static INTEGRATED: Commands$CommandSelection;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Commands$CommandSelection;
    static values(): Commands$CommandSelection[];
    private constructor(includeIntegrated: boolean, includeDedicated: boolean)
    includeDedicated: boolean;
    includeIntegrated: boolean;
    name(): "ALL" | "DEDICATED" | "INTEGRATED";
}