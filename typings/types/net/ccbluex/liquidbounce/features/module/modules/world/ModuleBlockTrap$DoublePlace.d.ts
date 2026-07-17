import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleBlockTrap$DoublePlace extends Enum<ModuleBlockTrap$DoublePlace> implements Tagged {
    static ABOVE: ModuleBlockTrap$DoublePlace;
    static BELOW: ModuleBlockTrap$DoublePlace;
    static Companion: Tagged$Companion;
    static getEntries(): ModuleBlockTrap$DoublePlace[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleBlockTrap$DoublePlace;
    static values(): ModuleBlockTrap$DoublePlace[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "ABOVE" | "BELOW";
}