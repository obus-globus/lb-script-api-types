import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { RotationUpdateEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/RotationUpdateEvent.d.ts'
import type { FeatureChestAura$PauseCondition } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/cheststealer/features/FeatureChestAura$PauseCondition.d.ts'
import type { RotationsValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.d.ts'
import type { SwingMode } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/block/SwingMode.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Block } from '../../../../../../../../../net/minecraft/world/level/block/Block.d.ts'
/**
 * ChestAura feature is responsible for automatically interacting with storage blocks (such as chests)
 * within a specified range and line of sight of the player.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/cheststealer/features/FeatureChestAura.kt#L61 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/cheststealer/features/FeatureChestAura.kt:61}
 */
export class FeatureChestAura extends ToggleableValueGroup {
    static INSTANCE: FeatureChestAura;
    // private currentTargetBlock: BlockPos | null;
    readonly interactedBlocksSet: BlockPos[];
    // private interactionAttempts: number;
    // private interactionDelay: number;
    // private /*not mapped: */ getInteractionDelay(): number;
    // private interactionRange: number;
    // private /*not mapped: */ getInteractionRange(): number;
    // private interactionRepeatableTask: EventHook<GameTickEvent>;
    // private notDuringCombat: boolean;
    // private /*not mapped: */ getNotDuringCombat(): boolean;
    // private packetHandler: EventHook<PacketEvent>;
    // private pauseOn: FeatureChestAura$PauseCondition[];
    // private /*not mapped: */ getPauseOn(): FeatureChestAura$PauseCondition[];
    // private rotations: RotationsValueGroup;
    readonly running: boolean;
    // private simulatedTickHandler: EventHook<RotationUpdateEvent>;
    // private swingMode: SwingMode;
    // private /*not mapped: */ getSwingMode(): SwingMode;
    // private trackManualInteractions: boolean;
    // private /*not mapped: */ getTrackManualInteractions(): boolean;
    // private validStorageBlocks: Block[];
    // private /*not mapped: */ getValidStorageBlocks(): Block[];
    // private wallInteractionRange: number;
    // private /*not mapped: */ getWallInteractionRange(): number;
    onDisabled(): void;
    // private track(blockPos: BlockPos): void;
}