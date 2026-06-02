import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleProphuntESP$Tracking extends Enum<ModuleProphuntESP$Tracking> implements Tagged {
    static BLOCK_UPDATES: ModuleProphuntESP$Tracking;
    static CHUNK_DELTA_UPDATES: ModuleProphuntESP$Tracking;
    static Companion: Tagged$Companion;
    static FALLING_BLOCKS: ModuleProphuntESP$Tracking;
    static getEntries(): ModuleProphuntESP$Tracking[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleProphuntESP$Tracking;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "FALLING_BLOCKS" | "BLOCK_UPDATES" | "CHUNK_DELTA_UPDATES";
}