import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class InteractPacketPayload_Action extends Enum<InteractPacketPayload_Action> {
    static InteractUpdate: InteractPacketPayload_Action;
    static Invalid: InteractPacketPayload_Action;
    static NpcOpen: InteractPacketPayload_Action;
    static OpenInventory: InteractPacketPayload_Action;
    static StopRiding: InteractPacketPayload_Action;
    static getByName(paramarg0: string): InteractPacketPayload_Action;
    static getByName(paramarg0: string, paramarg1: InteractPacketPayload_Action): InteractPacketPayload_Action;
    static getByValue(paramarg0: number): InteractPacketPayload_Action;
    static getByValue(paramarg0: number, paramarg1: InteractPacketPayload_Action): InteractPacketPayload_Action;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): InteractPacketPayload_Action;
    static values(): InteractPacketPayload_Action[];
    private constructor(arg2: number)
    private constructor(arg2: InteractPacketPayload_Action)
    readonly value: number;
    getValue(): number;
    name(): "Invalid" | "StopRiding" | "InteractUpdate" | "NpcOpen" | "OpenInventory";
}