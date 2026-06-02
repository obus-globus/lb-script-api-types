import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TestEnvironmentDefinition } from '../../../../net/minecraft/gametest/framework/TestEnvironmentDefinition.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
export class TestEnvironmentDefinition$Activation<T extends Object | number | string | boolean> extends Object {
    private constructor(value: T, definition: TestEnvironmentDefinition<T>, level: ServerLevel)
    // private definition: TestEnvironmentDefinition<T>;
    // private level: ServerLevel;
    // private value: T;
    teardown(): void;
}