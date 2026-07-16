import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class PositionTrackingDBClientRequestPacketPayload_Action extends Enum<PositionTrackingDBClientRequestPacketPayload_Action> {
    static Query: PositionTrackingDBClientRequestPacketPayload_Action;
    static getByName(paramarg0: string): PositionTrackingDBClientRequestPacketPayload_Action;
    static getByName(paramarg0: string, paramarg1: PositionTrackingDBClientRequestPacketPayload_Action): PositionTrackingDBClientRequestPacketPayload_Action;
    static getByValue(paramarg0: number): PositionTrackingDBClientRequestPacketPayload_Action;
    static getByValue(paramarg0: number, paramarg1: PositionTrackingDBClientRequestPacketPayload_Action): PositionTrackingDBClientRequestPacketPayload_Action;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PositionTrackingDBClientRequestPacketPayload_Action;
    static values(): PositionTrackingDBClientRequestPacketPayload_Action[];
    private constructor(arg2: number)
    private constructor(arg2: PositionTrackingDBClientRequestPacketPayload_Action)
    readonly value: number;
    getValue(): number;
    name(): "Query";
}