import type { Codec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { MapCodec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/mapcodec/MapCodec.d.ts'
import type { DialogBody } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/body/DialogBody.d.ts'
import type { ItemBody } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/body/ItemBody.d.ts'
import type { PlainMessageBody } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/body/PlainMessageBody.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class DialogCodecs_v1_21_6$BodyCodecs extends Object {
    static DIALOG_BODY_CODEC: Codec<DialogBody>;
    static ITEM_BODY_MAP_CODEC: MapCodec<ItemBody>;
    static PLAIN_MESSAGE_BODY_CODEC: Codec<PlainMessageBody>;
    static PLAIN_MESSAGE_BODY_MAP_CODEC: MapCodec<PlainMessageBody>;
    constructor()
}