import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleInventoryMove$Behaviour extends Enum<ModuleInventoryMove$Behaviour> implements Tagged {
    static Companion: Tagged$Companion;
    static NORMAL: ModuleInventoryMove$Behaviour;
    static SAFE: ModuleInventoryMove$Behaviour;
    static STOP_ON_ACTION: ModuleInventoryMove$Behaviour;
    static UNDETECTABLE: ModuleInventoryMove$Behaviour;
    static getEntries(): ModuleInventoryMove$Behaviour[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleInventoryMove$Behaviour;
    static values(): ModuleInventoryMove$Behaviour[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "NORMAL" | "SAFE" | "UNDETECTABLE" | "STOP_ON_ACTION";
}