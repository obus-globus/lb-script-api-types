import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class EmotePacket_Flags extends Enum<EmotePacket_Flags> {
    static MUTE_EMOTE_CHAT: EmotePacket_Flags;
    static SERVER_SIDE: EmotePacket_Flags;
    static getByName(paramarg0: string): EmotePacket_Flags;
    static getByName(paramarg0: string, paramarg1: EmotePacket_Flags): EmotePacket_Flags;
    static getByValue(paramarg0: number): EmotePacket_Flags;
    static getByValue(paramarg0: number, paramarg1: EmotePacket_Flags): EmotePacket_Flags;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): EmotePacket_Flags;
    static values(): EmotePacket_Flags[];
    private constructor(arg2: number)
    private constructor(arg2: EmotePacket_Flags)
    readonly value: number;
    getValue(): number;
    name(): "SERVER_SIDE" | "MUTE_EMOTE_CHAT";
}