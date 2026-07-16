import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleKillAura$RaycastMode extends Enum<ModuleKillAura$RaycastMode> implements Tagged {
    static Companion: Tagged$Companion;
    static TRACE_ALL: ModuleKillAura$RaycastMode;
    static TRACE_NONE: ModuleKillAura$RaycastMode;
    static TRACE_ONLYENEMY: ModuleKillAura$RaycastMode;
    static getEntries(): ModuleKillAura$RaycastMode[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleKillAura$RaycastMode;
    static values(): ModuleKillAura$RaycastMode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "TRACE_NONE" | "TRACE_ONLYENEMY" | "TRACE_ALL";
}