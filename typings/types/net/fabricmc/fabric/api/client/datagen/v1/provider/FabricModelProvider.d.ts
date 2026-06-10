import type { Comparator } from '../../../../../../../../java/util/Comparator.d.ts'
import type { ToIntFunction } from '../../../../../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { FabricPackOutput } from '../../../../../../../../net/fabricmc/fabric/api/datagen/v1/FabricPackOutput.d.ts'
import type { BlockModelGenerators } from '../../../../../../../../net/minecraft/client/data/models/BlockModelGenerators.d.ts'
import type { ItemModelGenerators } from '../../../../../../../../net/minecraft/client/data/models/ItemModelGenerators.d.ts'
import type { ModelProvider } from '../../../../../../../../net/minecraft/client/data/models/ModelProvider.d.ts'
import type { Logger } from '../../../../../../../../org/slf4j/Logger.d.ts'
export abstract class FabricModelProvider extends ModelProvider {
    static FIXED_ORDER_FIELDS: (param0: string) => number;
    static KEY_COMPARATOR: (param0: Object) => boolean;
    static LOGGER: Logger;
    constructor(arg0: FabricPackOutput)
    generateBlockStateModels(arg0: BlockModelGenerators): void;
    generateItemModels(arg0: ItemModelGenerators): void;
}