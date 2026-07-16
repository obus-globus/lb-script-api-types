import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class InteractPacket_Action extends Enum<InteractPacket_Action> {
    static InteractUpdate: InteractPacket_Action;
    static Invalid: InteractPacket_Action;
    static NpcOpen: InteractPacket_Action;
    static OpenInventory: InteractPacket_Action;
    static StopRiding: InteractPacket_Action;
    static getByName(paramarg0: string): InteractPacket_Action;
    static getByName(paramarg0: string, paramarg1: InteractPacket_Action): InteractPacket_Action;
    static getByValue(paramarg0: number): InteractPacket_Action;
    static getByValue(paramarg0: number, paramarg1: InteractPacket_Action): InteractPacket_Action;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): InteractPacket_Action;
    static values(): InteractPacket_Action[];
    private constructor(arg2: number)
    private constructor(arg2: InteractPacket_Action)
    readonly value: number;
    getValue(): number;
    name(): "Invalid" | "StopRiding" | "InteractUpdate" | "NpcOpen" | "OpenInventory";
}