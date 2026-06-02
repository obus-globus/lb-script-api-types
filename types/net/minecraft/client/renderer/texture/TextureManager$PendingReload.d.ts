import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ReloadableTexture } from '../../../../../net/minecraft/client/renderer/texture/ReloadableTexture.d.ts'
import type { TextureContents } from '../../../../../net/minecraft/client/renderer/texture/TextureContents.d.ts'
export class TextureManager$PendingReload extends Record {
    private constructor(texture: ReloadableTexture, newContents: CompletableFuture<TextureContents>)
    // private newContents: CompletableFuture<TextureContents>;
    // private texture: ReloadableTexture;
    equals(o: Object | null): boolean;
    hashCode(): number;
    newContents(): CompletableFuture<TextureContents>;
    texture(): ReloadableTexture;
    toString(): string;
}