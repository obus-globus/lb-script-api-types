import type { MapCodec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/mapcodec/MapCodec.d.ts'
import type { ConfirmationDialog } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/impl/ConfirmationDialog.d.ts'
import type { DialogListDialog } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/impl/DialogListDialog.d.ts'
import type { MultiActionDialog } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/impl/MultiActionDialog.d.ts'
import type { NoticeDialog } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/impl/NoticeDialog.d.ts'
import type { ServerLinksDialog } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/impl/ServerLinksDialog.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class DialogCodecs_v1_21_6$DialogCodecs extends Object {
    constructor(null_: DialogCodecs_v1_21_6$DialogCodecs)
    confirmationDialogMapCodec: MapCodec<ConfirmationDialog>;
    dialogListDialogMapCodec: MapCodec<DialogListDialog>;
    multiActionDialogMapCodec: MapCodec<MultiActionDialog>;
    noticeDialogMapCodec: MapCodec<NoticeDialog>;
    serverLinksDialogMapCodec: MapCodec<ServerLinksDialog>;
}