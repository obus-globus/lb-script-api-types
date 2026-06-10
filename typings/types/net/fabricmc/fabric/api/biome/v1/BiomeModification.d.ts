import type { BiConsumer } from '../../../../../../java/util/function/BiConsumer.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BiomeModificationContext } from '../../../../../../net/fabricmc/fabric/api/biome/v1/BiomeModificationContext.d.ts'
import type { BiomeSelectionContext } from '../../../../../../net/fabricmc/fabric/api/biome/v1/BiomeSelectionContext.d.ts'
import type { ModificationPhase } from '../../../../../../net/fabricmc/fabric/api/biome/v1/ModificationPhase.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class BiomeModification extends Object {
    constructor(arg0: Identifier)
    // private id: Identifier;
    add(arg0: ModificationPhase, arg1: (param0: BiomeSelectionContext) => boolean, arg2: (param0: BiomeSelectionContext, param1: BiomeModificationContext) => void): BiomeModification;
    add(arg0: ModificationPhase, arg1: (param0: BiomeSelectionContext) => boolean, arg2: (param0: BiomeModificationContext) => void): BiomeModification;
}