import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GameTestInfo } from '../../../../net/minecraft/gametest/framework/GameTestInfo.d.ts'
import type { TestReporter } from '../../../../net/minecraft/gametest/framework/TestReporter.d.ts'
export class LogTestReporter extends Object implements TestReporter {
    constructor()
    finish(): void;
    onTestFailed(testInfo: GameTestInfo): void;
    onTestSuccess(testInfo: GameTestInfo): void;
}