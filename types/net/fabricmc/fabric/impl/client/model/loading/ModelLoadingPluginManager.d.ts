import type { CompletableFuture } from '../../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModelLoadingPlugin } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ModelLoadingPlugin.d.ts'
import type { ModelLoadingPlugin$Context } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ModelLoadingPlugin$Context.d.ts'
import type { PreparableModelLoadingPlugin } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/PreparableModelLoadingPlugin.d.ts'
import type { PreparableModelLoadingPlugin$DataLoader } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/PreparableModelLoadingPlugin$DataLoader.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
export class ModelLoadingPluginManager extends Object {
    static PLUGINS_VIEW: (param0: ModelLoadingPlugin$Context) => void[];
    static PREPARABLE_PLUGINS_VIEW: (Object | null)[];
    static preparePlugins(paramarg0: PreparableReloadListener$SharedState, paramarg1: Executor): CompletableFuture<Object>;
    static registerPlugin(paramarg0: (param0: Object | null, param1: PreparableReloadListener$SharedState) => java.util.concurrent.CompletableFuture<unknown>, paramarg1: (param0: Object | null, param1: Object | null) => void): void;
    static registerPlugin(paramarg0: (param0: ModelLoadingPlugin$Context) => void): void;
    private constructor()
}