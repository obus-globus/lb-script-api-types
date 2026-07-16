import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleElytraFly$Instant extends Enum<ModuleElytraFly$Instant> implements Tagged {
    static Companion: Tagged$Companion;
    static START: ModuleElytraFly$Instant;
    static STOP: ModuleElytraFly$Instant;
    static getEntries(): ModuleElytraFly$Instant[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleElytraFly$Instant;
    static values(): ModuleElytraFly$Instant[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "START" | "STOP";
}