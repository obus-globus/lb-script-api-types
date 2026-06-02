import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleStringBuilderUTF16 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF16.d.ts'
import type { StringPrototypeBuiltins$JSStringReplaceES5Node } from '../../../../../com/oracle/truffle/js/builtins/StringPrototypeBuiltins$JSStringReplaceES5Node.d.ts'
import type { StringPrototypeBuiltins$JSStringReplaceES5Node$Replacer } from '../../../../../com/oracle/truffle/js/builtins/StringPrototypeBuiltins$JSStringReplaceES5Node$Replacer.d.ts'
import type { JSToStringNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSFunctionObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StringPrototypeBuiltins$JSStringReplaceES5Node$FunctionReplacer extends StringPrototypeBuiltins$JSStringReplaceES5Node$Replacer<JSFunctionObject> {
    static create(paramparent: StringPrototypeBuiltins$JSStringReplaceES5Node): StringPrototypeBuiltins$JSStringReplaceES5Node$FunctionReplacer;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(parent: StringPrototypeBuiltins$JSStringReplaceES5Node)
    // private functionCallNode: JSFunctionCallNode;
    // private toStringNode: JSToStringNode;
    appendReplacementRegex(sb: TruffleStringBuilderUTF16, input: TruffleString, result: Object, groupCount: number, replaceFunc: JSFunctionObject, parent: StringPrototypeBuiltins$JSStringReplaceES5Node, tRegexCompiledRegex: Object, matchStart: number, matchEnd: number): void;
    appendReplacementString(sb: TruffleStringBuilderUTF16, input: TruffleString, matchedString: TruffleString, pos: number, replaceFunc: JSFunctionObject, parent: StringPrototypeBuiltins$JSStringReplaceES5Node): void;
    // private callReplaceValueFunc(context: JSContext, result: Object, input: TruffleString, groupCount: number, replaceFunc: JSFunctionObject, matchStart: number): TruffleString;
}