import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GameTestSequence } from '../../../../net/minecraft/gametest/framework/GameTestSequence.d.ts'
export class GameTestSequence$Condition extends Object {
    constructor(null_: GameTestSequence)
    // private triggerTime: number;
    assertTriggeredThisTick(): void;
    trigger(time: number): void;
}