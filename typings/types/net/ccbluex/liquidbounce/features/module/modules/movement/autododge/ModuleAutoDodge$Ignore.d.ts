import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleAutoDodge$Ignore extends Enum<ModuleAutoDodge$Ignore> implements Tagged {
    static Companion: Tagged$Companion;
    static OPEN_INVENTORY: ModuleAutoDodge$Ignore;
    static USING_ITEM: ModuleAutoDodge$Ignore;
    static USING_SCAFFOLD: ModuleAutoDodge$Ignore;
    static getEntries(): ModuleAutoDodge$Ignore[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleAutoDodge$Ignore;
    static values(): ModuleAutoDodge$Ignore[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "OPEN_INVENTORY" | "USING_ITEM" | "USING_SCAFFOLD";
}