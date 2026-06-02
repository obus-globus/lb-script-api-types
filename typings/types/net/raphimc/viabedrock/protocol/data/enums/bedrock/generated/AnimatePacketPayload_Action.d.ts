import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class AnimatePacketPayload_Action extends Enum<AnimatePacketPayload_Action> {
    static CriticalHit: AnimatePacketPayload_Action;
    static MagicCriticalHit: AnimatePacketPayload_Action;
    static NoAction: AnimatePacketPayload_Action;
    static Swing: AnimatePacketPayload_Action;
    static WakeUp: AnimatePacketPayload_Action;
    static getByName(paramarg0: string): AnimatePacketPayload_Action;
    static getByName(paramarg0: string, paramarg1: AnimatePacketPayload_Action): AnimatePacketPayload_Action;
    static getByValue(paramarg0: number): AnimatePacketPayload_Action;
    static getByValue(paramarg0: number, paramarg1: AnimatePacketPayload_Action): AnimatePacketPayload_Action;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AnimatePacketPayload_Action;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: AnimatePacketPayload_Action)
    readonly value: number;
    getValue(): number;
    name(): "NoAction" | "Swing" | "WakeUp" | "CriticalHit" | "MagicCriticalHit";
}