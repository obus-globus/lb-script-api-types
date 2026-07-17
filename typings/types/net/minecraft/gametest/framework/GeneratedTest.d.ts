import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GameTestHelper } from '../../../../net/minecraft/gametest/framework/GameTestHelper.d.ts'
import type { TestData } from '../../../../net/minecraft/gametest/framework/TestData.d.ts'
import type { TestEnvironmentDefinition } from '../../../../net/minecraft/gametest/framework/TestEnvironmentDefinition.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
export class GeneratedTest extends Record {
    constructor(tests: JavaMap<Identifier, TestData<ResourceKey<TestEnvironmentDefinition<Object>>>>, functionId: Identifier, function_: (param0: GameTestHelper) => void)
    constructor(tests: JavaMap<Identifier, TestData<ResourceKey<TestEnvironmentDefinition<Object>>>>, functionKey: ResourceKey<(param0: GameTestHelper) => void>, function_: (param0: GameTestHelper) => void)
    constructor(id: Identifier, testData: TestData<ResourceKey<TestEnvironmentDefinition<Object>>>, function_: (param0: GameTestHelper) => void)
    // private function: (param0: GameTestHelper) => void;
    // private functionKey: ResourceKey<(param0: GameTestHelper) => void>;
    // private tests: JavaMap<Identifier, TestData<ResourceKey<TestEnvironmentDefinition<Object>>>>;
    equals(o: Object | null): boolean;
    function(): (param0: GameTestHelper) => void;
    functionKey(): ResourceKey<(param0: GameTestHelper) => void>;
    hashCode(): number;
    tests(): JavaMap<Identifier, TestData<ResourceKey<TestEnvironmentDefinition<Object>>>>;
    toString(): string;
}