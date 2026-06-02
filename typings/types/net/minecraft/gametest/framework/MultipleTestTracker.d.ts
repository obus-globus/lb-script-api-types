import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GameTestInfo } from '../../../../net/minecraft/gametest/framework/GameTestInfo.d.ts'
import type { GameTestListener } from '../../../../net/minecraft/gametest/framework/GameTestListener.d.ts'
export class MultipleTestTracker extends Object {
    constructor()
    constructor(tests: E[])
    // private listeners: E[];
    // private tests: E[];
    addFailureListener(listener: (param0: GameTestInfo) => void): void;
    addListener(listener: GameTestListener): void;
    addTestToTrack(testInfo: GameTestInfo): void;
    getDoneCount(): number;
    getFailedOptional(): E[];
    getFailedOptionalCount(): number;
    getFailedRequired(): E[];
    getFailedRequiredCount(): number;
    getProgressBar(): string;
    getTotalCount(): number;
    hasFailedOptional(): boolean;
    hasFailedRequired(): boolean;
    isDone(): boolean;
    remove(testInfo: GameTestInfo): void;
    toString(): string;
}