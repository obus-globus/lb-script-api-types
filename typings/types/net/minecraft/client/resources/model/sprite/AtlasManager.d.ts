import type { AutoCloseable } from '../../../../../../java/lang/AutoCloseable.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../../java/util/concurrent/Executor.d.ts'
import type { BiConsumer } from '../../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricResourceReloader } from '../../../../../../net/fabricmc/fabric/impl/resource/FabricResourceReloader.d.ts'
import type { TextureAtlas } from '../../../../../../net/minecraft/client/renderer/texture/TextureAtlas.d.ts'
import type { TextureAtlasSprite } from '../../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { TextureManager } from '../../../../../../net/minecraft/client/renderer/texture/TextureManager.d.ts'
import type { AtlasManager$AtlasEntry } from '../../../../../../net/minecraft/client/resources/model/sprite/AtlasManager$AtlasEntry.d.ts'
import type { AtlasManager$PendingStitchResults } from '../../../../../../net/minecraft/client/resources/model/sprite/AtlasManager$PendingStitchResults.d.ts'
import type { SpriteGetter } from '../../../../../../net/minecraft/client/resources/model/sprite/SpriteGetter.d.ts'
import type { SpriteId } from '../../../../../../net/minecraft/client/resources/model/sprite/SpriteId.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PreparableReloadListener } from '../../../../../../net/minecraft/server/packs/resources/PreparableReloadListener.d.ts'
import type { PreparableReloadListener$PreparationBarrier } from '../../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$PreparationBarrier.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
import type { PreparableReloadListener$StateKey } from '../../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$StateKey.d.ts'
export class AtlasManager extends Object implements AutoCloseable, FabricResourceReloader, SpriteGetter, PreparableReloadListener {
    static PENDING_STITCH: PreparableReloadListener$StateKey<AtlasManager$PendingStitchResults>;
    constructor(textureManager: TextureManager, maxMipmapLevels: number)
    // private atlasById: Map<Identifier, AtlasManager$AtlasEntry>;
    // private atlasByTexture: Map<Identifier, AtlasManager$AtlasEntry>;
    // private fabric$id: Identifier;
    // private maxMipmapLevels: number;
    // private spriteLookup: Map<SpriteId, TextureAtlasSprite>;
    close(): void;
    fabric$getId(): Identifier;
    forEach(output: (param0: Identifier, param1: TextureAtlas) => void): void;
    get(sprite: SpriteId): TextureAtlasSprite;
    getAtlasOrThrow(atlasId: Identifier): TextureAtlas;
    getName(): string;
    prepareSharedState(currentReload: PreparableReloadListener$SharedState): void;
    reload(currentReload: PreparableReloadListener$SharedState, taskExecutor: Executor, preparationBarrier: (param0: Object | null) => CompletableFuture<Object>, reloadExecutor: Executor): CompletableFuture<void>;
    updateMaxMipLevel(maxMipmapLevels: number): void;
    // private updateSpriteMaps(pendingStitches: AtlasManager$PendingStitchResults): void;
}