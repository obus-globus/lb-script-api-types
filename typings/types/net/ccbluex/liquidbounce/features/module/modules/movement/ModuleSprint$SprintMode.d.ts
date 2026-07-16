import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleSprint$SprintMode extends Enum<ModuleSprint$SprintMode> implements Tagged {
    static Companion: Tagged$Companion;
    static LEGIT: ModuleSprint$SprintMode;
    static OMNIDIRECTIONAL: ModuleSprint$SprintMode;
    static OMNIROTATIONAL: ModuleSprint$SprintMode;
    static getEntries(): ModuleSprint$SprintMode[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleSprint$SprintMode;
    static values(): ModuleSprint$SprintMode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "LEGIT" | "OMNIDIRECTIONAL" | "OMNIROTATIONAL";
}