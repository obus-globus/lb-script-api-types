import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleSprint$StopOn extends Enum<ModuleSprint$StopOn> implements Tagged {
    static AIR: ModuleSprint$StopOn;
    static Companion: Tagged$Companion;
    static GROUND: ModuleSprint$StopOn;
    static SNEAKING: ModuleSprint$StopOn;
    static USING_ITEM: ModuleSprint$StopOn;
    static getEntries(): ModuleSprint$StopOn[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleSprint$StopOn;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "GROUND" | "AIR" | "SNEAKING" | "USING_ITEM";
}