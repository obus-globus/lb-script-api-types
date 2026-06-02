import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class SetTitlePacket_TitleType extends Enum<SetTitlePacket_TitleType> {
    static Actionbar: SetTitlePacket_TitleType;
    static ActionbarTextObject: SetTitlePacket_TitleType;
    static Clear: SetTitlePacket_TitleType;
    static Reset: SetTitlePacket_TitleType;
    static Subtitle: SetTitlePacket_TitleType;
    static SubtitleTextObject: SetTitlePacket_TitleType;
    static Times: SetTitlePacket_TitleType;
    static Title: SetTitlePacket_TitleType;
    static TitleTextObject: SetTitlePacket_TitleType;
    static getByName(paramarg0: string): SetTitlePacket_TitleType;
    static getByName(paramarg0: string, paramarg1: SetTitlePacket_TitleType): SetTitlePacket_TitleType;
    static getByValue(paramarg0: number): SetTitlePacket_TitleType;
    static getByValue(paramarg0: number, paramarg1: SetTitlePacket_TitleType): SetTitlePacket_TitleType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SetTitlePacket_TitleType;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: SetTitlePacket_TitleType)
    readonly value: number;
    getValue(): number;
    name(): "Clear" | "Reset" | "Title" | "Subtitle" | "Actionbar" | "Times" | "TitleTextObject" | "SubtitleTextObject" | "ActionbarTextObject";
}