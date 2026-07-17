import type { Pair } from '../../../../../../../kotlin/Pair.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { WorldRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Spear kill module
 *
 * Automatically attacks enemies using a charged spear.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleSpearKill.kt#L49 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleSpearKill.kt:49}
 */
export class ModuleSpearKill extends ClientModule {
    static INSTANCE: ModuleSpearKill;
    // private attackMovements: Vec3[];
    /*not mapped: */ getCurrentAttackDirection$net_ccbluex_liquidbounce(): Vec3;
    /*not mapped: */ getCurrentAttackVelocity$net_ccbluex_liquidbounce(): number;
    // private /*not mapped: */ getCurrentMovement(): Vec3;
    // private /*not mapped: */ getHoldingSpear(): boolean;
    // private /*not mapped: */ isUsingSpear(): boolean;
    // private maxAllowedSpeed: number;
    // private /*not mapped: */ getMaxAllowedSpeed(): number;
    // private maxTargetDistance: number;
    // private /*not mapped: */ getMaxTargetDistance(): number;
    // private previewTarget: LivingEntity | null;
    // private renderHandler: EventHook<WorldRenderEvent>;
    // private tickHandler: EventHook<GameTickEvent>;
    // private createAttackMovement(target: LivingEntity, distance: number): void;
    // private findTarget(): Pair<LivingEntity, number> | null;
    // private resetAttack(): void;
}