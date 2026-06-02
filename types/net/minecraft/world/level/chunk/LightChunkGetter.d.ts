import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SectionPos } from '../../../../../net/minecraft/core/SectionPos.d.ts'
import type { BlockGetter } from '../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { LightLayer } from '../../../../../net/minecraft/world/level/LightLayer.d.ts'
import type { LightChunk } from '../../../../../net/minecraft/world/level/chunk/LightChunk.d.ts'
export interface LightChunkGetter extends Object{
    getChunkForLighting(x: number, z: number): LightChunk;
    getLevel(): BlockGetter;
    onLightUpdate(layer: LightLayer, pos: SectionPos): void;
}