import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleSprint$Ignore extends Enum<ModuleSprint$Ignore> implements Tagged {
    static BLINDNESS: ModuleSprint$Ignore;
    static COLLISION: ModuleSprint$Ignore;
    static Companion: Tagged$Companion;
    static HUNGER: ModuleSprint$Ignore;
    static getEntries(): ModuleSprint$Ignore[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleSprint$Ignore;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "BLINDNESS" | "HUNGER" | "COLLISION";
}