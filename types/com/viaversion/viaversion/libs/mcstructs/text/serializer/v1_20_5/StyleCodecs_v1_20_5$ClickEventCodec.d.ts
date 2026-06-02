import type { Codec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { MapCodec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/mapcodec/MapCodec.d.ts'
import type { ClickEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/ClickEvent.d.ts'
import type { ChangePageClickEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/types/ChangePageClickEvent.d.ts'
import type { CopyToClipboardClickEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/types/CopyToClipboardClickEvent.d.ts'
import type { OpenFileClickEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/types/OpenFileClickEvent.d.ts'
import type { OpenUrlClickEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/types/OpenUrlClickEvent.d.ts'
import type { RunCommandClickEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/types/RunCommandClickEvent.d.ts'
import type { SuggestCommandClickEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/types/SuggestCommandClickEvent.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class StyleCodecs_v1_20_5$ClickEventCodec extends Object {
    static CHANGE_PAGE: MapCodec<ChangePageClickEvent>;
    static CODEC: Codec<ClickEvent>;
    static COPY_TO_CLIPBOARD: MapCodec<CopyToClipboardClickEvent>;
    static OPEN_FILE: MapCodec<OpenFileClickEvent>;
    static OPEN_URL: MapCodec<OpenUrlClickEvent>;
    static RUN_COMMAND: MapCodec<RunCommandClickEvent>;
    static SUGGEST_COMMAND: MapCodec<SuggestCommandClickEvent>;
    constructor()
}