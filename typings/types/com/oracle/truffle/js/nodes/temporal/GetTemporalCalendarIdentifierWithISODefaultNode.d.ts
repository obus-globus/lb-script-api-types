import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { ToTemporalCalendarIdentifierNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/ToTemporalCalendarIdentifierNode.d.ts'
import type { JSTemporalCalendarHolder } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalCalendarHolder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class GetTemporalCalendarIdentifierWithISODefaultNode extends JavaScriptBaseNode {
    static create(): GetTemporalCalendarIdentifierWithISODefaultNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doJSTemporalCalendarHolder(item: JSTemporalCalendarHolder): TruffleString;
    doOther(item: Object, getCalendar: PropertyGetNode, toCalendarIdentifier: ToTemporalCalendarIdentifierNode): TruffleString;
    execute(item: Object): TruffleString;
}