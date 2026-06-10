import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { WorldBorderListenerOnce } from '../../../../../net/caffeinemc/mods/lithium/common/world/listeners/WorldBorderListenerOnce.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityTicker } from '../../../../../net/minecraft/world/level/block/entity/BlockEntityTicker.d.ts'
import type { TickingBlockEntity } from '../../../../../net/minecraft/world/level/block/entity/TickingBlockEntity.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { WorldBorder } from '../../../../../net/minecraft/world/level/border/WorldBorder.d.ts'
export class LevelChunk$BoundTickingBlockEntity<T extends BlockEntity> extends Object implements WorldBorderListenerOnce, TickingBlockEntity {
    private constructor(null_: LevelChunk$BoundTickingBlockEntity<T>, ticker: (param0: Level, param1: BlockPos, param2: BlockState, param3: T) => void)
    // private blockEntity: T;
    // private loggedInvalidBlockState: boolean;
    // private ticker: (param0: Level, param1: BlockPos, param2: BlockState, param3: T) => void;
    // private worldBorderState: number;
    getPos(): BlockPos;
    getType(): string;
    // private isInsideWorldBorder(): boolean;
    isRemoved(): boolean;
    lithium$onWorldBorderShapeChange(arg0: WorldBorder): void;
    onAreaReplaced(arg0: WorldBorder): void;
    onLerpSize(arg0: WorldBorder, arg1: number, arg2: number, arg3: number, arg4: number): void;
    onSetCenter(arg0: WorldBorder, arg1: number, arg2: number): void;
    onSetDamagePerBlock(arg0: WorldBorder, arg1: number): void;
    onSetSafeZone(arg0: WorldBorder, arg1: number): void;
    onSetSize(arg0: WorldBorder, arg1: number): void;
    onSetWarningBlocks(arg0: WorldBorder, arg1: number): void;
    onSetWarningTime(arg0: WorldBorder, arg1: number): void;
    // private startWorldBorderCaching(): void;
    tick(): void;
    toString(): string;
}