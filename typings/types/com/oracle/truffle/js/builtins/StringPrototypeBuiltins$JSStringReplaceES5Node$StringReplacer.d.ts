import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { ConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/ConditionProfile.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleStringBuilderUTF16 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF16.d.ts'
import type { RegExpPrototypeBuiltins$ReplaceStringConsumerTRegex$ParentNode } from '../../../../../com/oracle/truffle/js/builtins/RegExpPrototypeBuiltins$ReplaceStringConsumerTRegex$ParentNode.d.ts'
import type { StringPrototypeBuiltins$JSStringReplaceES5Node } from '../../../../../com/oracle/truffle/js/builtins/StringPrototypeBuiltins$JSStringReplaceES5Node.d.ts'
import type { StringPrototypeBuiltins$JSStringReplaceES5Node$Replacer } from '../../../../../com/oracle/truffle/js/builtins/StringPrototypeBuiltins$JSStringReplaceES5Node$Replacer.d.ts'
import type { TRegexUtil$InvokeGetGroupBoundariesMethodNode } from '../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InvokeGetGroupBoundariesMethodNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StringPrototypeBuiltins$JSStringReplaceES5Node$StringReplacer extends StringPrototypeBuiltins$JSStringReplaceES5Node$Replacer<TruffleString> implements RegExpPrototypeBuiltins$ReplaceStringConsumerTRegex$ParentNode {
    static create(paramparent: StringPrototypeBuiltins$JSStringReplaceES5Node): StringPrototypeBuiltins$JSStringReplaceES5Node$StringReplacer;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(parent: StringPrototypeBuiltins$JSStringReplaceES5Node)
    // private emptyReplace: ConditionProfile;
    readonly invalidGroupNumberProfile: BranchProfile;
    append(sb: TruffleStringBuilderUTF16, s: TruffleString): void;
    append(sb: TruffleStringBuilderUTF16, s: TruffleString, fromIndex: number, toIndex: number): void;
    appendReplacementRegex(sb: TruffleStringBuilderUTF16, input: TruffleString, result: Object, groupCount: number, replaceStr: TruffleString, parent: StringPrototypeBuiltins$JSStringReplaceES5Node, tRegexCompiledRegex: Object, matchStart: number, matchEnd: number): void;
    appendReplacementString(sb: TruffleStringBuilderUTF16, input: TruffleString, matchedString: TruffleString, pos: number, replaceValue: TruffleString, parent: StringPrototypeBuiltins$JSStringReplaceES5Node): void;
    getGetEndNode(): TRegexUtil$InvokeGetGroupBoundariesMethodNode;
    getGetStartNode(): TRegexUtil$InvokeGetGroupBoundariesMethodNode;
    getInvalidGroupNumberProfile(): BranchProfile;
}