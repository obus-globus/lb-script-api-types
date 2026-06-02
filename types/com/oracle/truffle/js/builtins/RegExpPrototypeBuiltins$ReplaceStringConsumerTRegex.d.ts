import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleStringBuilderUTF16 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF16.d.ts'
import type { RegExpPrototypeBuiltins$ReplaceStringConsumerTRegex$ParentNode } from '../../../../../com/oracle/truffle/js/builtins/RegExpPrototypeBuiltins$ReplaceStringConsumerTRegex$ParentNode.d.ts'
import type { ReplaceStringParser$Consumer } from '../../../../../com/oracle/truffle/js/builtins/helper/ReplaceStringParser$Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RegExpPrototypeBuiltins$ReplaceStringConsumerTRegex extends Object implements ReplaceStringParser$Consumer<RegExpPrototypeBuiltins$ReplaceStringConsumerTRegex$ParentNode, TruffleStringBuilderUTF16> {
    constructor(sb: TruffleStringBuilderUTF16, input: TruffleString, replaceStr: TruffleString, startPos: number, endPos: number, tRegexResult: Object, tRegexCompiledRegex: Object, groupCount: number)
    // private endPos: number;
    // private groupCount: number;
    // private input: TruffleString;
    // private replaceStr: TruffleString;
    // private sb: TruffleStringBuilderUTF16;
    // private startPos: number;
    // private tRegexCompiledRegex: Object;
    // private tRegexResult: Object;
    captureGroup(parent: RegExpPrototypeBuiltins$ReplaceStringConsumerTRegex$ParentNode, groupNumber: number, literalStart: number, literalEnd: number): void;
    getResult(): TruffleStringBuilderUTF16;
    literal(node: RegExpPrototypeBuiltins$ReplaceStringConsumerTRegex$ParentNode, start: number, end: number): void;
    match(node: RegExpPrototypeBuiltins$ReplaceStringConsumerTRegex$ParentNode): void;
    matchHead(node: RegExpPrototypeBuiltins$ReplaceStringConsumerTRegex$ParentNode): void;
    matchTail(node: RegExpPrototypeBuiltins$ReplaceStringConsumerTRegex$ParentNode): void;
    namedCaptureGroup(node: RegExpPrototypeBuiltins$ReplaceStringConsumerTRegex$ParentNode, groupName: TruffleString): void;
}