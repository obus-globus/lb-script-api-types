import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class PositionTrackingDBServerBroadcastPacketPayload_Action extends Enum<PositionTrackingDBServerBroadcastPacketPayload_Action> {
    static Destroy: PositionTrackingDBServerBroadcastPacketPayload_Action;
    static NotFound: PositionTrackingDBServerBroadcastPacketPayload_Action;
    static Update: PositionTrackingDBServerBroadcastPacketPayload_Action;
    static getByName(paramarg0: string): PositionTrackingDBServerBroadcastPacketPayload_Action;
    static getByName(paramarg0: string, paramarg1: PositionTrackingDBServerBroadcastPacketPayload_Action): PositionTrackingDBServerBroadcastPacketPayload_Action;
    static getByValue(paramarg0: number): PositionTrackingDBServerBroadcastPacketPayload_Action;
    static getByValue(paramarg0: number, paramarg1: PositionTrackingDBServerBroadcastPacketPayload_Action): PositionTrackingDBServerBroadcastPacketPayload_Action;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PositionTrackingDBServerBroadcastPacketPayload_Action;
    static values(): PositionTrackingDBServerBroadcastPacketPayload_Action[];
    private constructor(arg2: number)
    private constructor(arg2: PositionTrackingDBServerBroadcastPacketPayload_Action)
    readonly value: number;
    getValue(): number;
    name(): "Update" | "Destroy" | "NotFound";
}