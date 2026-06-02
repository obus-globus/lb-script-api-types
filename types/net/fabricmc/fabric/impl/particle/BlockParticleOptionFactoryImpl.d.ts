import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockParticleOption } from '../../../../../net/minecraft/core/particles/BlockParticleOption.d.ts'
import type { ParticleType } from '../../../../../net/minecraft/core/particles/ParticleType.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class BlockParticleOptionFactoryImpl extends Object {
    static create(paramarg0: ParticleType<BlockParticleOption>, paramarg1: BlockState, paramarg2: BlockPos): BlockParticleOption;
    private constructor()
}