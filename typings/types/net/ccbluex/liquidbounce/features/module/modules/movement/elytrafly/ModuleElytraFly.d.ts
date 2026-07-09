import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleElytraFly$Instant } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/elytrafly/ModuleElytraFly$Instant.d.ts'
import type { ElytraFlyMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/elytrafly/modes/ElytraFlyMode.d.ts'
/**
 * ElytraFly module
 *
 * Makes elytra flying easier to control.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/elytrafly/ModuleElytraFly.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/elytrafly/ModuleElytraFly.kt:43}
 */
export class ModuleElytraFly extends ClientModule {
    static INSTANCE: ModuleElytraFly;
    // private durabilityExploit: boolean;
    // private /*not mapped: */ getDurabilityExploit(): boolean;
    // private instant: ModuleElytraFly$Instant[];
    // private /*not mapped: */ getInstant(): ModuleElytraFly$Instant[];
    // private modes: ModeValueGroup<ElytraFlyMode>;
    /*not mapped: */ getModes$net_ccbluex_liquidbounce(): ModeValueGroup<ElytraFlyMode>;
    // private needsToRestart: boolean;
    // private notInFluid: boolean;
    // private /*not mapped: */ getNotInFluid(): boolean;
    // private tickHandler: EventHook<GameTickEvent>;
    onDisabled(): void;
    onEnabled(): void;
    shouldNotOperate(): boolean;
}