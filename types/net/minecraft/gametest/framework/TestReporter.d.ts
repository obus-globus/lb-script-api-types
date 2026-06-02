import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GameTestInfo } from '../../../../net/minecraft/gametest/framework/GameTestInfo.d.ts'
export interface TestReporter extends Object{
    finish(): void;
    onTestFailed(testInfo: GameTestInfo): void;
    onTestSuccess(testInfo: GameTestInfo): void;
}