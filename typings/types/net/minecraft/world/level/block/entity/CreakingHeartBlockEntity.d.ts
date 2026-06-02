import type { Either } from '../../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ClientboundBlockEntityDataPacket } from '../../../../../../net/minecraft/network/protocol/game/ClientboundBlockEntityDataPacket.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { DamageSource } from '../../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { Creaking } from '../../../../../../net/minecraft/world/entity/monster/creaking/Creaking.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ValueInput } from '../../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class CreakingHeartBlockEntity extends BlockEntity {
    static CREAKING_ROAMING_RADIUS: number;
    static NBT_ATTACHMENT_KEY: string;
    static addEntityType(paramoutput: ValueOutput, paramtype: BlockEntityType<Object>): void;
    static getPosFromTag(parambase: ChunkPos, paramentityTag: CompoundTag): BlockPos;
    static loadStatic(parampos: BlockPos, paramstate: BlockState, paramtag: CompoundTag, paramregistries: HolderLookup$Provider): BlockEntity;
    static parseCustomNameSafe(paraminput: ValueInput, paramname: string): Component;
    static serverTick(paramlevel: Level, parampos: BlockPos, paramstate: BlockState, paramentity: CreakingHeartBlockEntity): void;
    constructor(worldPosition: BlockPos, blockState: BlockState)
    readonly creakingInfo: Either<Creaking, UUID>;
    // private emitter: number;
    // private emitterTarget: Vec3;
    // private outputSignal: number;
    // private ticker: number;
    // private ticksExisted: number;
    // private clearCreakingInfo(): void;
    computeAnalogOutputSignal(): number;
    creakingHurt(): void;
    // private distanceToCreaking(): number;
    // private emitParticles(serverLevel: ServerLevel, count: number, towardsCreaking: boolean): void;
    getAnalogOutputSignal(): number;
    // private getCreakingProtector(): Optional<Creaking>;
    getUpdatePacket(): ClientboundBlockEntityDataPacket;
    getUpdateTag(registries: HolderLookup$Provider): CompoundTag;
    isProtector(creaking: Creaking): boolean;
    loadAdditional(input: ValueInput): void;
    preRemoveSideEffects(pos: BlockPos, state: BlockState): void;
    removeProtector(damageSource: DamageSource): void;
    saveAdditional(output: ValueOutput): void;
    setCreakingInfo(uuid: UUID): void;
    setCreakingInfo(creaking: Creaking): void;
    // private spreadResin(level: ServerLevel): Optional<BlockPos>;
}