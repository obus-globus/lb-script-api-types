import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { GameTestInfo } from '../../../../net/minecraft/gametest/framework/GameTestInfo.d.ts'
import type { TestEnvironmentDefinition } from '../../../../net/minecraft/gametest/framework/TestEnvironmentDefinition.d.ts'
export class GameTestBatch extends Record {
    constructor(index: number, gameTestInfos: GameTestInfo[], environment: Holder<TestEnvironmentDefinition<Object>>)
    // private environment: Holder<TestEnvironmentDefinition<Object>>;
    // private gameTestInfos: GameTestInfo[];
    // private index: number;
    environment(): Holder<TestEnvironmentDefinition<Object>>;
    equals(o: Object | null): boolean;
    gameTestInfos(): GameTestInfo[];
    hashCode(): number;
    index(): number;
    toString(): string;
}