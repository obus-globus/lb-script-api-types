import type { Group } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Group.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class NFATraversalRegexASTVisitor$PathElement extends Object {
    static createGroupEscape(paramgroup: Group): number;
    static createGroupExit(paramgroup: Group): number;
    static createGroupPassThrough(paramgroup: Group, paramgroupAltIndex: number): number;
    private constructor()
}