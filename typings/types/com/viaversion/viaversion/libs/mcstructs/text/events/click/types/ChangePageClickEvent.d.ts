import type { Tag } from '../../../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { SerializedData } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/SerializedData.d.ts'
import type { Identifier } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/core/Identifier.d.ts'
import type { ClickEvent } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/ClickEvent.d.ts'
import type { ChangePageClickEvent$PageHolder } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/types/ChangePageClickEvent$PageHolder.d.ts'
import type { CopyToClipboardClickEvent } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/types/CopyToClipboardClickEvent.d.ts'
import type { CustomClickEvent } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/types/CustomClickEvent.d.ts'
import type { OpenFileClickEvent } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/types/OpenFileClickEvent.d.ts'
import type { OpenUrlClickEvent } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/types/OpenUrlClickEvent.d.ts'
import type { RunCommandClickEvent } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/types/RunCommandClickEvent.d.ts'
import type { ShowDialogClickEvent } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/types/ShowDialogClickEvent.d.ts'
import type { SuggestCommandClickEvent } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/types/SuggestCommandClickEvent.d.ts'
import type { TwitchUserInfoClickEvent } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/types/TwitchUserInfoClickEvent.d.ts'
import type { URI } from '../../../../../../../../../java/net/URI.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
export class ChangePageClickEvent extends ClickEvent {
    static changePage(paramarg0: number): ChangePageClickEvent;
    static copyToClipboard(paramarg0: string): CopyToClipboardClickEvent;
    static custom(paramarg0: Identifier, paramarg1: Tag): CustomClickEvent;
    static openFile(paramarg0: string): OpenFileClickEvent;
    static openUrl(paramarg0: string): OpenUrlClickEvent;
    static openUrl(paramarg0: URI): OpenUrlClickEvent;
    static runCommand(paramarg0: string): RunCommandClickEvent;
    static showDialog(paramarg0: SerializedData<Object>): ShowDialogClickEvent;
    static suggestCommand(paramarg0: string): SuggestCommandClickEvent;
    static twitchUserInfo(paramarg0: string): TwitchUserInfoClickEvent;
    constructor(arg0: number)
    constructor(arg0: string)
    // private page: ChangePageClickEvent$PageHolder;
    asInt(): number;
    asString(): string;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getHolder(): ChangePageClickEvent$PageHolder;
    hashCode(): number;
    setPage(arg0: number): ChangePageClickEvent;
    setPage(arg0: string): ChangePageClickEvent;
    toString(): string;
}