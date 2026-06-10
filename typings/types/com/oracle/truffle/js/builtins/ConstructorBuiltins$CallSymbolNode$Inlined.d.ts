import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$EqualNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { ConstructorBuiltins$CallSymbolNode } from '../../../../../com/oracle/truffle/js/builtins/ConstructorBuiltins$CallSymbolNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSBuiltinNode$Inlined } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode$Inlined.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Symbol } from '../../../../../com/oracle/truffle/js/runtime/Symbol.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { AtomicReference } from '../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ConstructorBuiltins$CallSymbolNode$Inlined extends ConstructorBuiltins$CallSymbolNode implements JSBuiltinNode$Inlined {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: Class<Tag>[]): Object | null;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    acceptCache(equalNode: TruffleString$EqualNode, value: TruffleString, cachedValue: TruffleString, symbolUsageMarker: AtomicReference<Object>): boolean;
    callInlined(arguments: Object[]): Object;
    callInlinedSymbolGeneric(value: Object): TruffleString;
    callSymbolSingleton(value: TruffleString, cachedValue: TruffleString, equalNode: TruffleString$EqualNode, symbolUsageMarker: AtomicReference<Object>, cachedSymbol: Symbol): Symbol;
    callSymbolString(value: TruffleString): Symbol;
    createCachedSingletonSymbol(value: TruffleString): Symbol;
    createSymbolUsageMarker(): AtomicReference<Object>;
    executeWithArguments(arg0: Object): Object;
    rewriteToCall(): RuntimeException;
}