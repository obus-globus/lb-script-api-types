import type { GlyphProvider } from '../../../../../com/mojang/blaze3d/font/GlyphProvider.d.ts'
import type { GlyphProvider$Conditional } from '../../../../../com/mojang/blaze3d/font/GlyphProvider$Conditional.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricResourceReloader } from '../../../../../net/fabricmc/fabric/impl/resource/FabricResourceReloader.d.ts'
import type { Options } from '../../../../../net/minecraft/client/Options.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GlyphSource } from '../../../../../net/minecraft/client/gui/GlyphSource.d.ts'
import type { AtlasGlyphProvider } from '../../../../../net/minecraft/client/gui/font/AtlasGlyphProvider.d.ts'
import type { FontManager$BuilderId } from '../../../../../net/minecraft/client/gui/font/FontManager$BuilderId.d.ts'
import type { FontManager$CachedFontProvider } from '../../../../../net/minecraft/client/gui/font/FontManager$CachedFontProvider.d.ts'
import type { FontManager$Preparation } from '../../../../../net/minecraft/client/gui/font/FontManager$Preparation.d.ts'
import type { FontManager$UnresolvedBuilderBundle } from '../../../../../net/minecraft/client/gui/font/FontManager$UnresolvedBuilderBundle.d.ts'
import type { FontOption } from '../../../../../net/minecraft/client/gui/font/FontOption.d.ts'
import type { FontSet } from '../../../../../net/minecraft/client/gui/font/FontSet.d.ts'
import type { PlayerGlyphProvider } from '../../../../../net/minecraft/client/gui/font/PlayerGlyphProvider.d.ts'
import type { GlyphProviderDefinition$Loader } from '../../../../../net/minecraft/client/gui/font/providers/GlyphProviderDefinition$Loader.d.ts'
import type { PlayerSkinRenderCache } from '../../../../../net/minecraft/client/renderer/PlayerSkinRenderCache.d.ts'
import type { TextureManager } from '../../../../../net/minecraft/client/renderer/texture/TextureManager.d.ts'
import type { AtlasManager } from '../../../../../net/minecraft/client/resources/model/sprite/AtlasManager.d.ts'
import type { FontDescription$AtlasSprite } from '../../../../../net/minecraft/network/chat/FontDescription$AtlasSprite.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PreparableReloadListener } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener.d.ts'
import type { PreparableReloadListener$PreparationBarrier } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$PreparationBarrier.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
import type { ResourceManager } from '../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { ProfilerFiller } from '../../../../../net/minecraft/util/profiling/ProfilerFiller.d.ts'
export class FontManager extends Object implements AutoCloseable, FabricResourceReloader, PreparableReloadListener {
    static MISSING_FONT: Identifier;
    constructor(textureManager: TextureManager, atlasManager: AtlasManager, playerSkinRenderCache: PlayerSkinRenderCache)
    // private anyGlyphs: FontManager$CachedFontProvider;
    // private atlasManager: AtlasManager;
    // private atlasProviders: Map<Identifier, AtlasGlyphProvider>;
    // private fabric$id: Identifier;
    fontSets: Map<Identifier, FontSet>;
    // private missingFontSet: FontSet;
    // private nonFishyGlyphs: FontManager$CachedFontProvider;
    // private playerProvider: PlayerGlyphProvider;
    // private providersToClose: GlyphProvider[];
    // private textureManager: TextureManager;
    // private apply(preparations: FontManager$Preparation, profiler: ProfilerFiller): void;
    close(): void;
    createFont(): Font;
    createFontFilterFishy(): Font;
    // private createFontSet(id: Identifier, providers: GlyphProvider$Conditional[], options: FontOption[]): FontSet;
    fabric$getId(): Identifier;
    // private finalizeProviderLoading(list: GlyphProvider$Conditional[], fallback: GlyphProvider$Conditional): void;
    // private getFontSetRaw(id: Identifier): FontSet;
    getName(): string;
    // private getSpriteFont(contents: FontDescription$AtlasSprite): GlyphSource;
    // private prepare(manager: ResourceManager, executor: Executor): CompletableFuture<FontManager$Preparation>;
    prepareSharedState(currentReload: PreparableReloadListener$SharedState): void;
    reload(currentReload: PreparableReloadListener$SharedState, taskExecutor: Executor, preparationBarrier: (param0: Object | null) => CompletableFuture<Object>, reloadExecutor: Executor): CompletableFuture<void>;
    // private resolveProviders(unresolvedProviders: FontManager$UnresolvedBuilderBundle[]): Map<Identifier, GlyphProvider$Conditional[]>;
    // private safeLoad(id: FontManager$BuilderId, provider: GlyphProviderDefinition$Loader, manager: ResourceManager, executor: Executor): CompletableFuture<Optional<GlyphProvider>>;
    updateOptions(options: Options): void;
}