import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleCriticals$WhenSprinting$StopSprintingMode extends Enum<ModuleCriticals$WhenSprinting$StopSprintingMode> implements Tagged {
    static Companion: Tagged$Companion;
    static LEGIT: ModuleCriticals$WhenSprinting$StopSprintingMode;
    static NONE: ModuleCriticals$WhenSprinting$StopSprintingMode;
    static ON_ATTACK: ModuleCriticals$WhenSprinting$StopSprintingMode;
    static ON_NETWORK: ModuleCriticals$WhenSprinting$StopSprintingMode;
    static getEntries(): ModuleCriticals$WhenSprinting$StopSprintingMode[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleCriticals$WhenSprinting$StopSprintingMode;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "NONE" | "LEGIT" | "ON_NETWORK" | "ON_ATTACK";
}