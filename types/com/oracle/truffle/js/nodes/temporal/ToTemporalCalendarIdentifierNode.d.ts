import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$FromJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$FromJavaStringNode.d.ts'
import type { TruffleString$ToJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ToJavaStringNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSTemporalCalendarHolder } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalCalendarHolder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ToTemporalCalendarIdentifierNode extends JavaScriptBaseNode {
    static create(): ToTemporalCalendarIdentifierNode;
    static getUncached(): ToTemporalCalendarIdentifierNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doJSTemporalCalendarHolder(temporalCalendarLike: JSTemporalCalendarHolder): TruffleString;
    doOther(temporalCalendarLike: Object): TruffleString;
    doString(temporalCalendarLike: TruffleString, toJavaString: TruffleString$ToJavaStringNode, fromJavaString: TruffleString$FromJavaStringNode): TruffleString;
    executeString(temporalCalendarLike: Object): TruffleString;
}