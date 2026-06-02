import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GameTestInfo } from '../../../../net/minecraft/gametest/framework/GameTestInfo.d.ts'
import type { GameTestRunner } from '../../../../net/minecraft/gametest/framework/GameTestRunner.d.ts'
export interface GameTestListener extends Object{
    testAddedForRerun(original: GameTestInfo, copy: GameTestInfo, runner: GameTestRunner): void;
    testFailed(testInfo: GameTestInfo, runner: GameTestRunner): void;
    testPassed(testInfo: GameTestInfo, runner: GameTestRunner): void;
    testStructureLoaded(testInfo: GameTestInfo): void;
}