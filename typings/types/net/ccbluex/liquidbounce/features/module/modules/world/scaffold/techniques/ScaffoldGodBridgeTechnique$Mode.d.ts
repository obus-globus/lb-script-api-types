import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Supplier } from '../../../../../../../../../java/util/function/Supplier.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { LedgeAction } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/scaffold/features/LedgeAction.d.ts'
export class ScaffoldGodBridgeTechnique$Mode extends Enum<ScaffoldGodBridgeTechnique$Mode> implements Tagged {
    static BACKWARDS: ScaffoldGodBridgeTechnique$Mode;
    static Companion: Tagged$Companion;
    static JUMP: ScaffoldGodBridgeTechnique$Mode;
    static SNEAK: ScaffoldGodBridgeTechnique$Mode;
    static STOP_INPUT: ScaffoldGodBridgeTechnique$Mode;
    static getEntries(): ScaffoldGodBridgeTechnique$Mode[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ScaffoldGodBridgeTechnique$Mode;
    static values(): ScaffoldGodBridgeTechnique$Mode[];
    private constructor(tag: string, creator: () => LedgeAction)
    private constructor(tag: string, ledgeAction: LedgeAction)
    readonly creator: () => LedgeAction;
    readonly tag: string;
    name(): "JUMP" | "SNEAK" | "STOP_INPUT" | "BACKWARDS";
}