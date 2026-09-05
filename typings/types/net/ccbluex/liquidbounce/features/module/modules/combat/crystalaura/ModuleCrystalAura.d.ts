import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { RotationUpdateEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/RotationUpdateEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { RotationMode } from '../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationMode.d.ts'
import type { TargetTracker } from '../../../../../../../../net/ccbluex/liquidbounce/utils/combat/TargetTracker.d.ts'
/**
 * Module CrystalAura
 *
 * Automatically places and explodes end crystals.
 *
 * @author ccetl
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/ModuleCrystalAura.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/ModuleCrystalAura.kt:46}
 */
export class ModuleCrystalAura extends ClientModule {
    static INSTANCE: ModuleCrystalAura;
    readonly rotationMode: ModeValueGroup<RotationMode>;
    // private simulatedTickHandler: EventHook<RotationUpdateEvent>;
    readonly targetTracker: TargetTracker;
    onDisabled(): void;
    onEnabled(): void;
}