import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleFastUse$UseConditions extends Enum<ModuleFastUse$UseConditions> implements Tagged {
    static Companion: Tagged$Companion;
    static NOT_DURING_MOVE: ModuleFastUse$UseConditions;
    static NOT_DURING_REGENERATION: ModuleFastUse$UseConditions;
    static NOT_IN_THE_AIR: ModuleFastUse$UseConditions;
    static getEntries(): ModuleFastUse$UseConditions[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleFastUse$UseConditions;
    static values(): (Object | null)[];
    private constructor(tag: string, meetsConditions: () => boolean)
    readonly meetsConditions: () => boolean;
    readonly tag: string;
    name(): "NOT_IN_THE_AIR" | "NOT_DURING_MOVE" | "NOT_DURING_REGENERATION";
}