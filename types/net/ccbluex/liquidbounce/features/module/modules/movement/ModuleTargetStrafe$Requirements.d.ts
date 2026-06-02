import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Function0 } from '../../../../../../../kotlin/jvm/functions/Function0.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleTargetStrafe$Requirements extends Enum<ModuleTargetStrafe$Requirements> implements Tagged {
    static Companion: Tagged$Companion;
    static GROUND: ModuleTargetStrafe$Requirements;
    static KILLAURA: ModuleTargetStrafe$Requirements;
    static SPACE: ModuleTargetStrafe$Requirements;
    static SPEED: ModuleTargetStrafe$Requirements;
    static getEntries(): ModuleTargetStrafe$Requirements[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleTargetStrafe$Requirements;
    static values(): (Object | null)[];
    private constructor(tag: string, meets: Function0<boolean>)
    readonly meets: () => boolean;
    readonly tag: string;
    name(): "SPACE" | "SPEED" | "KILLAURA" | "GROUND";
}