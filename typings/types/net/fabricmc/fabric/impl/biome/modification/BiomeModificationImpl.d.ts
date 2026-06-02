import type { BiConsumer } from '../../../../../../java/util/function/BiConsumer.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BiomeModificationContext } from '../../../../../../net/fabricmc/fabric/api/biome/v1/BiomeModificationContext.d.ts'
import type { BiomeSelectionContext } from '../../../../../../net/fabricmc/fabric/api/biome/v1/BiomeSelectionContext.d.ts'
import type { ModificationPhase } from '../../../../../../net/fabricmc/fabric/api/biome/v1/ModificationPhase.d.ts'
import type { BiomeModificationImpl$ModifierRecord } from '../../../../../../net/fabricmc/fabric/impl/biome/modification/BiomeModificationImpl$ModifierRecord.d.ts'
import type { RegistryAccess } from '../../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class BiomeModificationImpl extends Object {
    static INSTANCE: BiomeModificationImpl;
    private constructor()
    // private modifiers: BiomeModificationImpl$ModifierRecord[];
    // private modifiersUnsorted: boolean;
    addModifier(arg0: Identifier, arg1: ModificationPhase, arg2: (param0: BiomeSelectionContext) => kotlin.Boolean, arg3: (param0: BiomeSelectionContext, param1: BiomeModificationContext) => void): void;
    addModifier(arg0: Identifier, arg1: ModificationPhase, arg2: (param0: BiomeSelectionContext) => kotlin.Boolean, arg3: (param0: BiomeModificationContext) => void): void;
    changeOrder(arg0: Identifier, arg1: number): void;
    clearModifiers(): void;
    finalizeWorldGen(arg0: RegistryAccess): void;
    // private getSortedModifiers(): BiomeModificationImpl$ModifierRecord[];
}