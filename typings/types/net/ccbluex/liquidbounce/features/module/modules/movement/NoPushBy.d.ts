import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class NoPushBy extends Enum<NoPushBy> implements Tagged {
    static BLOCKS: NoPushBy;
    static Companion: Tagged$Companion;
    static ENTITIES: NoPushBy;
    static FISHING_ROD: NoPushBy;
    static LIQUIDS: NoPushBy;
    static SINKING: NoPushBy;
    static getEntries(): NoPushBy[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): NoPushBy;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "ENTITIES" | "BLOCKS" | "FISHING_ROD" | "LIQUIDS" | "SINKING";
}