import type { Class } from '../../../../../../../java/lang/Class.d.ts'
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
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): NoPushBy;
    static values(): NoPushBy[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "ENTITIES" | "BLOCKS" | "FISHING_ROD" | "LIQUIDS" | "SINKING";
}