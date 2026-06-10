import type { BiConsumer } from '../../../../../../java/util/function/BiConsumer.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BiomeModificationContext } from '../../../../../../net/fabricmc/fabric/api/biome/v1/BiomeModificationContext.d.ts'
import type { BiomeSelectionContext } from '../../../../../../net/fabricmc/fabric/api/biome/v1/BiomeSelectionContext.d.ts'
import type { ModificationPhase } from '../../../../../../net/fabricmc/fabric/api/biome/v1/ModificationPhase.d.ts'
import type { BiomeModificationContextImpl } from '../../../../../../net/fabricmc/fabric/impl/biome/modification/BiomeModificationContextImpl.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class BiomeModificationImpl$ModifierRecord extends Object {
    constructor(arg0: ModificationPhase, arg1: Identifier, arg2: (param0: BiomeSelectionContext) => boolean, arg3: (param0: BiomeSelectionContext, param1: BiomeModificationContext) => void)
    constructor(arg0: ModificationPhase, arg1: Identifier, arg2: (param0: BiomeSelectionContext) => boolean, arg3: (param0: BiomeModificationContext) => void)
    // private contextSensitiveModifier: (param0: BiomeSelectionContext, param1: BiomeModificationContext) => void;
    // private id: Identifier;
    // private modifier: (param0: BiomeModificationContext) => void;
    readonly order: number;
    // private phase: ModificationPhase;
    // private selector: (param0: BiomeSelectionContext) => boolean;
    apply(arg0: BiomeSelectionContext, arg1: BiomeModificationContextImpl): void;
    setOrder(arg0: number): void;
    toString(): string;
}