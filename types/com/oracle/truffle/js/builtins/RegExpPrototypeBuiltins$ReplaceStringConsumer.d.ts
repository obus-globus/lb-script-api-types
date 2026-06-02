import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleStringBuilderUTF16 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF16.d.ts'
import type { RegExpPrototypeBuiltins$JSRegExpReplaceNode } from '../../../../../com/oracle/truffle/js/builtins/RegExpPrototypeBuiltins$JSRegExpReplaceNode.d.ts'
import type { ReplaceStringParser$Consumer } from '../../../../../com/oracle/truffle/js/builtins/helper/ReplaceStringParser$Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RegExpPrototypeBuiltins$ReplaceStringConsumer extends Object implements ReplaceStringParser$Consumer<RegExpPrototypeBuiltins$JSRegExpReplaceNode, TruffleStringBuilderUTF16> {
    private constructor(sb: TruffleStringBuilderUTF16, input: TruffleString, replaceStr: TruffleString, startPos: number, endPos: number, captures: Object[], namedCaptures: Object)
    // private captures: Object[];
    // private endPos: number;
    // private input: TruffleString;
    // private namedCaptures: Object;
    // private replaceStr: TruffleString;
    // private sb: TruffleStringBuilderUTF16;
    // private startPos: number;
    captureGroup(node: RegExpPrototypeBuiltins$JSRegExpReplaceNode, groupNumber: number, literalStart: number, literalEnd: number): void;
    getResult(): TruffleStringBuilderUTF16;
    literal(node: RegExpPrototypeBuiltins$JSRegExpReplaceNode, start: number, end: number): void;
    match(node: RegExpPrototypeBuiltins$JSRegExpReplaceNode): void;
    matchHead(node: RegExpPrototypeBuiltins$JSRegExpReplaceNode): void;
    matchTail(node: RegExpPrototypeBuiltins$JSRegExpReplaceNode): void;
    namedCaptureGroup(node: RegExpPrototypeBuiltins$JSRegExpReplaceNode, groupName: TruffleString): void;
}