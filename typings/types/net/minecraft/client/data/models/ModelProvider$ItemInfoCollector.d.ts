import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricPackOutput } from '../../../../../net/fabricmc/fabric/api/datagen/v1/FabricPackOutput.d.ts'
import type { FabricItemAssetDefinitions } from '../../../../../net/fabricmc/fabric/impl/datagen/client/FabricItemAssetDefinitions.d.ts'
import type { ItemModelOutput } from '../../../../../net/minecraft/client/data/models/ItemModelOutput.d.ts'
import type { ClientItem } from '../../../../../net/minecraft/client/renderer/item/ClientItem.d.ts'
import type { ClientItem$Properties } from '../../../../../net/minecraft/client/renderer/item/ClientItem$Properties.d.ts'
import type { ItemModel$Unbaked } from '../../../../../net/minecraft/client/renderer/item/ItemModel$Unbaked.d.ts'
import type { CachedOutput } from '../../../../../net/minecraft/data/CachedOutput.d.ts'
import type { PackOutput$PathProvider } from '../../../../../net/minecraft/data/PackOutput$PathProvider.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
export class ModelProvider$ItemInfoCollector extends Object implements FabricItemAssetDefinitions, ItemModelOutput {
    private constructor()
    // private copies: Map<Item, Item>;
    readonly fabricPackOutput: FabricPackOutput;
    // private itemInfos: Map<Item, ClientItem>;
    // private processedBlocks: (Object | null)[];
    accept(item: Item, generator: ItemModel$Unbaked): void;
    accept(item: Item, generator: ItemModel$Unbaked): void;
    accept(item: Item, model: ItemModel$Unbaked, properties: ClientItem$Properties): void;
    copy(donor: Item, acceptor: Item): void;
    fabric_setProcessedBlocks(arg0: (Object | null)[]): void;
    finalizeAndValidate(): void;
    // private register(item: Item, itemInfo: ClientItem): void;
    save(cache: CachedOutput, pathProvider: PackOutput$PathProvider): CompletableFuture<Object>;
    setFabricPackOutput(arg0: FabricPackOutput): void;
}