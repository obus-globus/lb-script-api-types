import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GameTestInfo } from '../../../../net/minecraft/gametest/framework/GameTestInfo.d.ts'
import type { TestReporter } from '../../../../net/minecraft/gametest/framework/TestReporter.d.ts'
export class GlobalTestReporter extends Object {
    static finish(): void;
    static onTestFailed(paramtestInfo: GameTestInfo): void;
    static onTestSuccess(paramtestInfo: GameTestInfo): void;
    static replaceWith(paramtestReporter: TestReporter): void;
    constructor()
}