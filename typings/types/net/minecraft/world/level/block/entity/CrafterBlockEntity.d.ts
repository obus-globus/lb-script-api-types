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
export class CrafterBlockEntity {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static CONTAINER_HEIGHT: number;
    static CONTAINER_SIZE: number;
    static CONTAINER_WIDTH: number;
    static DATA_TRIGGERED: number;
    static DEFAULT_DISTANCE_BUFFER: number;
    static LOOT_TABLE_SEED_TAG: string;
    static LOOT_TABLE_TAG: string;
    static NBT_ATTACHMENT_KEY: string;
    static NUM_DATA: number;
    static SLEEPING_BLOCK_ENTITY_TICKER: TickingBlockEntity;
    static SLOT_DISABLED: number;
    static SLOT_ENABLED: number;
    static addEntityType(paramoutput: ValueOutput, paramtype: BlockEntityType<any>): void;
    static getPosFromTag(parambase: ChunkPos, paramentityTag: CompoundTag): BlockPos;
    static loadStatic(parampos: BlockPos, paramstate: BlockState, paramtag: CompoundTag, paramregistries: HolderLookup$Provider): BlockEntity;
    static parseCustomNameSafe(paraminput: ValueInput, paramname: string): Component;
    static sendChestLockedNotifications(parampos: Vec3, paramplayer: Player, paramdisplayName: Component): void;
    static serverTick(paramlevel: Level, paramblockPos: BlockPos, paramblockState: BlockState, paramentity: (Object | null)[]): void;
}