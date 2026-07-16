import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleItemChams$ShieldTintMode extends Enum<ModuleItemChams$ShieldTintMode> implements Tagged {
    static Companion: Tagged$Companion;
    static MULTIPLY: ModuleItemChams$ShieldTintMode;
    static OVERRIDE: ModuleItemChams$ShieldTintMode;
    static getEntries(): ModuleItemChams$ShieldTintMode[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleItemChams$ShieldTintMode;
    static values(): ModuleItemChams$ShieldTintMode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "OVERRIDE" | "MULTIPLY";
}