import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModelInstance } from '../../../../../net/minecraft/client/data/models/model/ModelInstance.d.ts'
import type { CachedOutput } from '../../../../../net/minecraft/data/CachedOutput.d.ts'
import type { PackOutput$PathProvider } from '../../../../../net/minecraft/data/PackOutput$PathProvider.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class ModelProvider$SimpleModelCollector extends Object implements BiConsumer<Identifier, ModelInstance> {
    private constructor()
    // private models: JavaMap<Identifier, ModelInstance>;
    accept(id: Identifier, contents: ModelInstance): void;
    andThen(arg0: (param0: Identifier, param1: ModelInstance) => void): (param0: Identifier, param1: ModelInstance) => void;
    save(cache: CachedOutput, pathProvider: PackOutput$PathProvider): CompletableFuture<Object>;
}