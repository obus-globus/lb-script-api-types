import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleFastUse$UseConditions extends Enum<ModuleFastUse$UseConditions> implements Tagged {
    static Companion: Tagged$Companion;
    static NOT_DURING_MOVE: ModuleFastUse$UseConditions;
    static NOT_DURING_REGENERATION: ModuleFastUse$UseConditions;
    static NOT_IN_THE_AIR: ModuleFastUse$UseConditions;
    static getEntries(): ModuleFastUse$UseConditions[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleFastUse$UseConditions;
    static values(): ModuleFastUse$UseConditions[];
    private constructor(tag: string, meetsConditions: () => boolean)
    readonly meetsConditions: () => boolean;
    readonly tag: string;
    name(): "NOT_IN_THE_AIR" | "NOT_DURING_MOVE" | "NOT_DURING_REGENERATION";
}