import type { Codec } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { Dialog } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/Dialog.d.ts'
import type { Holder } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/registry/Holder.d.ts'
import type { TypedTagEntryList } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/registry/TypedTagEntryList.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class DialogSerializer extends Object {
    static LATEST: DialogSerializer;
    static V1_21_6: DialogSerializer;
    constructor()
    getCodec(): Codec<Holder<Dialog>>;
    getDirectCodec(): Codec<Dialog>;
    getListCodec(): Codec<TypedTagEntryList<Dialog>>;
}