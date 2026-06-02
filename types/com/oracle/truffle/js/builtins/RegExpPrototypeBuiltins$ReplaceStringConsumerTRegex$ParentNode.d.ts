import type { BranchProfile } from '../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleStringBuilderUTF16 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF16.d.ts'
import type { TRegexUtil$InvokeGetGroupBoundariesMethodNode } from '../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InvokeGetGroupBoundariesMethodNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface RegExpPrototypeBuiltins$ReplaceStringConsumerTRegex$ParentNode extends Object{
    append(sb: TruffleStringBuilderUTF16, s: TruffleString): void;
    append(sb: TruffleStringBuilderUTF16, s: TruffleString, fromIndex: number, toIndex: number): void;
    getGetEndNode(): TRegexUtil$InvokeGetGroupBoundariesMethodNode;
    getGetStartNode(): TRegexUtil$InvokeGetGroupBoundariesMethodNode;
    getInvalidGroupNumberProfile(): BranchProfile;
}