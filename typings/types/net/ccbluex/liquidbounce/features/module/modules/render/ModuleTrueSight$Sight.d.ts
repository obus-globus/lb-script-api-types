import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleTrueSight$Sight extends Enum<ModuleTrueSight$Sight> implements Tagged {
    static BARRIERS: ModuleTrueSight$Sight;
    static Companion: Tagged$Companion;
    static ENTITIES: ModuleTrueSight$Sight;
    static getEntries(): ModuleTrueSight$Sight[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleTrueSight$Sight;
    static values(): ModuleTrueSight$Sight[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "BARRIERS" | "ENTITIES";
}