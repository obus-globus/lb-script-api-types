import type { CompilationBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { RegexASTBuilder } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexASTBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class OracleDBCharClassTrieNode extends Object {
    static createTreeRoot(): OracleDBCharClassTrieNode;
    private constructor(codepoints: (Object | null)[], isEndOfString: boolean)
    // private children: OracleDBCharClassTrieNode[];
    // private codepoints: (Object | null)[];
    // private isEndOfString: boolean;
    clear(): void;
    // private copySubtree(): OracleDBCharClassTrieNode;
    generateAST(astBuilder: RegexASTBuilder, negate: boolean): void;
    // private generateASTInner(astBuilder: RegexASTBuilder, negate: boolean): void;
    getOrAddChildren(cps: (Object | null)[], endOfString: boolean, compilationBuffer: CompilationBuffer): OracleDBCharClassTrieNode[];
    isEndOfString(): boolean;
    // private needsGroupWrapper(negate: boolean): boolean;
    // private rootNeedsGroupWrapper(negate: boolean): boolean;
    setEndOfString(): void;
}