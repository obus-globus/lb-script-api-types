import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PreparableModelLoadingPlugin } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/PreparableModelLoadingPlugin.d.ts'
import type { PreparableModelLoadingPlugin$DataLoader } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/PreparableModelLoadingPlugin$DataLoader.d.ts'
import type { PreparableModelLoadingPlugin$Holder } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/PreparableModelLoadingPlugin$Holder.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
export class ModelLoadingPluginManager$HolderImpl<T extends Object | number | string | boolean> extends Record implements PreparableModelLoadingPlugin$Holder<T> {
    private constructor(loader: (param0: T, param1: PreparableReloadListener$SharedState) => java.util.concurrent.CompletableFuture<unknown>, plugin: (param0: T, param1: Object | null) => void)
    // private loader: (param0: T, param1: PreparableReloadListener$SharedState) => java.util.concurrent.CompletableFuture<unknown>;
    // private plugin: (param0: T, param1: Object | null) => void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    loader(): (param0: T, param1: PreparableReloadListener$SharedState) => java.util.concurrent.CompletableFuture<unknown>;
    plugin(): (param0: T, param1: Object | null) => void;
    toString(): string;
}