import type { Counter$ThreadSafeCounter } from '../../../../com/oracle/truffle/regex/tregex/parser/Counter$ThreadSafeCounter.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RegexProfile extends Object {
    constructor()
    // private avgMatchLength: number;
    // private avgMatchedPortionOfSearchSpace: number;
    // private calls: Counter$ThreadSafeCounter;
    // private captureGroupAccesses: Counter$ThreadSafeCounter;
    // private matches: Counter$ThreadSafeCounter;
    // private processedCharacters: Counter$ThreadSafeCounter;
    atEvaluationTripPoint(): boolean;
    // private cgAccessRatio(): number;
    incCalls(): void;
    incMatches(): void;
    incProcessedCharacters(numberOfCharacters: number): void;
    // private matchRatio(): number;
    profileCaptureGroupAccess(matchLength: number, numberOfCharsTraversed: number): void;
    resetCalls(): void;
    shouldGenerateDFA(inputLength: number): boolean;
    shouldUseEagerMatching(): boolean;
    toString(): string;
}