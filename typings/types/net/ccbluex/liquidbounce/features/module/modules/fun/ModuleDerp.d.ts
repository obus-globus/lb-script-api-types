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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleDerp.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleDerp.kt:40}
 */
export class ModuleDerp extends ClientModule {
    static INSTANCE: ModuleDerp;
    // private notDuringSprint: boolean;
    // private /*not mapped: */ getNotDuringSprint(): boolean;
    // private pitchMode: ModeValueGroup<ModuleDerp$PitchMode>;
    // private rotations: RotationsValueGroup;
    // private safePitch: boolean;
    // private /*not mapped: */ getSafePitch(): boolean;
    // private tickHandler: EventHook<GameTickEvent>;
    // private yawMode: ModeValueGroup<ModuleDerp$YawMode>;
}