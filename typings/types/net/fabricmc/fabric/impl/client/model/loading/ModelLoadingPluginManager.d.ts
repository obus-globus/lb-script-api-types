import type { CompletableFuture } from '../../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModelLoadingPlugin } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ModelLoadingPlugin.d.ts'
import type { ModelLoadingPlugin$Context } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ModelLoadingPlugin$Context.d.ts'
import type { PreparableModelLoadingPlugin } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/PreparableModelLoadingPlugin.d.ts'
import type { PreparableModelLoadingPlugin$DataLoader } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/PreparableModelLoadingPlugin$DataLoader.d.ts'
import type { PreparableModelLoadingPlugin$Holder } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/PreparableModelLoadingPlugin$Holder.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
export class ModelLoadingPluginManager extends Object {
    static PLUGINS_VIEW: (param0: ModelLoadingPlugin$Context) => void[];
    static PREPARABLE_PLUGINS_VIEW: PreparableModelLoadingPlugin$Holder<Object>[];
    static preparePlugins(paramarg0: PreparableReloadListener$SharedState, paramarg1: Executor): CompletableFuture<(param0: ModelLoadingPlugin$Context) => void[]>;
    static registerPlugin(paramarg0: (param0: PreparableReloadListener$SharedState, param1: Executor) => CompletableFuture<Object>, paramarg1: (param0: Object | null, param1: ModelLoadingPlugin$Context) => void): void;
    static registerPlugin(paramarg0: (param0: ModelLoadingPlugin$Context) => void): void;
    private constructor()
}