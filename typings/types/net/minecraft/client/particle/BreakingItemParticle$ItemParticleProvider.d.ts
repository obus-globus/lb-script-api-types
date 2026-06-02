import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ParticleProvider } from '../../../../net/minecraft/client/particle/ParticleProvider.d.ts'
import type { ItemStackRenderState } from '../../../../net/minecraft/client/renderer/item/ItemStackRenderState.d.ts'
import type { TextureAtlasSprite } from '../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { ItemStackTemplate } from '../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
export abstract class BreakingItemParticle$ItemParticleProvider<T extends ParticleOptions> extends Object implements ParticleProvider<T> {
    constructor()
    // private scratchRenderState: ItemStackRenderState;
    getSprite(item: ItemStackTemplate, level: ClientLevel, random: RandomSource): TextureAtlasSprite;
}