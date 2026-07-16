import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleTrajectories$Show extends Enum<ModuleTrajectories$Show> implements Tagged {
    static ACTIVE_TRAJECTORY_ARROW: ModuleTrajectories$Show;
    static ACTIVE_TRAJECTORY_OTHER: ModuleTrajectories$Show;
    static ALWAYS_SHOW_BOW: ModuleTrajectories$Show;
    static Companion: Tagged$Companion;
    static OTHER_PLAYERS: ModuleTrajectories$Show;
    static getEntries(): ModuleTrajectories$Show[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleTrajectories$Show;
    static values(): ModuleTrajectories$Show[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "ALWAYS_SHOW_BOW" | "OTHER_PLAYERS" | "ACTIVE_TRAJECTORY_ARROW" | "ACTIVE_TRAJECTORY_OTHER";
}