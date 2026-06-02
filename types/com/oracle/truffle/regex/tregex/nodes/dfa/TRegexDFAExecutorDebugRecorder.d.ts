import type { RegexOptions } from '../../../../../../../com/oracle/truffle/regex/RegexOptions.d.ts'
import type { DFAGenerator } from '../../../../../../../com/oracle/truffle/regex/tregex/dfa/DFAGenerator.d.ts'
import type { TRegexDFAExecutorDebugRecorder$Recording } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorDebugRecorder$Recording.d.ts'
import type { TRegexDFAExecutorLocals } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorLocals.d.ts'
import type { JsonConvertible } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonConvertible.d.ts'
import type { JsonValue } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TRegexDFAExecutorDebugRecorder extends Object implements JsonConvertible {
    static create(paramoptions: RegexOptions, paramdfaGenerator: DFAGenerator): TRegexDFAExecutorDebugRecorder;
    private constructor(dfa: DFAGenerator)
    // private dfa: DFAGenerator;
    // private recordings: TRegexDFAExecutorDebugRecorder$Recording[];
    // private curRecording(): TRegexDFAExecutorDebugRecorder$Recording;
    finishRecording(): void;
    recordCGPartialTransition(currentIndex: number, cgPartialTransitionIndex: number): void;
    recordTransition(currentIndex: number, stateNodeID: number, transitionIndex: number): void;
    setInitialIndex(initialIndex: number): void;
    startRecording(locals: TRegexDFAExecutorLocals): void;
    toJson(): JsonValue;
}