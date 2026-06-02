import type { TruffleString } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Encodings$Encoding } from '../../../../../../../com/oracle/truffle/regex/tregex/string/Encodings$Encoding.d.ts'
import type { JsonArray } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonArray.d.ts'
import type { JsonConvertible } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonConvertible.d.ts'
import type { JsonValue } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TRegexDFAExecutorDebugRecorder$Recording extends Object implements JsonConvertible {
    private constructor(input: TruffleString, encoding: Encodings$Encoding, fromIndex: number, initialIndex: number, maxIndex: number, forward: boolean)
    // private cgPartialTransitions: number[];
    // private encoding: Encodings$Encoding;
    // private forward: boolean;
    // private fromIndex: number;
    readonly initialIndex: number;
    // private input: TruffleString;
    // private maxIndex: number;
    // private transitions: number[];
    // private appendJsonTransition(i: number, jsonTransitions: JsonArray): void;
    recordCGPartialTransition(currentIndex: number, cgPartialTransitionIndex: number): void;
    recordTransition(currentIndex: number, transitionID: number): void;
    setInitialIndex(initialIndex: number): void;
    // private toCodePointIndex(currentIndex: number): number;
    toJson(): JsonValue;
}