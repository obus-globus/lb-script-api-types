import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Method } from '../../../../../java/lang/reflect/Method.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GameTest } from '../../../../../net/fabricmc/fabric/api/gametest/v1/GameTest.d.ts'
import type { EntrypointContainer } from '../../../../../net/fabricmc/loader/api/entrypoint/EntrypointContainer.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { GameTestHelper } from '../../../../../net/minecraft/gametest/framework/GameTestHelper.d.ts'
import type { GameTestInstance } from '../../../../../net/minecraft/gametest/framework/GameTestInstance.d.ts'
import type { TestData } from '../../../../../net/minecraft/gametest/framework/TestData.d.ts'
import type { TestEnvironmentDefinition } from '../../../../../net/minecraft/gametest/framework/TestEnvironmentDefinition.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class TestAnnotationLocator$TestMethod extends Record {
    constructor(method: Method, gameTest: GameTest, entrypoint: EntrypointContainer<Object>)
    // private entrypoint: EntrypointContainer<Object>;
    // private gameTest: GameTest;
    // private method: Method;
    entrypoint(): EntrypointContainer<Object>;
    equals(arg0: Object | null): boolean;
    gameTest(): GameTest;
    hashCode(): number;
    identifier(): Identifier;
    method(): Method;
    testData(arg0: TestEnvironmentDefinition<Object>[]): TestData<Holder<TestEnvironmentDefinition<Object>>>;
    testFunction(): (param0: GameTestHelper) => void;
    testInstance(arg0: TestEnvironmentDefinition<Object>[]): GameTestInstance;
    toString(): string;
}