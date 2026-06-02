import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$CreateCodePointIteratorNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CreateCodePointIteratorNode.d.ts'
import type { TruffleString$ReadCharUTF16Node } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ReadCharUTF16Node.d.ts'
import type { TruffleString$SubstringByteIndexNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$SubstringByteIndexNode.d.ts'
import type { TruffleStringBuilder$AppendCharUTF16Node } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendCharUTF16Node.d.ts'
import type { TruffleStringBuilder$AppendCodePointNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendCodePointNode.d.ts'
import type { TruffleStringBuilder$AppendStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendStringNode.d.ts'
import type { TruffleStringBuilder$AppendSubstringByteIndexNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendSubstringByteIndexNode.d.ts'
import type { TruffleStringBuilder$ToStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$ToStringNode.d.ts'
import type { TruffleStringIterator } from '../../../../../com/oracle/truffle/api/strings/TruffleStringIterator.d.ts'
import type { TruffleStringIterator$NextNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringIterator$NextNode.d.ts'
import type { TruffleStringIterator$PreviousNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringIterator$PreviousNode.d.ts'
import type { StringFunctionBuiltins$DedentTemplateStringsArrayNode$SegmentRecord } from '../../../../../com/oracle/truffle/js/builtins/StringFunctionBuiltins$DedentTemplateStringsArrayNode$SegmentRecord.d.ts'
import type { JSCollectionsNormalizeNode } from '../../../../../com/oracle/truffle/js/builtins/helper/JSCollectionsNormalizeNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { PropertyGetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { ReadElementNode } from '../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode.d.ts'
import type { JSGetLengthNode } from '../../../../../com/oracle/truffle/js/nodes/array/JSGetLengthNode.d.ts'
import type { JSToObjectNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToObjectNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSArrayObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class StringFunctionBuiltins$DedentTemplateStringsArrayNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private appendCharNode: TruffleStringBuilder$AppendCharUTF16Node;
    // private appendCodePointNode: TruffleStringBuilder$AppendCodePointNode;
    // private appendStringNode: TruffleStringBuilder$AppendStringNode;
    // private appendSubstringNode: TruffleStringBuilder$AppendSubstringByteIndexNode;
    // private builderToStringNode: TruffleStringBuilder$ToStringNode;
    // private getLengthNode: JSGetLengthNode;
    // private getRawNode: PropertyGetNode;
    // private iteratorNextNode: TruffleStringIterator$NextNode;
    // private iteratorPreviousNode: TruffleStringIterator$PreviousNode;
    // private readCharNode: TruffleString$ReadCharUTF16Node;
    // private readRawElementNode: ReadElementNode;
    // private substringNode: TruffleString$SubstringByteIndexNode;
    // private cookStrings(raw: TruffleString[], createCodePointIterator: TruffleString$CreateCodePointIteratorNode, errorBranch: InlinedBranchProfile): Object[];
    // private dedentStringsArray(template: Object, context: JSContext, rawToObjectNode: JSToObjectNode, emptyProf: InlinedConditionProfile, errorBranch: InlinedBranchProfile, growBranch: InlinedBranchProfile): TruffleString[];
    dedentTemplateStringsArray(template: Object, context: JSContext, rawToObjectNode: JSToObjectNode, emptyProf: InlinedConditionProfile, errorBranch: InlinedBranchProfile, growBranch: InlinedBranchProfile, createCodePointIterator: TruffleString$CreateCodePointIteratorNode, collectionsNormalize: JSCollectionsNormalizeNode): JSArrayObject;
    // private determineCommonLeadingIndentation(blocks: StringFunctionBuiltins$DedentTemplateStringsArrayNode$SegmentRecord[][]): TruffleString;
    // private emptyWhiteSpaceLines(blocks: StringFunctionBuiltins$DedentTemplateStringsArrayNode$SegmentRecord[][]): void;
    execute(template: Object, context: JSContext): JSArrayObject;
    // private getLength(raw: Object): number;
    // private hexSequence(iterator: TruffleStringIterator, length: number, errorBranch: InlinedBranchProfile): number;
    // private isAllWhitespace(str: TruffleString): boolean;
    // private leadingWhiteSpaceSubstring(str: TruffleString): TruffleString;
    // private longestMatchingLeadingSubstring(strA: TruffleString, strB: TruffleString): TruffleString;
    // private parseText(iterator: TruffleStringIterator, errorBranch: InlinedBranchProfile): Object;
    // private peekNext(iterator: TruffleStringIterator): number;
    // private removeOpeningAndClosingLines(blocks: StringFunctionBuiltins$DedentTemplateStringsArrayNode$SegmentRecord[][], errorBranch: InlinedBranchProfile): void;
    // private splitTemplateIntoBlockLines(raw: Object, len: number, stringLengthLimit: number, errorBranch: InlinedBranchProfile, growBranch: InlinedBranchProfile): StringFunctionBuiltins$DedentTemplateStringsArrayNode$SegmentRecord[][];
    // private unicodeEscapeSequence(iterator: TruffleStringIterator, errorBranch: InlinedBranchProfile): number;
    // private varlenHexSequence(iterator: TruffleStringIterator, errorBranch: InlinedBranchProfile): number;
}