import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { TestEnvironmentDefinition } from '../../../../net/minecraft/gametest/framework/TestEnvironmentDefinition.d.ts'
export class GameTestBatch extends Record {
    // private environment: Holder<TestEnvironmentDefinition<Object>>;
    // private gameTestInfos: E[];
    // private index: number;
    environment(): Holder<TestEnvironmentDefinition<Object>>;
    equals(o: Object | null): boolean;
    gameTestInfos(): E[];
    hashCode(): number;
    index(): number;
    toString(): string;
}