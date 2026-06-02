import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { GameTestBatch } from '../../../../net/minecraft/gametest/framework/GameTestBatch.d.ts'
import type { GameTestBatchListener } from '../../../../net/minecraft/gametest/framework/GameTestBatchListener.d.ts'
export class TestCommand$TestBatchSummaryDisplayer extends Record implements GameTestBatchListener {
    private constructor(source: CommandSourceStack)
    // private source: CommandSourceStack;
    equals(o: Object | null): boolean;
    hashCode(): number;
    source(): CommandSourceStack;
    testBatchFinished(batch: GameTestBatch): void;
    testBatchStarting(batch: GameTestBatch): void;
    toString(): string;
}