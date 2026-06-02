import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class TextPacketType extends Enum<TextPacketType> {
    static announcement: TextPacketType;
    static chat: TextPacketType;
    static jukeboxPopup: TextPacketType;
    static popup: TextPacketType;
    static raw: TextPacketType;
    static systemMessage: TextPacketType;
    static textObject: TextPacketType;
    static textObjectAnnouncement: TextPacketType;
    static textObjectWhisper: TextPacketType;
    static tip: TextPacketType;
    static translate: TextPacketType;
    static whisper: TextPacketType;
    static getByName(paramarg0: string): TextPacketType;
    static getByName(paramarg0: string, paramarg1: TextPacketType): TextPacketType;
    static getByValue(paramarg0: number): TextPacketType;
    static getByValue(paramarg0: number, paramarg1: TextPacketType): TextPacketType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TextPacketType;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: TextPacketType)
    readonly value: number;
    getValue(): number;
    name(): "raw" | "chat" | "translate" | "popup" | "jukeboxPopup" | "tip" | "systemMessage" | "whisper" | "announcement" | "textObjectWhisper" | "textObject" | "textObjectAnnouncement";
}