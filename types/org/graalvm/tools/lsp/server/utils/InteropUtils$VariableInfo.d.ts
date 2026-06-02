import type { InstrumentableNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { SourceSection } from '../../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InteropUtils$VariableInfo extends Object {
    constructor(node: InstrumentableNode, nameObject: Object)
    readonly name: string;
    // private nameObject: Object;
    // private node: InstrumentableNode;
    getName(): string;
    getSourceSection(): SourceSection;
}