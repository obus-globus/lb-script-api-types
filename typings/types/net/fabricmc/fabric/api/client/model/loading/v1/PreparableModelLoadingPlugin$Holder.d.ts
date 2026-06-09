import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PreparableModelLoadingPlugin } from '../../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/PreparableModelLoadingPlugin.d.ts'
import type { PreparableModelLoadingPlugin$DataLoader } from '../../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/PreparableModelLoadingPlugin$DataLoader.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
export interface PreparableModelLoadingPlugin$Holder<T extends Object | number | string | boolean> extends Object {
    loader(): (param0: T, param1: PreparableReloadListener$SharedState) => java.util.concurrent.CompletableFuture<unknown>;
    plugin(): (param0: T, param1: Object | null) => void;
}