import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SpriteLoader$Preparations } from '../../../../../../net/minecraft/client/renderer/texture/SpriteLoader$Preparations.d.ts'
import type { TextureAtlasSprite } from '../../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { AtlasManager$PendingStitch } from '../../../../../../net/minecraft/client/resources/model/sprite/AtlasManager$PendingStitch.d.ts'
import type { SpriteId } from '../../../../../../net/minecraft/client/resources/model/sprite/SpriteId.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class AtlasManager$PendingStitchResults extends Object {
    private constructor(pendingStitches: AtlasManager$PendingStitch[], stitchFuturesById: JavaMap<Identifier, CompletableFuture<SpriteLoader$Preparations>>, allReadyToUpload: CompletableFuture<Object>)
    // private allReadyToUpload: CompletableFuture<Object>;
    // private pendingStitches: AtlasManager$PendingStitch[];
    // private stitchFuturesById: JavaMap<Identifier, CompletableFuture<SpriteLoader$Preparations>>;
    get(atlasId: Identifier): CompletableFuture<SpriteLoader$Preparations>;
    joinAndUpload(): JavaMap<SpriteId, TextureAtlasSprite>;
}