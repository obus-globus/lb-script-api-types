import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ShowCreditsPacketPayload_CreditsState extends Enum<ShowCreditsPacketPayload_CreditsState> {
    static Finished: ShowCreditsPacketPayload_CreditsState;
    static Start: ShowCreditsPacketPayload_CreditsState;
    static getByName(paramarg0: string): ShowCreditsPacketPayload_CreditsState;
    static getByName(paramarg0: string, paramarg1: ShowCreditsPacketPayload_CreditsState): ShowCreditsPacketPayload_CreditsState;
    static getByValue(paramarg0: number): ShowCreditsPacketPayload_CreditsState;
    static getByValue(paramarg0: number, paramarg1: ShowCreditsPacketPayload_CreditsState): ShowCreditsPacketPayload_CreditsState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ShowCreditsPacketPayload_CreditsState;
    static values(): ShowCreditsPacketPayload_CreditsState[];
    private constructor(arg2: number)
    private constructor(arg2: ShowCreditsPacketPayload_CreditsState)
    readonly value: number;
    getValue(): number;
    name(): "Start" | "Finished";
}