import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricPackOutput } from '../../../../../net/fabricmc/fabric/api/datagen/v1/FabricPackOutput.d.ts'
import type { FabricModelProviderDefinitions } from '../../../../../net/fabricmc/fabric/impl/datagen/client/FabricModelProviderDefinitions.d.ts'
import type { BlockModelDefinitionGenerator } from '../../../../../net/minecraft/client/data/models/blockstates/BlockModelDefinitionGenerator.d.ts'
import type { CachedOutput } from '../../../../../net/minecraft/data/CachedOutput.d.ts'
import type { PackOutput$PathProvider } from '../../../../../net/minecraft/data/PackOutput$PathProvider.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
export class ModelProvider$BlockStateGeneratorCollector extends Object implements Consumer<BlockModelDefinitionGenerator>, FabricModelProviderDefinitions {
    private constructor()
    readonly fabricPackOutput: FabricPackOutput;
    generators: JavaMap<Block, BlockModelDefinitionGenerator>;
    accept(generator: BlockModelDefinitionGenerator): void;
    andThen(arg0: (param0: BlockModelDefinitionGenerator) => void): (param0: BlockModelDefinitionGenerator) => void;
    save(cache: CachedOutput, pathProvider: PackOutput$PathProvider): CompletableFuture<Object>;
    setFabricPackOutput(arg0: FabricPackOutput): void;
    validate(): void;
}