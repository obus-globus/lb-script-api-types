import type { AutoCloseable } from '../../../../../../java/lang/AutoCloseable.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SpriteLoader$Preparations } from '../../../../../../net/minecraft/client/renderer/texture/SpriteLoader$Preparations.d.ts'
import type { TextureAtlas } from '../../../../../../net/minecraft/client/renderer/texture/TextureAtlas.d.ts'
import type { AtlasManager$AtlasConfig } from '../../../../../../net/minecraft/client/resources/model/sprite/AtlasManager$AtlasConfig.d.ts'
import type { ResourceManager } from '../../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
export class AtlasManager$AtlasEntry extends Record implements AutoCloseable {
    private constructor(atlas: TextureAtlas, config: AtlasManager$AtlasConfig)
    // private atlas: TextureAtlas;
    // private config: AtlasManager$AtlasConfig;
    atlas(): TextureAtlas;
    close(): void;
    config(): AtlasManager$AtlasConfig;
    equals(o: Object | null): boolean;
    hashCode(): number;
    // private scheduleLoad(resourceManager: ResourceManager, executor: Executor, maxMipmapLevels: number): CompletableFuture<SpriteLoader$Preparations>;
    toString(): string;
}