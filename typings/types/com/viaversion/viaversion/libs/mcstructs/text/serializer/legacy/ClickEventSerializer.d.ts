import type { SNbt } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/snbt/SNbt.d.ts'
import type { ClickEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/ClickEvent.d.ts'
import type { ClickEventAction } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/ClickEventAction.d.ts'
import type { ChangePageClickEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/types/ChangePageClickEvent.d.ts'
import type { OpenFileClickEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/types/OpenFileClickEvent.d.ts'
import type { OpenUrlClickEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/types/OpenUrlClickEvent.d.ts'
import type { RunCommandClickEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/types/RunCommandClickEvent.d.ts'
import type { SuggestCommandClickEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/types/SuggestCommandClickEvent.d.ts'
import type { TwitchUserInfoClickEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/types/TwitchUserInfoClickEvent.d.ts'
import type { EventSerializer } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/legacy/EventSerializer.d.ts'
import type { EventSerializer$IOFunction } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/legacy/EventSerializer$IOFunction.d.ts'
import type { Predicate } from '../../../../../../../../java/util/function/Predicate.d.ts'
export class ClickEventSerializer<T extends ClickEvent> extends EventSerializer<ClickEvent, T, ClickEventAction, string> {
    static CHANGE_PAGE: ClickEventSerializer<ChangePageClickEvent>;
    static OPEN_FILE: ClickEventSerializer<OpenFileClickEvent>;
    static OPEN_URL: ClickEventSerializer<OpenUrlClickEvent>;
    static RUN_COMMAND: ClickEventSerializer<RunCommandClickEvent>;
    static SUGGEST_COMMAND: ClickEventSerializer<SuggestCommandClickEvent>;
    static TWITCH_USER_INFO: ClickEventSerializer<TwitchUserInfoClickEvent>;
    constructor(arg0: (param0: ClickEvent) => boolean, arg1: (param0: SNbt<any>, param1: T) => string, arg2: ClickEventAction, arg3: (param0: SNbt<any>, param1: string) => T)
}