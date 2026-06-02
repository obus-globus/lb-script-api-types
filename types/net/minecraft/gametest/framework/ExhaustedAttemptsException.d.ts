import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { GameTestInfo } from '../../../../net/minecraft/gametest/framework/GameTestInfo.d.ts'
export class ExhaustedAttemptsException extends Throwable {
    constructor(attempts: number, successes: number, testInfo: GameTestInfo)
}