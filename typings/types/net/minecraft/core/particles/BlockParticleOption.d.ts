import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FabricBlockParticleOption } from '../../../../net/fabricmc/fabric/api/particle/v1/FabricBlockParticleOption.d.ts'
import type { BlockParticleOptionExtension } from '../../../../net/fabricmc/fabric/impl/particle/BlockParticleOptionExtension.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { ParticleType } from '../../../../net/minecraft/core/particles/ParticleType.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class BlockParticleOption extends Object implements FabricBlockParticleOption, BlockParticleOptionExtension, ParticleOptions {
    static codec(paramtype: ParticleType<BlockParticleOption>): MapCodec<BlockParticleOption>;
    static streamCodec(paramtype: ParticleType<BlockParticleOption>): StreamCodec<Object, BlockParticleOption>;
    constructor(type: ParticleType<BlockParticleOption>, state: BlockState)
    readonly blockPos: BlockPos;
    readonly state: BlockState;
    readonly type: ParticleType<BlockParticleOption>;
    fabric_setBlockPos(arg0: BlockPos): void;
    getBlockPos(): BlockPos;
    getState(): BlockState;
    getType(): ParticleType<BlockParticleOption>;
}