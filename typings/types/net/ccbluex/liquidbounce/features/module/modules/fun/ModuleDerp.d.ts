import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleDerp$PitchMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/ModuleDerp$PitchMode.d.ts'
import type { ModuleDerp$YawMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/ModuleDerp$YawMode.d.ts'
import type { RotationsValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.d.ts'
/**
 * Derp module
 *
 * Makes it look as if you were derping around.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleDerp.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleDerp.kt:33}
 */
export class ModuleDerp extends ClientModule {
    static INSTANCE: ModuleDerp;
    // private notDuringSprint: boolean;
    // private /*not mapped: */ getNotDuringSprint(): boolean;
    // private pitchMode: ModeValueGroup<ModuleDerp$PitchMode>;
    readonly repeatable: EventHook<GameTickEvent>;
    // private rotations: RotationsValueGroup;
    // private safePitch: boolean;
    // private /*not mapped: */ getSafePitch(): boolean;
    // private yawMode: ModeValueGroup<ModuleDerp$YawMode>;
}