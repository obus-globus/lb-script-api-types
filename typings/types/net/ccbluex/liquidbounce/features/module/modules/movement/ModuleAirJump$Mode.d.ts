import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleAirJump$Mode extends Enum<ModuleAirJump$Mode> implements Tagged {
    static Companion: Tagged$Companion;
    static DOUBLE_JUMP: ModuleAirJump$Mode;
    static GHOST_BLOCK: ModuleAirJump$Mode;
    static JUMP_FREELY: ModuleAirJump$Mode;
    static getEntries(): ModuleAirJump$Mode[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleAirJump$Mode;
    static values(): ModuleAirJump$Mode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "JUMP_FREELY" | "DOUBLE_JUMP" | "GHOST_BLOCK";
}