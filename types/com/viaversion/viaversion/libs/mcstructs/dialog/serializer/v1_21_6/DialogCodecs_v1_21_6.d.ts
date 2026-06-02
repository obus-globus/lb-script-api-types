import type { Codec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { Dialog } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/Dialog.d.ts'
import type { DialogSerializer } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/serializer/DialogSerializer.d.ts'
import type { DialogCodecs_v1_21_6$DialogCodecs } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/serializer/v1_21_6/DialogCodecs_v1_21_6$DialogCodecs.d.ts'
import type { Holder } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/registry/Holder.d.ts'
import type { Registry } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/registry/Registry.d.ts'
import type { TypedTagEntryList } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/registry/TypedTagEntryList.d.ts'
export class DialogCodecs_v1_21_6 extends DialogSerializer {
    static LATEST: DialogSerializer;
    static V1_21_6: DialogSerializer;
    constructor(arg0: Registry)
    readonly codec: Codec<Holder<Dialog>>;
    // private dialogCodecs: DialogCodecs_v1_21_6$DialogCodecs;
    readonly directCodec: Codec<Dialog>;
    readonly listCodec: Codec<TypedTagEntryList<Dialog>>;
    getCodec(): Codec<Holder<Dialog>>;
    getDirectCodec(): Codec<Dialog>;
    getListCodec(): Codec<TypedTagEntryList<Dialog>>;
}