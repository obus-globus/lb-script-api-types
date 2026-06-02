import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GameTestHelper } from '../../../../net/minecraft/gametest/framework/GameTestHelper.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
export abstract class TestFunctionLoader extends Object {
    static registerLoader(paramloader: TestFunctionLoader): void;
    static runLoaders(paramregistry: (Object | null)[]): void;
    constructor()
    load(register: (param0: ResourceKey<(param0: GameTestHelper) => void>, param1: (param0: GameTestHelper) => void) => void): void;
}