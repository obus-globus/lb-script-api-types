import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class SetTitlePacketPayload_TitleType extends Enum<SetTitlePacketPayload_TitleType> {
    static Actionbar: SetTitlePacketPayload_TitleType;
    static ActionbarTextObject: SetTitlePacketPayload_TitleType;
    static Clear: SetTitlePacketPayload_TitleType;
    static Reset: SetTitlePacketPayload_TitleType;
    static Subtitle: SetTitlePacketPayload_TitleType;
    static SubtitleTextObject: SetTitlePacketPayload_TitleType;
    static Times: SetTitlePacketPayload_TitleType;
    static Title: SetTitlePacketPayload_TitleType;
    static TitleTextObject: SetTitlePacketPayload_TitleType;
    static getByName(paramarg0: string): SetTitlePacketPayload_TitleType;
    static getByName(paramarg0: string, paramarg1: SetTitlePacketPayload_TitleType): SetTitlePacketPayload_TitleType;
    static getByValue(paramarg0: number): SetTitlePacketPayload_TitleType;
    static getByValue(paramarg0: number, paramarg1: SetTitlePacketPayload_TitleType): SetTitlePacketPayload_TitleType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SetTitlePacketPayload_TitleType;
    static values(): SetTitlePacketPayload_TitleType[];
    private constructor(arg2: number)
    private constructor(arg2: SetTitlePacketPayload_TitleType)
    readonly value: number;
    getValue(): number;
    name(): "Clear" | "Reset" | "Title" | "Subtitle" | "Actionbar" | "Times" | "TitleTextObject" | "SubtitleTextObject" | "ActionbarTextObject";
}