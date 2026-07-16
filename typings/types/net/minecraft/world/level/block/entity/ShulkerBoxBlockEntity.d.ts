import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { TickingBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/TickingBlockEntity.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ValueInput } from '../../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ShulkerBoxBlockEntity {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static COLUMNS: number;
    static CONTAINER_SIZE: number;
    static DEFAULT_DISTANCE_BUFFER: number;
    static EVENT_SET_OPEN_COUNT: number;
    static LOOT_TABLE_SEED_TAG: string;
    static LOOT_TABLE_TAG: string;
    static MAX_LID_HEIGHT: number;
    static MAX_LID_ROTATION: number;
    static NBT_ATTACHMENT_KEY: string;
    static OPENING_TICK_LENGTH: number;
    static ROWS: number;
    static SLEEPING_BLOCK_ENTITY_TICKER: TickingBlockEntity;
    static addEntityType(paramoutput: ValueOutput, paramtype: BlockEntityType<any>): void;
    static getPosFromTag(parambase: ChunkPos, paramentityTag: CompoundTag): BlockPos;
    static loadStatic(parampos: BlockPos, paramstate: BlockState, paramtag: CompoundTag, paramregistries: HolderLookup$Provider): BlockEntity;
    static parseCustomNameSafe(paraminput: ValueInput, paramname: string): Component;
    static sendChestLockedNotifications(parampos: Vec3, paramplayer: Player, paramdisplayName: Component): void;
    static tick(paramlevel: Level, parampos: BlockPos, paramstate: BlockState, paramentity: (Object | null)[]): void;
}