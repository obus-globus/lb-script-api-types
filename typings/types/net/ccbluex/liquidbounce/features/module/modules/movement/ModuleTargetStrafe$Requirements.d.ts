import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleTargetStrafe$Requirements extends Enum<ModuleTargetStrafe$Requirements> implements Tagged {
    static Companion: Tagged$Companion;
    static GROUND: ModuleTargetStrafe$Requirements;
    static KILLAURA: ModuleTargetStrafe$Requirements;
    static SPACE: ModuleTargetStrafe$Requirements;
    static SPEED: ModuleTargetStrafe$Requirements;
    static getEntries(): ModuleTargetStrafe$Requirements[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleTargetStrafe$Requirements;
    static values(): ModuleTargetStrafe$Requirements[];
    private constructor(tag: string, meets: () => boolean)
    readonly meets: () => boolean;
    readonly tag: string;
    name(): "SPACE" | "SPEED" | "KILLAURA" | "GROUND";
}