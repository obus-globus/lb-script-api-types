import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { TargetTracker } from '../../../../../../../../net/ccbluex/liquidbounce/utils/combat/TargetTracker.d.ts'
import type { TargetRenderer } from '../../../../../../../../net/ccbluex/liquidbounce/utils/render/TargetRenderer.d.ts'
import type { LivingEntity } from '../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
/**
 * Following the target on elytra.
 * Works with {@link ModuleKillAura} together
 *
 * https://youtu.be/1wa8uKH_apY
 *
 * @author sqlerrorthing
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/26472f4415000921e37ac654ef9e544e7d3750c9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/elytratarget/ModuleElytraTarget.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/elytratarget/ModuleElytraTarget.kt:38}
 */
export class ModuleElytraTarget extends ClientModule {
    static INSTANCE: ModuleElytraTarget;
    static canAlwaysGlide(): boolean;
    // private alwaysGlide: boolean;
    // private /*not mapped: */ getAlwaysGlide(): boolean;
    /*not mapped: */ canAlwaysGlide(): boolean;
    readonly canIgnoreKillAuraRotations: boolean;
    readonly running: boolean;
    // private safe: boolean;
    // private /*not mapped: */ getSafe(): boolean;
    /*not mapped: */ getTarget$net_ccbluex_liquidbounce(): LivingEntity | null;
    // private targetRenderer: TargetRenderer;
    // private targetTracker: TargetTracker;
    // private targetUpdateHandler: EventHook<GameTickEvent>;
    isSameTargetRendering(target: LivingEntity): boolean;
    onDisabled(): void;
}