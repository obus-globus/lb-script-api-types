import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SpriteSource$Output } from '../../../../../../net/minecraft/client/renderer/texture/atlas/SpriteSource$Output.d.ts'
import type { ResourceManager } from '../../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
export interface SpriteSource extends Object{
    codec(): MapCodec<SpriteSource>;
    run(resourceManager: ResourceManager, output: SpriteSource$Output): void;
}