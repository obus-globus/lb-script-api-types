import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleReplenish$InsideOf extends Enum<ModuleReplenish$InsideOf> implements Tagged {
    static CHESTS: ModuleReplenish$InsideOf;
    static Companion: Tagged$Companion;
    static INVENTORIES: ModuleReplenish$InsideOf;
    static getEntries(): ModuleReplenish$InsideOf[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleReplenish$InsideOf;
    static values(): ModuleReplenish$InsideOf[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "CHESTS" | "INVENTORIES";
}