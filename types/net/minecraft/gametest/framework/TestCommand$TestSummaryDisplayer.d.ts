import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { GameTestInfo } from '../../../../net/minecraft/gametest/framework/GameTestInfo.d.ts'
import type { GameTestListener } from '../../../../net/minecraft/gametest/framework/GameTestListener.d.ts'
import type { GameTestRunner } from '../../../../net/minecraft/gametest/framework/GameTestRunner.d.ts'
import type { MultipleTestTracker } from '../../../../net/minecraft/gametest/framework/MultipleTestTracker.d.ts'
export class TestCommand$TestSummaryDisplayer extends Record implements GameTestListener {
    constructor(source: CommandSourceStack, tracker: MultipleTestTracker)
    // private source: CommandSourceStack;
    // private tracker: MultipleTestTracker;
    equals(o: Object | null): boolean;
    hashCode(): number;
    // private showTestSummaryIfAllDone(): void;
    source(): CommandSourceStack;
    testAddedForRerun(original: GameTestInfo, copy: GameTestInfo, runner: GameTestRunner): void;
    testFailed(testInfo: GameTestInfo, runner: GameTestRunner): void;
    testPassed(testInfo: GameTestInfo, runner: GameTestRunner): void;
    testStructureLoaded(testInfo: GameTestInfo): void;
    toString(): string;
    tracker(): MultipleTestTracker;
}