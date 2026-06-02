import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder$Reference } from '../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { GameTestInstance } from '../../../../net/minecraft/gametest/framework/GameTestInstance.d.ts'
export class FailedTestTracker extends Object {
    static forgetFailedTests(): void;
    static getLastFailedTests(): Stream<Object>;
    static rememberFailedTest(paramtest: Holder$Reference<GameTestInstance>): void;
    constructor()
}