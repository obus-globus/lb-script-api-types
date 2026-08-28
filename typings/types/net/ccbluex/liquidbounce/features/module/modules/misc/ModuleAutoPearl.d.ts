import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { RotationUpdateEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/RotationUpdateEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleAutoPearl$Modes } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/ModuleAutoPearl$Modes.d.ts'
import type { Rotation } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { TrajectoryInfo } from '../../../../../../../net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfo.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { ThrownEnderpearl } from '../../../../../../../net/minecraft/world/entity/projectile/throwableitemprojectile/ThrownEnderpearl.d.ts'
import type { HitResult } from '../../../../../../../net/minecraft/world/phys/HitResult.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Auto pearl module
 *
 * AutoPearl aims and throws a pearl at an enemies pearl trajectory
 *
 * @author sqlerrorthing
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleAutoPearl.kt#L64 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleAutoPearl.kt:64}
 */
export class ModuleAutoPearl extends ClientModule {
    static INSTANCE: ModuleAutoPearl;
    // private combatPauseTime: number;
    // private /*not mapped: */ getCombatPauseTime(): number;
    // private gameTickHandler: EventHook<GameTickEvent>;
    // private mode: ModuleAutoPearl$Modes;
    // private /*not mapped: */ getMode(): ModuleAutoPearl$Modes;
    // private pearlSpawnHandler: EventHook<PacketEvent>;
    // private queue: Rotation[];
    // private simulatedTickHandler: EventHook<RotationUpdateEvent>;
    // private slotResetDelay: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getSlotResetDelay(): { start: number; endInclusive: number; step: number };
    // private canThrow(angles: Rotation, destination: Vec3): boolean;
    // private canTrigger(pearl: ThrownEnderpearl): boolean;
    onDisabled(): void;
    // private proceedPearl(pearl: ThrownEnderpearl, velocity: Vec3, pearlPos: Vec3): void;
    // private runSimulation(owner: Entity, velocity: Vec3, pos: Vec3, trajectoryInfo: TrajectoryInfo, renderOffset: Vec3): HitResult | null;
}