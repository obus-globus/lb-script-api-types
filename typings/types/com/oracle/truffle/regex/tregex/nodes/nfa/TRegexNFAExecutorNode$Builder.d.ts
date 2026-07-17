import type { CharMatchers$Builder } from '../../../../../../../com/oracle/truffle/regex/charset/CharMatchers$Builder.d.ts'
import type { CompilationBuffer } from '../../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { NFA } from '../../../../../../../com/oracle/truffle/regex/tregex/nfa/NFA.d.ts'
import type { EncodedGroupBoundaries$Builder } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/nfa/EncodedGroupBoundaries$Builder.d.ts'
import type { TRegexNFAExecutorNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/nfa/TRegexNFAExecutorNode.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TRegexNFAExecutorNode$Builder extends Object {
    constructor(nfa: NFA)
    // private compilationBuffer: CompilationBuffer;
    // private groupBoundariesBuilder: EncodedGroupBoundaries$Builder;
    // private matcherBuilder: CharMatchers$Builder;
    // private nfa: NFA;
    // private nfaBuffer: number[];
    create(): TRegexNFAExecutorNode;
}