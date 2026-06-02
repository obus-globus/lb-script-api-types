import type { TruffleString$Encoding } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { CompilationBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { SequentialMatchers } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/SequentialMatchers.d.ts'
import type { SequentialMatchers$Builder } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/SequentialMatchers$Builder.d.ts'
import type { AbstractStringBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/string/AbstractStringBuffer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class Encodings$Encoding extends Object {
    constructor()
    createMatcher(matchersBuilder: SequentialMatchers$Builder, i: number, cps: (Object | null)[], compilationBuffer: CompilationBuffer): void;
    createMatchersBuilder(): SequentialMatchers$Builder;
    createStringBuffer(capacity: number): AbstractStringBuffer;
    getEncodedSize(codepoint: number): number;
    getFullSet(): (Object | null)[];
    getMaxValue(): number;
    getMinValue(): number;
    getName(): string;
    getNumberOfCodeRanges(): number;
    getStride(): number;
    getTStringEncoding(): TruffleString$Encoding;
    isFixedCodePointWidth(set: (Object | null)[]): boolean;
    isUnicode(): boolean;
    toMatchers(matchersBuilder: SequentialMatchers$Builder): SequentialMatchers;
    toString(): string;
}