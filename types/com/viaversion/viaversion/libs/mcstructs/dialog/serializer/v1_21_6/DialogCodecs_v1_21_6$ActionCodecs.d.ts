import type { Codec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { MapCodec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/mapcodec/MapCodec.d.ts'
import type { CommandTemplateAction } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/action/CommandTemplateAction.d.ts'
import type { CustomAllAction } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/action/CustomAllAction.d.ts'
import type { DialogAction } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/action/DialogAction.d.ts'
import type { StaticAction } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/action/StaticAction.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class DialogCodecs_v1_21_6$ActionCodecs extends Object {
    static CHANGE_PAGE_STATIC_ACTION_MAP_CODEC: MapCodec<StaticAction>;
    static COMMAND_TEMPLATE_ACTION_MAP_CODEC: MapCodec<CommandTemplateAction>;
    static COPY_TO_CLIPBOARD_STATIC_ACTION_MAP_CODEC: MapCodec<StaticAction>;
    static CUSTOM_ALL_ACTION_MAP_CODEC: MapCodec<CustomAllAction>;
    static CUSTOM_STATIC_ACTION_MAP_CODEC: MapCodec<StaticAction>;
    static DIALOG_ACTION_CODEC: Codec<DialogAction>;
    static OPEN_URL_STATIC_ACTION_MAP_CODEC: MapCodec<StaticAction>;
    static RUN_COMMAND_STATIC_ACTION_MAP_CODEC: MapCodec<StaticAction>;
    static SHOW_DIALOG_STATIC_ACTION_MAP_CODEC: MapCodec<StaticAction>;
    static SUGGEST_COMMAND_STATIC_ACTION_MAP_CODEC: MapCodec<StaticAction>;
    constructor()
}