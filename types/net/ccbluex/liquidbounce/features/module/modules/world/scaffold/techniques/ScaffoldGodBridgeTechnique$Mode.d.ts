import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Supplier } from '../../../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { LedgeAction } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/scaffold/features/LedgeAction.d.ts'
export class ScaffoldGodBridgeTechnique$Mode extends Enum<ScaffoldGodBridgeTechnique$Mode> implements Tagged {
    static BACKWARDS: ScaffoldGodBridgeTechnique$Mode;
    static Companion: Tagged$Companion;
    static JUMP: ScaffoldGodBridgeTechnique$Mode;
    static SNEAK: ScaffoldGodBridgeTechnique$Mode;
    /**
     * Might not be as consistent as the other modes.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/techniques/ScaffoldGodBridgeTechnique.kt#L61 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/techniques/ScaffoldGodBridgeTechnique.kt:61}
     */
    static STOP_INPUT: ScaffoldGodBridgeTechnique$Mode;
    static getEntries(): ScaffoldGodBridgeTechnique$Mode[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ScaffoldGodBridgeTechnique$Mode;
    static values(): (Object | null)[];
    private constructor(tag: string, creator: () => LedgeAction)
    private constructor(tag: string, ledgeAction: LedgeAction)
    readonly creator: () => LedgeAction;
    readonly tag: string;
    name(): "JUMP" | "SNEAK" | "STOP_INPUT" | "BACKWARDS";
}