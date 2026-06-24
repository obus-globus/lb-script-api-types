import type { EventBinding } from '../../../../../../com/oracle/truffle/api/instrumentation/EventBinding.d.ts'
import type { AgentType } from '../../../../../../com/oracle/truffle/tools/agentscript/impl/AgentType.d.ts'
import type { InsightInstrument } from '../../../../../../com/oracle/truffle/tools/agentscript/impl/InsightInstrument.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InsightInstrument$Key extends Object {
    private constructor(null_: InsightInstrument, type: AgentType, index: number)
    // private bindings: EventBinding<Object>[];
    // private functionsMaxLen: number;
    // private index: number;
    // private type: AgentType;
    adjustSize(size: number): void;
    assign(b: EventBinding<Object>): InsightInstrument$Key;
    // private close(): void;
    functionsMaxCount(): number;
    index(): number;
    isClosed(): boolean;
    toString(): string;
}