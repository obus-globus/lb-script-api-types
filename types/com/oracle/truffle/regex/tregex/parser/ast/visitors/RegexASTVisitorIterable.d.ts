import type { RegexASTNode } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTNode.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface RegexASTVisitorIterable extends Object{
    resetVisitorIterator(): void;
    visitorGetNext(reverse: boolean): RegexASTNode;
    visitorHasNext(): boolean;
}