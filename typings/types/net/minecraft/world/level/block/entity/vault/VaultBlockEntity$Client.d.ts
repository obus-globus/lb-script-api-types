import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ParticleOptions } from '../../../../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { Level } from '../../../../../../../net/minecraft/world/level/Level.d.ts'
import type { VaultClientData } from '../../../../../../../net/minecraft/world/level/block/entity/vault/VaultClientData.d.ts'
import type { VaultSharedData } from '../../../../../../../net/minecraft/world/level/block/entity/vault/VaultSharedData.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class VaultBlockEntity$Client extends Object {
    static emitActivationParticles(paramclientLevel: Level, parampos: BlockPos, paramblockState: BlockState, paramsharedData: VaultSharedData, paramflameParticle: ParticleOptions): void;
    static emitDeactivationParticles(paramclientLevel: Level, parampos: BlockPos, paramflameParticle: ParticleOptions): void;
    static shouldDisplayActiveEffects(paramsharedData: VaultSharedData): boolean;
    static tick(paramclientLevel: Level, parampos: BlockPos, paramblockState: BlockState, paramclientData: VaultClientData, paramsharedData: VaultSharedData): void;
    constructor()
}