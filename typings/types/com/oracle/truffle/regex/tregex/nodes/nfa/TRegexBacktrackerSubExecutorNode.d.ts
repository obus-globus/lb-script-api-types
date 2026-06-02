import type { TRegexExecutorBaseNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorBaseNode.d.ts'
import type { TRegexExecutorNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorNode.d.ts'
import type { RegexAST } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class TRegexBacktrackerSubExecutorNode extends TRegexExecutorNode {
    static ASTRAL_PROBABILITY: number;
    static BMP_PROBABILITY: number;
    static CONTINUE_PROBABILITY: number;
    static EXIT_PROBABILITY: number;
    static LATIN1_PROBABILITY: number;
    static NO_SUB_EXECUTORS: (Object | null)[];
    static inputIncRaw(paramindex: number, paramoffset: number, paramforward: boolean): number;
    constructor(copy: TRegexBacktrackerSubExecutorNode)
    constructor(ast: RegexAST, numberOfTransitions: number, subExecutors: TRegexExecutorBaseNode[])
    // private subExecutors: TRegexExecutorBaseNode[];
    shallowCopy(): TRegexBacktrackerSubExecutorNode;
}