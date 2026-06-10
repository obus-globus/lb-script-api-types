import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { GameTestHelper } from '../../../../net/minecraft/gametest/framework/GameTestHelper.d.ts'
import type { TestFunctionLoader } from '../../../../net/minecraft/gametest/framework/TestFunctionLoader.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
export class BuiltinTestFunctions extends TestFunctionLoader {
    static ALWAYS_PASS: ResourceKey<(param0: GameTestHelper) => void>;
    static ALWAYS_PASS_INSTANCE: (param0: GameTestHelper) => void;
    static bootstrap(paramregistry: (param0: GameTestHelper) => void[]): (param0: GameTestHelper) => void;
    static registerLoader(paramloader: TestFunctionLoader): void;
    static runLoaders(paramregistry: (param0: GameTestHelper) => void[]): void;
    constructor()
    load(register: (param0: ResourceKey<(param0: GameTestHelper) => void>, param1: (param0: GameTestHelper) => void) => void): void;
}