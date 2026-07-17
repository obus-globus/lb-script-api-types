import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SpriteLoader$Preparations } from '../../../../../../net/minecraft/client/renderer/texture/SpriteLoader$Preparations.d.ts'
import type { TextureAtlasSprite } from '../../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { AtlasManager$AtlasEntry } from '../../../../../../net/minecraft/client/resources/model/sprite/AtlasManager$AtlasEntry.d.ts'
import type { SpriteId } from '../../../../../../net/minecraft/client/resources/model/sprite/SpriteId.d.ts'
export class AtlasManager$PendingStitch extends Record {
    private constructor(entry: AtlasManager$AtlasEntry, preparations: CompletableFuture<SpriteLoader$Preparations>)
    // private entry: AtlasManager$AtlasEntry;
    // private preparations: CompletableFuture<SpriteLoader$Preparations>;
    entry(): AtlasManager$AtlasEntry;
    equals(o: Object | null): boolean;
    hashCode(): number;
    joinAndUpload(result: JavaMap<SpriteId, TextureAtlasSprite>): void;
    preparations(): CompletableFuture<SpriteLoader$Preparations>;
    toString(): string;
}