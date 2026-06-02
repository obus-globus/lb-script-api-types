import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { PackOutput } from '../../../../net/minecraft/data/PackOutput.d.ts'
import type { KeyTagProvider } from '../../../../net/minecraft/data/tags/KeyTagProvider.d.ts'
import type { Dialog } from '../../../../net/minecraft/server/dialog/Dialog.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class DialogTagsProvider extends KeyTagProvider<Dialog> {
    static FIXED_ORDER_FIELDS: (param0: string) => kotlin.Int;
    static KEY_COMPARATOR: (param0: string) => kotlin.Boolean;
    static LOGGER: Logger;
    constructor(output: PackOutput, lookupProvider: CompletableFuture<HolderLookup$Provider>)
    addTags(registries: HolderLookup$Provider): void;
}