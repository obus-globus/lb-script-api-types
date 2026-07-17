import type { TruffleString$Encoding } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { CompilationBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { SequentialMatchers } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/SequentialMatchers.d.ts'
import type { SequentialMatchers$Builder } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/SequentialMatchers$Builder.d.ts'
import type { AbstractStringBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/string/AbstractStringBuffer.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Encoding extends Enum<Encoding> {
    static ALL_NAMES: string[];
    static ASCII: Encoding;
    static BYTES: Encoding;
    static LATIN_1: Encoding;
    static UTF_16: Encoding;
    static UTF_16BE: Encoding;
    static UTF_16_RAW: Encoding;
    static UTF_32: Encoding;
    static UTF_32BE: Encoding;
    static UTF_8: Encoding;
    static getEncoding(paramname: string): Encoding;
    static getMinValue(): number;
    static isHighSurrogate(paramc: number): boolean;
    static isHighSurrogate(paramc: number, paramforward: boolean): boolean;
    static isLowSurrogate(paramc: number): boolean;
    static isLowSurrogate(paramc: number, paramforward: boolean): boolean;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Encoding;
    static values(): Encoding[];
    private constructor(tsEncoding: TruffleString$Encoding)
    // private tsEncoding: TruffleString$Encoding;
    createMatcher(matchersBuilder: SequentialMatchers$Builder, i: number, cps: (Object | null)[], compilationBuffer: CompilationBuffer): void;
    createMatchersBuilder(): SequentialMatchers$Builder;
    createStringBuffer(capacity: number): AbstractStringBuffer;
    getEncodedSize(codepoint: number): number;
    getFullSet(): (Object | null)[];
    getMaxValue(): number;
    getName(): string;
    // private getNumberOfCodeRanges(): number;
    getStride(): number;
    getTStringEncoding(): TruffleString$Encoding;
    isFixedCodePointWidth(set: (Object | null)[]): boolean;
    isUTF16(): boolean;
    isUTF32(): boolean;
    isUnicode(): boolean;
    toMatchers(mb: SequentialMatchers$Builder): SequentialMatchers;
    toString(): string;
    name(): "UTF_8" | "UTF_16" | "UTF_16BE" | "UTF_16_RAW" | "UTF_32" | "UTF_32BE" | "LATIN_1" | "BYTES" | "ASCII";
}