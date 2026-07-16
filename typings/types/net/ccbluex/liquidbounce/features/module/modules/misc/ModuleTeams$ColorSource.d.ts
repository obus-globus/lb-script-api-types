import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
export class ModuleTeams$ColorSource extends Enum<ModuleTeams$ColorSource> implements Tagged {
    static ARMOR: ModuleTeams$ColorSource;
    static Companion: Tagged$Companion;
    static TEAM: ModuleTeams$ColorSource;
    static getEntries(): ModuleTeams$ColorSource[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleTeams$ColorSource;
    static values(): ModuleTeams$ColorSource[];
    private constructor(tag: string, entityToColor: (param0: Entity) => number | null)
    readonly entityToColor: (param0: Entity) => number | null;
    readonly tag: string;
    name(): "TEAM" | "ARMOR";
}