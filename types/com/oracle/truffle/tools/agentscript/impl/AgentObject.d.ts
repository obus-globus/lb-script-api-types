import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { InsightInstrument } from '../../../../../../com/oracle/truffle/tools/agentscript/impl/InsightInstrument.d.ts'
import type { InsightPerSource } from '../../../../../../com/oracle/truffle/tools/agentscript/impl/InsightPerSource.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AgentObject extends Object implements TruffleObject {
    constructor(msg: string, insight: InsightInstrument, source: InsightPerSource)
    // private insight: InsightInstrument;
    // private msg: number[];
    // private source: InsightPerSource;
    isMemberReadable(member: string): boolean;
    readMember(name: string): Object;
    // private warnMsg(): void;
}