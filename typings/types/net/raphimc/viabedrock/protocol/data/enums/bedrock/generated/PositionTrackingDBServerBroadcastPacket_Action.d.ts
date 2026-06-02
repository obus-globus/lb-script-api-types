import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class PositionTrackingDBServerBroadcastPacket_Action extends Enum<PositionTrackingDBServerBroadcastPacket_Action> {
    static Destroy: PositionTrackingDBServerBroadcastPacket_Action;
    static NotFound: PositionTrackingDBServerBroadcastPacket_Action;
    static Update: PositionTrackingDBServerBroadcastPacket_Action;
    static getByName(paramarg0: string): PositionTrackingDBServerBroadcastPacket_Action;
    static getByName(paramarg0: string, paramarg1: PositionTrackingDBServerBroadcastPacket_Action): PositionTrackingDBServerBroadcastPacket_Action;
    static getByValue(paramarg0: number): PositionTrackingDBServerBroadcastPacket_Action;
    static getByValue(paramarg0: number, paramarg1: PositionTrackingDBServerBroadcastPacket_Action): PositionTrackingDBServerBroadcastPacket_Action;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PositionTrackingDBServerBroadcastPacket_Action;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: PositionTrackingDBServerBroadcastPacket_Action)
    readonly value: number;
    getValue(): number;
    name(): "Update" | "Destroy" | "NotFound";
}