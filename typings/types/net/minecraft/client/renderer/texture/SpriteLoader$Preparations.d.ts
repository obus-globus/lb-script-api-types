import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricPreparations } from '../../../../../net/fabricmc/fabric/api/client/renderer/v1/sprite/FabricPreparations.d.ts'
import type { SpriteFinder } from '../../../../../net/fabricmc/fabric/api/client/renderer/v1/sprite/SpriteFinder.d.ts'
import type { SpriteLoaderPreparationsExtension } from '../../../../../net/fabricmc/fabric/impl/client/renderer/SpriteLoaderPreparationsExtension.d.ts'
import type { TextureAtlasSprite } from '../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class SpriteLoader$Preparations extends Record implements FabricPreparations, SpriteLoaderPreparationsExtension {
    constructor(width: number, height: number, mipLevel: number, missing: TextureAtlasSprite, regions: JavaMap<Identifier, TextureAtlasSprite>, readyForUpload: CompletableFuture<void>)
    // private height: number;
    // private mipLevel: number;
    // private missing: TextureAtlasSprite;
    // private readyForUpload: CompletableFuture<void>;
    // private regions: JavaMap<Identifier, TextureAtlasSprite>;
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
    regions(): JavaMap<Identifier, TextureAtlasSprite>;
    spriteFinder(): SpriteFinder;
    toString(): string;
    width(): number;
}