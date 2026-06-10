import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GameTestInfo } from '../../../../net/minecraft/gametest/framework/GameTestInfo.d.ts'
import type { GameTestRunner } from '../../../../net/minecraft/gametest/framework/GameTestRunner.d.ts'
import type { GameTestTicker$State } from '../../../../net/minecraft/gametest/framework/GameTestTicker$State.d.ts'
export class GameTestTicker extends Object {
    static SINGLETON: GameTestTicker;
    private constructor()
    readonly runner: GameTestRunner;
    // private state: GameTestTicker$State;
    // private testInfos: GameTestInfo[];
    add(testInfo: GameTestInfo): void;
    clear(): void;
    setRunner(runner: GameTestRunner): void;
    tick(): void;
}