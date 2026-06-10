import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SpriteSource } from '../../../../../../../net/minecraft/client/renderer/texture/atlas/SpriteSource.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class SpriteSourceRegistry extends Object {
    static register(paramarg0: Identifier, paramarg1: MapCodec<SpriteSource>): void;
    private constructor()
}