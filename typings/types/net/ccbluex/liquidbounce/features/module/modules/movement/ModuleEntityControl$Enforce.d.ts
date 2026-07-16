import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleEntityControl$Enforce extends Enum<ModuleEntityControl$Enforce> implements Tagged {
    static Companion: Tagged$Companion;
    static JUMP_STRENGTH: ModuleEntityControl$Enforce;
    static SADDLED: ModuleEntityControl$Enforce;
    static getEntries(): ModuleEntityControl$Enforce[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleEntityControl$Enforce;
    static values(): ModuleEntityControl$Enforce[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "SADDLED" | "JUMP_STRENGTH";
}