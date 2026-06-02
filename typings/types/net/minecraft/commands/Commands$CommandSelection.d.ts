import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Commands$CommandSelection extends Enum<Commands$CommandSelection> {
    static ALL: Commands$CommandSelection;
    static DEDICATED: Commands$CommandSelection;
    static INTEGRATED: Commands$CommandSelection;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Commands$CommandSelection;
    static values(): (Object | null)[];
    private constructor(includeIntegrated: boolean, includeDedicated: boolean)
    includeDedicated: boolean;
    includeIntegrated: boolean;
    name(): "ALL" | "DEDICATED" | "INTEGRATED";
}