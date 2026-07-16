import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
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
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleInventoryMove$Behaviour;
    static values(): ModuleInventoryMove$Behaviour[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "NORMAL" | "SAFE" | "UNDETECTABLE" | "STOP_ON_ACTION";
}