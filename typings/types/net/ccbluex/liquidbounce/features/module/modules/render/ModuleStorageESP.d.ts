import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { WorldRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleStorageESP$ChestType } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleStorageESP$ChestType.d.ts'
import type { DistanceFadeUniformValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/render/utils/DistanceFadeUniformValueGroup.d.ts'
import type { PositionedVoxelShape } from '../../../../../../../net/ccbluex/liquidbounce/utils/math/PositionedVoxelShape.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { BlockEntity } from '../../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { VoxelShape } from '../../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
/**
 * StorageESP module
 *
 * Allows you to see chests, dispensers, etc. through walls.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleStorageESP.kt#L91 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleStorageESP.kt:91}
 */
export class ModuleStorageESP extends ClientModule {
    static INSTANCE: ModuleStorageESP;
    static categorize(self: Entity | null): ModuleStorageESP$ChestType | null;
    static categorize(self: BlockEntity | null): ModuleStorageESP$ChestType | null;
    // private allTypes: ModuleStorageESP$ChestType[];
    // private distanceFade: DistanceFadeUniformValueGroup;
    // private mergeAdjacent: boolean;
    // private /*not mapped: */ getMergeAdjacent(): boolean;
    // private modes: ModeValueGroup<Mode>;
    // private renderHandler: EventHook<WorldRenderEvent>;
    // private requiresChestStealer: boolean;
    // private /*not mapped: */ getRequiresChestStealer(): boolean;
    readonly running: boolean;
    // private collectTrackedBlockShapes(skipWhen: (param0: BlockState) => boolean): PositionedVoxelShape<ModuleStorageESP$ChestType>[];
    // private forEachTrackedBlockShapes(skipWhen: (param0: BlockState) => boolean, block: (param0: BlockPos, param1: ModuleStorageESP$ChestType, param2: VoxelShape) => void): void;
    // private markDirtyForModes(): void;
    onDisabled(): void;
    onEnabled(): void;
    showTracers(): boolean;
}