import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GameTestInfo } from '../../../../net/minecraft/gametest/framework/GameTestInfo.d.ts'
import type { GameTestListener } from '../../../../net/minecraft/gametest/framework/GameTestListener.d.ts'
import type { GameTestRunner } from '../../../../net/minecraft/gametest/framework/GameTestRunner.d.ts'
export class ReportGameListener extends Object implements GameTestListener {
    static reportPassed(paramtestInfo: GameTestInfo, paramtext: string): void;
    constructor()
    // private attempts: number;
    // private successes: number;
    // private handleRetry(testInfo: GameTestInfo, runner: GameTestRunner, passed: boolean): void;
    testAddedForRerun(original: GameTestInfo, copy: GameTestInfo, runner: GameTestRunner): void;
    testFailed(testInfo: GameTestInfo, runner: GameTestRunner): void;
    testPassed(testInfo: GameTestInfo, runner: GameTestRunner): void;
    testStructureLoaded(testInfo: GameTestInfo): void;
}