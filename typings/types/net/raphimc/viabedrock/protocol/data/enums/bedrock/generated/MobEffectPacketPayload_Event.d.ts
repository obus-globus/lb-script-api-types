import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class MobEffectPacketPayload_Event extends Enum<MobEffectPacketPayload_Event> {
    static Add: MobEffectPacketPayload_Event;
    static Invalid: MobEffectPacketPayload_Event;
    static Remove: MobEffectPacketPayload_Event;
    static Update: MobEffectPacketPayload_Event;
    static getByName(paramarg0: string): MobEffectPacketPayload_Event;
    static getByName(paramarg0: string, paramarg1: MobEffectPacketPayload_Event): MobEffectPacketPayload_Event;
    static getByValue(paramarg0: number): MobEffectPacketPayload_Event;
    static getByValue(paramarg0: number, paramarg1: MobEffectPacketPayload_Event): MobEffectPacketPayload_Event;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): MobEffectPacketPayload_Event;
    static values(): MobEffectPacketPayload_Event[];
    private constructor(arg2: number)
    private constructor(arg2: MobEffectPacketPayload_Event)
    readonly value: number;
    getValue(): number;
    name(): "Invalid" | "Add" | "Update" | "Remove";
}