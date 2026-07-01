import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class TextPacketType extends Enum<TextPacketType> {
    static Announcement: TextPacketType;
    static Chat: TextPacketType;
    static JukeboxPopup: TextPacketType;
    static Popup: TextPacketType;
    static Raw: TextPacketType;
    static SystemMessage: TextPacketType;
    static TextObject: TextPacketType;
    static TextObjectAnnouncement: TextPacketType;
    static TextObjectWhisper: TextPacketType;
    static Tip: TextPacketType;
    static Translate: TextPacketType;
    static Whisper: TextPacketType;
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
    name(): "Raw" | "Chat" | "Translate" | "Popup" | "JukeboxPopup" | "Tip" | "SystemMessage" | "Whisper" | "Announcement" | "TextObjectWhisper" | "TextObject" | "TextObjectAnnouncement";
}