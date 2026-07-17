import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { TranslationResult$Success } from '../../../../../../../net/ccbluex/liquidbounce/api/thirdparty/translator/TranslationResult$Success.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { TitleEvent$TextContent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/TitleEvent$TextContent.d.ts'
import type { TitleType } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/TitleType.d.ts'
export class ShowIn extends Enum<ShowIn> implements Tagged {
    static CHAT: ShowIn;
    static Companion: Tagged$Companion;
    static MESSAGE: ShowIn;
    static getEntries(): ShowIn[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ShowIn;
    static values(): ShowIn[];
    private constructor(tag: string, show: (param0: TitleType, param1: TitleEvent$TextContent, param2: TranslationResult$Success) => void)
    readonly show: (param0: TitleType, param1: TitleEvent$TextContent, param2: TranslationResult$Success) => void;
    readonly tag: string;
    name(): "CHAT" | "MESSAGE";
}