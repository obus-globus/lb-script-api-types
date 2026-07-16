import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class PositionTrackingDBClientRequestPacket_Action extends Enum<PositionTrackingDBClientRequestPacket_Action> {
    static Query: PositionTrackingDBClientRequestPacket_Action;
    static getByName(paramarg0: string): PositionTrackingDBClientRequestPacket_Action;
    static getByName(paramarg0: string, paramarg1: PositionTrackingDBClientRequestPacket_Action): PositionTrackingDBClientRequestPacket_Action;
    static getByValue(paramarg0: number): PositionTrackingDBClientRequestPacket_Action;
    static getByValue(paramarg0: number, paramarg1: PositionTrackingDBClientRequestPacket_Action): PositionTrackingDBClientRequestPacket_Action;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PositionTrackingDBClientRequestPacket_Action;
    static values(): PositionTrackingDBClientRequestPacket_Action[];
    private constructor(arg2: number)
    private constructor(arg2: PositionTrackingDBClientRequestPacket_Action)
    readonly value: number;
    getValue(): number;
    name(): "Query";
}