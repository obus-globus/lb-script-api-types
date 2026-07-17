import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricResourceReloader } from '../../../../../net/fabricmc/fabric/impl/resource/FabricResourceReloader.d.ts'
import type { ClientLanguage } from '../../../../../net/minecraft/client/resources/language/ClientLanguage.d.ts'
import type { LanguageInfo } from '../../../../../net/minecraft/client/resources/language/LanguageInfo.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PreparableReloadListener$PreparationBarrier } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$PreparationBarrier.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
import type { ResourceManager } from '../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { ResourceManagerReloadListener } from '../../../../../net/minecraft/server/packs/resources/ResourceManagerReloadListener.d.ts'
export class LanguageManager extends Object implements FabricResourceReloader, ResourceManagerReloadListener {
    constructor(languageCode: string, reloadCallback: (param0: ClientLanguage) => void)
    // private currentCode: string;
    // private fabric$id: Identifier;
    readonly languages: JavaMap<string, LanguageInfo>;
    // private reloadCallback: (param0: ClientLanguage) => void;
    fabric$getId(): Identifier;
    getLanguage(code: string): LanguageInfo;
    getLanguages(): JavaMap<string, LanguageInfo>;
    getName(): string;
    getSelected(): string;
    onResourceManagerReload(resourceManager: ResourceManager): void;
    reload(currentReload: PreparableReloadListener$SharedState, taskExecutor: Executor, preparationBarrier: (param0: Object | null) => CompletableFuture<Object>, reloadExecutor: Executor): CompletableFuture<void>;
    setSelected(code: string): void;
}