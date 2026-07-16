import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleStringBuilderUTF16 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF16.d.ts'
import type { StringPrototypeBuiltins$JSStringReplaceES5Node } from '../../../../../com/oracle/truffle/js/builtins/StringPrototypeBuiltins$JSStringReplaceES5Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class StringPrototypeBuiltins$JSStringReplaceES5Node$Replacer<T extends unknown> extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(parent: StringPrototypeBuiltins$JSStringReplaceES5Node)
    // private parentNode: StringPrototypeBuiltins$JSStringReplaceES5Node;
    appendReplacementRegex(sb: TruffleStringBuilderUTF16, input: TruffleString, result: Object, groupCount: number, replaceValue: T, parent: StringPrototypeBuiltins$JSStringReplaceES5Node, tRegexCompiledRegex: Object, matchStart: number, matchEnd: number): void;
    appendReplacementString(sb: TruffleStringBuilderUTF16, input: TruffleString, matchedString: TruffleString, pos: number, replaceValue: T, parent: StringPrototypeBuiltins$JSStringReplaceES5Node): void;
}