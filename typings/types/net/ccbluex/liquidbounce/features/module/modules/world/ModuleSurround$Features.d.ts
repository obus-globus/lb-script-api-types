import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleSurround$Features extends Enum<ModuleSurround$Features> implements Tagged {
    static CENTER: ModuleSurround$Features;
    static Companion: Tagged$Companion;
    static DOWN: ModuleSurround$Features;
    static EXTEND: ModuleSurround$Features;
    static NO_WASTE: ModuleSurround$Features;
    static getEntries(): ModuleSurround$Features[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleSurround$Features;
    static values(): ModuleSurround$Features[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "CENTER" | "EXTEND" | "NO_WASTE" | "DOWN";
}