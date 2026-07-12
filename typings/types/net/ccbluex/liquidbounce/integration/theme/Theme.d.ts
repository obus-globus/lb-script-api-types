import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../kotlin/coroutines/Continuation.d.ts'
import type { Mutex } from '../../../../../kotlinx/coroutines/sync/Mutex.d.ts'
import type { BaseApi } from '../../../../../net/ccbluex/liquidbounce/api/core/BaseApi.d.ts'
import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { Theme$Companion } from '../../../../../net/ccbluex/liquidbounce/integration/theme/Theme$Companion.d.ts'
import type { Theme$ComponentCatalogEntry } from '../../../../../net/ccbluex/liquidbounce/integration/theme/Theme$ComponentCatalogEntry.d.ts'
import type { Theme$Origin } from '../../../../../net/ccbluex/liquidbounce/integration/theme/Theme$Origin.d.ts'
import type { ThemeBackground } from '../../../../../net/ccbluex/liquidbounce/integration/theme/ThemeBackground.d.ts'
import type { ThemeMetadata } from '../../../../../net/ccbluex/liquidbounce/integration/theme/ThemeMetadata.d.ts'
import type { HudComponent } from '../../../../../net/ccbluex/liquidbounce/integration/theme/component/HudComponent.d.ts'
import type { HudComponentFactory } from '../../../../../net/ccbluex/liquidbounce/integration/theme/component/HudComponentFactory.d.ts'
import type { PreparableReloadListener$PreparationBarrier } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$PreparationBarrier.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
import type { ResourceManager } from '../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { ResourceManagerReloadListener } from '../../../../../net/minecraft/server/packs/resources/ResourceManagerReloadListener.d.ts'
/**
 * A web-based theme loaded from the provided URL.
 *
 * Can be local from {@link ClientInteropServer} or remote from the internet.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/Theme.kt#L58 | src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/Theme.kt:58}
 */
export class Theme extends BaseApi implements Closeable, ResourceManagerReloadListener {
    static Companion: Theme$Companion;
    static load(paramarg0: string, paramarg1: Continuation<Object>): Object;
    static load(paramarg0: Theme$Origin, paramarg1: File, paramarg2: Continuation<Object>): Object;
    private constructor(origin: Theme$Origin, url: string)
    // private _colors: ValueGroup | null;
    // private _metadata: ThemeMetadata | null;
    // private _settings: ValueGroup | null;
    readonly backgroundImage: ThemeBackground | null;
    readonly backgroundShader: ThemeBackground | null;
    readonly colors: ValueGroup;
    // private componentFactories: { [key: string]: HudComponentFactory } | null;
    // private componentSettings: ValueGroup | null;
    readonly components: HudComponent[];
    // private imageMutex: Mutex;
    readonly metadata: ThemeMetadata;
    readonly origin: Theme$Origin;
    readonly settings: ValueGroup;
    // private shaderMutex: Mutex;
    addComponent(sourceId: string): HudComponent | null;
    close(): void;
    compileShader(): boolean;
    componentCatalog(): Theme$ComponentCatalogEntry[];
    // private createComponent(factory: HudComponentFactory): HudComponent | null;
    /**
     * Get the URL to the given page name in the theme.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/Theme.kt#L308 | src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/Theme.kt:308}
     */
    getUrl(name: string | null, markAsStatic: boolean): string;
    isOverlaySupported(name: string | null): boolean;
    isScreenSupported(name: string | null): boolean;
    isSupported(name: string | null): boolean;
    // private loadAll(): Theme;
    loadBackgroundImage(): boolean;
    // private loadComponents(): void;
    // private loadFonts(): void;
    // private loadMetadata(): void;
    onResourceManagerReload(manager: ResourceManager): void;
    // private registerComponent(component: HudComponent): void;
    reload(currentReload: PreparableReloadListener$SharedState, taskExecutor: Executor, preparationBarrier: (param0: Object | null) => CompletableFuture<Object>, reloadExecutor: Executor): CompletableFuture<void>;
    toString(): string;
}