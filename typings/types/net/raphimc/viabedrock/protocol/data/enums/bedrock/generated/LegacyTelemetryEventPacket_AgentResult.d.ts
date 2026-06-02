import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class LegacyTelemetryEventPacket_AgentResult extends Enum<LegacyTelemetryEventPacket_AgentResult> {
    static ActionFail: LegacyTelemetryEventPacket_AgentResult;
    static ActionSuccess: LegacyTelemetryEventPacket_AgentResult;
    static QueryResultFalse: LegacyTelemetryEventPacket_AgentResult;
    static QueryResultTrue: LegacyTelemetryEventPacket_AgentResult;
    static getByName(paramarg0: string): LegacyTelemetryEventPacket_AgentResult;
    static getByName(paramarg0: string, paramarg1: LegacyTelemetryEventPacket_AgentResult): LegacyTelemetryEventPacket_AgentResult;
    static getByValue(paramarg0: number): LegacyTelemetryEventPacket_AgentResult;
    static getByValue(paramarg0: number, paramarg1: LegacyTelemetryEventPacket_AgentResult): LegacyTelemetryEventPacket_AgentResult;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LegacyTelemetryEventPacket_AgentResult;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: LegacyTelemetryEventPacket_AgentResult)
    readonly value: number;
    getValue(): number;
    name(): "ActionFail" | "ActionSuccess" | "QueryResultFalse" | "QueryResultTrue";
}