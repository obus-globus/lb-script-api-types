import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ScaffoldSprintControlFeature$SprintMode extends Enum<ScaffoldSprintControlFeature$SprintMode> implements Tagged {
    static Companion: Tagged$Companion;
    /**
     * This can be used to not change the sprint state.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/features/ScaffoldSprintControlFeature.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/features/ScaffoldSprintControlFeature.kt:36}
     */
    static DO_NOT_CHANGE: ScaffoldSprintControlFeature$SprintMode;
    /**
     * This can be used to disable sprinting on Scaffold,
     * while still allowing to sprint omnidirectional
     * when Scaffold is not active.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/features/ScaffoldSprintControlFeature.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/features/ScaffoldSprintControlFeature.kt:48}
     */
    static FORCE_NO_SPRINT: ScaffoldSprintControlFeature$SprintMode;
    /**
     * This can be used to force sprinting on Scaffold,
     * while not allowing to sprint omnidirectional
     * when Scaffold is not active.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/features/ScaffoldSprintControlFeature.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/features/ScaffoldSprintControlFeature.kt:41}
     */
    static FORCE_SPRINT: ScaffoldSprintControlFeature$SprintMode;
    /**
     * This mod will stop sprinting when the player is
     * grounded.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/features/ScaffoldSprintControlFeature.kt#L60 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/features/ScaffoldSprintControlFeature.kt:60}
     */
    static NO_SPRINT_ON_GROUND: ScaffoldSprintControlFeature$SprintMode;
    /**
     * This mode will stop sprinting on place.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/features/ScaffoldSprintControlFeature.kt#L55 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/features/ScaffoldSprintControlFeature.kt:55}
     */
    static NO_SPRINT_ON_PLACE: ScaffoldSprintControlFeature$SprintMode;
    static getEntries(): ScaffoldSprintControlFeature$SprintMode[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ScaffoldSprintControlFeature$SprintMode;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "DO_NOT_CHANGE" | "FORCE_SPRINT" | "FORCE_NO_SPRINT" | "NO_SPRINT_ON_PLACE" | "NO_SPRINT_ON_GROUND";
}