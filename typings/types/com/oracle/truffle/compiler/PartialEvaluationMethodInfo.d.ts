import type { TruffleCompilerRuntime$InlineKind } from '../../../../com/oracle/truffle/compiler/TruffleCompilerRuntime$InlineKind.d.ts'
import type { TruffleCompilerRuntime$LoopExplosionKind } from '../../../../com/oracle/truffle/compiler/TruffleCompilerRuntime$LoopExplosionKind.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PartialEvaluationMethodInfo extends Record {
    // private inlineForPartialEvaluation: TruffleCompilerRuntime$InlineKind;
    // private inlineForTruffleBoundary: TruffleCompilerRuntime$InlineKind;
    // private isInlineable: boolean;
    // private isSpecializationMethod: boolean;
    // private loopExplosion: TruffleCompilerRuntime$LoopExplosionKind;
    equals(o: Object | null): boolean;
    hashCode(): number;
    inlineForPartialEvaluation(): TruffleCompilerRuntime$InlineKind;
    inlineForTruffleBoundary(): TruffleCompilerRuntime$InlineKind;
    isInlineable(): boolean;
    isSpecializationMethod(): boolean;
    loopExplosion(): TruffleCompilerRuntime$LoopExplosionKind;
    toString(): string;
}