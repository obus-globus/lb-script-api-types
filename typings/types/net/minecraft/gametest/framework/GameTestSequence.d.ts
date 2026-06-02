import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GameTestEvent } from '../../../../net/minecraft/gametest/framework/GameTestEvent.d.ts'
import type { GameTestException } from '../../../../net/minecraft/gametest/framework/GameTestException.d.ts'
import type { GameTestInfo } from '../../../../net/minecraft/gametest/framework/GameTestInfo.d.ts'
import type { GameTestSequence$Condition } from '../../../../net/minecraft/gametest/framework/GameTestSequence$Condition.d.ts'
export class GameTestSequence extends Object {
    constructor(parent: GameTestInfo)
    // private events: GameTestEvent[];
    // private lastTick: number;
    // private parent: GameTestInfo;
    // private executeWithoutFail(assertion: () => void): void;
    thenExecute(assertion: () => void): GameTestSequence;
    thenExecuteAfter(delta: number, after: () => void): GameTestSequence;
    thenExecuteFor(delta: number, check: () => void): GameTestSequence;
    thenFail(e: () => GameTestException): void;
    thenIdle(delta: number): GameTestSequence;
    thenSucceed(): void;
    thenTrigger(): GameTestSequence$Condition;
    thenWaitAtLeast(minimumDelay: number, assertion: () => void): GameTestSequence;
    thenWaitUntil(assertion: () => void): GameTestSequence;
    thenWaitUntil(expectedDelay: number, assertion: () => void): GameTestSequence;
    // private tick(tick: number): void;
    tickAndContinue(tick: number): void;
    tickAndFailIfNotComplete(tick: number): void;
}