import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricPreparations } from '../../../../../net/fabricmc/fabric/api/client/renderer/v1/sprite/FabricPreparations.d.ts'
import type { SpriteFinder } from '../../../../../net/fabricmc/fabric/api/client/renderer/v1/sprite/SpriteFinder.d.ts'
import type { SpriteLoaderPreparationsExtension } from '../../../../../net/fabricmc/fabric/impl/client/renderer/SpriteLoaderPreparationsExtension.d.ts'
import type { TextureAtlasSprite } from '../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class SpriteLoader$Preparations extends Record implements FabricPreparations, SpriteLoaderPreparationsExtension {
    // private height: number;
    // private mipLevel: number;
    // private missing: TextureAtlasSprite;
    // private readyForUpload: CompletableFuture<void>;
    // private regions: Map<Identifier, TextureAtlasSprite>;
    // private spriteFinder: SpriteFinder;
    // private width: number;
    equals(o: Object | null): boolean;
    fabric_spriteFinderNullable(): SpriteFinder;
    getSprite(id: Identifier): TextureAtlasSprite;
    hashCode(): number;
    height(): number;
    mipLevel(): number;
    missing(): TextureAtlasSprite;
    readyForUpload(): CompletableFuture<void>;
    regions(): Map<Identifier, TextureAtlasSprite>;
    spriteFinder(): SpriteFinder;
    toString(): string;
    width(): number;
}