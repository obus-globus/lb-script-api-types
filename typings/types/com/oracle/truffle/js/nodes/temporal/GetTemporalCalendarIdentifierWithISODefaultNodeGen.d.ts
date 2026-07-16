import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { GetTemporalCalendarIdentifierWithISODefaultNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/GetTemporalCalendarIdentifierWithISODefaultNode.d.ts'
import type { ToTemporalCalendarIdentifierNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/ToTemporalCalendarIdentifierNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GetTemporalCalendarIdentifierWithISODefaultNodeGen extends GetTemporalCalendarIdentifierWithISODefaultNode {
    static create(): GetTemporalCalendarIdentifierWithISODefaultNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private other_getCalendar_: PropertyGetNode;
    // private other_toCalendarIdentifier_: ToTemporalCalendarIdentifierNode;
    // private state_0_: number;
    execute(arg0Value: Object): TruffleString;
    // private executeAndSpecialize(arg0Value: Object): TruffleString;
}