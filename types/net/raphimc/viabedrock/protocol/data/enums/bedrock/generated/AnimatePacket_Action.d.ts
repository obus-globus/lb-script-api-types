import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class AnimatePacket_Action extends Enum<AnimatePacket_Action> {
    static CriticalHit: AnimatePacket_Action;
    static MagicCriticalHit: AnimatePacket_Action;
    static NoAction: AnimatePacket_Action;
    static Swing: AnimatePacket_Action;
    static WakeUp: AnimatePacket_Action;
    static getByName(paramarg0: string): AnimatePacket_Action;
    static getByName(paramarg0: string, paramarg1: AnimatePacket_Action): AnimatePacket_Action;
    static getByValue(paramarg0: number): AnimatePacket_Action;
    static getByValue(paramarg0: number, paramarg1: AnimatePacket_Action): AnimatePacket_Action;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AnimatePacket_Action;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: AnimatePacket_Action)
    readonly value: number;
    getValue(): number;
    name(): "NoAction" | "Swing" | "WakeUp" | "CriticalHit" | "MagicCriticalHit";
}