import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class TextProcessingEventOrigin extends Enum<TextProcessingEventOrigin> {
    static AnvilText: TextProcessingEventOrigin;
    static BlockActorDataText: TextProcessingEventOrigin;
    static BookAndQuillText: TextProcessingEventOrigin;
    static CartographyText: TextProcessingEventOrigin;
    static CommandBlockText: TextProcessingEventOrigin;
    static DataDrivenUI: TextProcessingEventOrigin;
    static JoinEventText: TextProcessingEventOrigin;
    static KickCommand: TextProcessingEventOrigin;
    static LeaveEventText: TextProcessingEventOrigin;
    static ServerChatPublic: TextProcessingEventOrigin;
    static ServerChatWhisper: TextProcessingEventOrigin;
    static ServerForm: TextProcessingEventOrigin;
    static SignText: TextProcessingEventOrigin;
    static SlashCommandChat: TextProcessingEventOrigin;
    static SummonCommand: TextProcessingEventOrigin;
    static TitleCommand: TextProcessingEventOrigin;
    static Unknown: TextProcessingEventOrigin;
    static getByName(paramarg0: string): TextProcessingEventOrigin;
    static getByName(paramarg0: string, paramarg1: TextProcessingEventOrigin): TextProcessingEventOrigin;
    static getByValue(paramarg0: number): TextProcessingEventOrigin;
    static getByValue(paramarg0: number, paramarg1: TextProcessingEventOrigin): TextProcessingEventOrigin;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TextProcessingEventOrigin;
    static values(): TextProcessingEventOrigin[];
    private constructor(arg2: number)
    private constructor(arg2: TextProcessingEventOrigin)
    readonly value: number;
    getValue(): number;
    name(): "Unknown" | "ServerChatPublic" | "ServerChatWhisper" | "SignText" | "AnvilText" | "BookAndQuillText" | "CommandBlockText" | "BlockActorDataText" | "JoinEventText" | "LeaveEventText" | "SlashCommandChat" | "CartographyText" | "KickCommand" | "TitleCommand" | "SummonCommand" | "ServerForm" | "DataDrivenUI";
}