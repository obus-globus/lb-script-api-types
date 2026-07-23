import type { Pair } from '../../../../../../../../kotlin/Pair.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { RotationUpdateEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/RotationUpdateEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { RotationsValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Vec3 } from '../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * AutoFarm module
 *
 * Automatically farms stuff for you.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6f54ba6705b9d98f759a29be39e5aa97e877cc92/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autofarm/ModuleAutoFarm.kt#L73 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autofarm/ModuleAutoFarm.kt:73}
 */
export class ModuleAutoFarm extends ClientModule {
    static INSTANCE: ModuleAutoFarm;
    readonly currentTarget: BlockPos | null;
    // private disableOnFullInventory: boolean;
    // private /*not mapped: */ getDisableOnFullInventory(): boolean;
    // private fortune: boolean;
    // private /*not mapped: */ getFortune(): boolean;
    // private interactDelay: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getInteractDelay(): { start: number; endInclusive: number; step: number };
    // private range: number;
    // private /*not mapped: */ getRange(): number;
    // private rotationUpdateHandler: EventHook<RotationUpdateEvent>;
    // private rotations: RotationsValueGroup;
    /*not mapped: */ getRotations$net_ccbluex_liquidbounce(): RotationsValueGroup;
    // private tickHandler: EventHook<GameTickEvent>;
    // private wallRange: number;
    // private /*not mapped: */ getWallRange(): number;
    onDisabled(): void;
    onEnabled(): void;
    // private swapToSlotWithFortune(): void;
    // private updateTarget(): void;
    // private updateTarget(possible: Pair<BlockPos, BlockState>[]): boolean;
    // private updateTargetToFertilizable(radius: number, eyesPos: Vec3): boolean;
    // private updateTargetToHarvest(radius: number, eyesPos: Vec3): boolean;
    // private updateTargetToPlantable(radius: number, eyesPos: Vec3): boolean;
}