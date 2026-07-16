import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$EqualNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { TruffleString$ToJavaStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ToJavaStringNode.d.ts'
import type { AssumedValue } from '../../../../../com/oracle/truffle/api/utilities/AssumedValue.d.ts'
import type { JavaScriptBaseNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class CompileRegexNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): CompileRegexNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private context: JSContext;
    // private isCompiledRegexNullNode: InteropLibrary;
    compile(pattern: Object): Object;
    compile(pattern: Object, flags: Object): Object;
    createAssumedValue(): AssumedValue<Object>;
    doCompile(pattern: TruffleString, flags: TruffleString, toJavaString: TruffleString$ToJavaStringNode): Object;
    doCompileNoTrimCache(pattern: TruffleString, flags: TruffleString, toJavaString: TruffleString$ToJavaStringNode): Object;
    executeCompile(pattern: Object, flags: Object): Object;
    getCached(pattern: TruffleString, flags: TruffleString, cachedPattern: TruffleString, cachedFlags: TruffleString, cachedCompiledRegex: AssumedValue<Object>, equalsNode: TruffleString$EqualNode, equalsNode2: TruffleString$EqualNode, toJavaString: TruffleString$ToJavaStringNode): Object;
    // private getIsCompiledRegexNullNode(): InteropLibrary;
}