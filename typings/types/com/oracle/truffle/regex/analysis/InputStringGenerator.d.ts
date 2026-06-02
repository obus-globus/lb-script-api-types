import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { RegexLanguage } from '../../../../../com/oracle/truffle/regex/RegexLanguage.d.ts'
import type { InputStringGenerator$InputString } from '../../../../../com/oracle/truffle/regex/analysis/InputStringGenerator$InputString.d.ts'
import type { InputStringGenerator$InputStringBuilder } from '../../../../../com/oracle/truffle/regex/analysis/InputStringGenerator$InputStringBuilder.d.ts'
import type { InputStringGenerator$QuantifierStackEntry } from '../../../../../com/oracle/truffle/regex/analysis/InputStringGenerator$QuantifierStackEntry.d.ts'
import type { InputStringGenerator$StackEntry } from '../../../../../com/oracle/truffle/regex/analysis/InputStringGenerator$StackEntry.d.ts'
import type { InputStringGenerator$State } from '../../../../../com/oracle/truffle/regex/analysis/InputStringGenerator$State.d.ts'
import type { Group } from '../../../../../com/oracle/truffle/regex/tregex/parser/ast/Group.d.ts'
import type { RegexAST } from '../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { RegexASTSubtreeRootNode } from '../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTSubtreeRootNode.d.ts'
import type { Sequence } from '../../../../../com/oracle/truffle/regex/tregex/parser/ast/Sequence.d.ts'
import type { Term } from '../../../../../com/oracle/truffle/regex/tregex/parser/ast/Term.d.ts'
import type { Random } from '../../../../../java/util/Random.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InputStringGenerator extends Object {
    static generate(paramast: RegexAST, paramrngSeed: number): InputStringGenerator$InputString;
    static generateRootNode(paramlanguage: RegexLanguage, paramast: RegexAST): RootNode;
    private constructor(ast: RegexAST, rngSeed: number)
    // private ast: RegexAST;
    // private backtrackStack: InputStringGenerator$StackEntry[];
    // private builder: InputStringGenerator$InputStringBuilder;
    // private forward: boolean;
    // private groupBoundaries: number[];
    // private index: number;
    // private lookAroundIndexReset: number[];
    // private next: Term;
    // private quantifierStack: InputStringGenerator$QuantifierStackEntry[];
    // private rng: Random;
    // private scratch: (Object | null)[];
    // private state: InputStringGenerator$State;
    // private afterTerm(t: Term): void;
    // private decIndex(): void;
    // private generate(): InputStringGenerator$InputString;
    // private getGroupEnd(groupNumber: number): number;
    // private getGroupStart(groupNumber: number): number;
    // private incIndex(): void;
    // private popLookAroundIndexReset(): void;
    // private popQuantifierIteration(): boolean;
    // private processGroup(group: Group): void;
    // private processSeq(group: Group, seq: Sequence): void;
    // private processTerm(term: Term): void;
    // private pushLookAroundIndexReset(): void;
    // private pushQuantifierIterations(repetitions: number): void;
    // private setDirection(rootNode: RegexASTSubtreeRootNode): void;
    // private setGroupBoundary(boundaryIndex: number): void;
    // private setGroupEnd(group: Group): void;
    // private setGroupStart(group: Group): void;
}