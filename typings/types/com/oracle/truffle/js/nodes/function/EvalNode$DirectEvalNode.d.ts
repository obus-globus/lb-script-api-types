import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { IndirectCallNode } from '../../../../../../com/oracle/truffle/api/nodes/IndirectCallNode.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$SwitchEncodingNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$SwitchEncodingNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { SafeInteger } from '../../../../../../com/oracle/truffle/js/runtime/SafeInteger.d.ts'
import type { Symbol } from '../../../../../../com/oracle/truffle/js/runtime/Symbol.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class EvalNode$DirectEvalNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, thisNode: JavaScriptNode, currEnv: Object, blockScopeSlot: number)
    // private blockScopeSlot: number;
    // private callNode: IndirectCallNode;
    // private context: JSContext;
    // private currEnv: Object;
    // private thisNode: JavaScriptNode;
    copyUninitialized(materializedTags: Class<Tag>[]): EvalNode$DirectEvalNode;
    directEvalBigInt(source: BigInt): BigInt;
    directEvalBoolean(source: boolean): boolean;
    directEvalCharSequence(frame: VirtualFrame, source: TruffleString): Object;
    directEvalDouble(source: number): number;
    directEvalForeignObject(frame: VirtualFrame, sourceCode: Object, interop: InteropLibrary, switchEncoding: TruffleString$SwitchEncodingNode): Object;
    // private directEvalImpl(frame: VirtualFrame, sourceCode: TruffleString): Object;
    directEvalInt(source: number): number;
    directEvalJSType(source: JSDynamicObject): JSDynamicObject;
    directEvalLong(source: number): number;
    directEvalSafeInteger(source: SafeInteger): SafeInteger;
    directEvalSymbol(source: Symbol): Symbol;
    executeWithSource(frame: VirtualFrame, source: Object): Object;
    // private sourceFromString(sourceCode: TruffleString): Source;
}