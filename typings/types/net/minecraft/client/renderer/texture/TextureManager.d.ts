import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricResourceReloader } from '../../../../../net/fabricmc/fabric/impl/resource/FabricResourceReloader.d.ts'
import type { AbstractTexture } from '../../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
import type { ReloadableTexture } from '../../../../../net/minecraft/client/renderer/texture/ReloadableTexture.d.ts'
import type { TextureContents } from '../../../../../net/minecraft/client/renderer/texture/TextureContents.d.ts'
import type { TickableTexture } from '../../../../../net/minecraft/client/renderer/texture/TickableTexture.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PreparableReloadListener } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener.d.ts'
import type { PreparableReloadListener$PreparationBarrier } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$PreparationBarrier.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
import type { ResourceManager } from '../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
export class TextureManager extends Object implements AutoCloseable, FabricResourceReloader, PreparableReloadListener {
    static INTENTIONAL_MISSING_TEXTURE: Identifier;
    constructor(resourceManager: ResourceManager)
    // private byPath: Map<Identifier, AbstractTexture>;
    // private fabric$id: Identifier;
    // private resourceManager: ResourceManager;
    // private tickableTextures: TickableTexture[];
    close(): void;
    dumpAllSheets(targetDir: Path[]): void;
    fabric$getId(): Identifier;
    getName(): string;
    getTexture(location: Identifier): AbstractTexture;
    // private loadContentsSafe(textureId: Identifier, texture: ReloadableTexture): TextureContents;
    prepareSharedState(currentReload: PreparableReloadListener$SharedState): void;
    register(location: Identifier, texture: AbstractTexture): void;
    registerAndLoad(textureId: Identifier, texture: ReloadableTexture): void;
    registerForNextReload(location: Identifier): void;
    release(location: Identifier): void;
    reload(currentReload: PreparableReloadListener$SharedState, taskExecutor: Executor, preparationBarrier: (param0: Object | null) => CompletableFuture<Object>, reloadExecutor: Executor): CompletableFuture<void>;
    // private safeClose(id: Identifier, texture: AbstractTexture): void;
    tick(): void;
}