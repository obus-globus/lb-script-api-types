import type { CompilationBuffer } from '../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { CharMatcher } from '../../../../../com/oracle/truffle/regex/tregex/matchers/CharMatcher.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharMatchers extends Object {
    static createMatcher(paramcps: (Object | null)[], paramcompilationBuffer: CompilationBuffer): CharMatcher;
    static rangesToString(paramranges: number[]): string;
    static rangesToString(paramranges: number[], paramnumeric: boolean): string;
    constructor()
}