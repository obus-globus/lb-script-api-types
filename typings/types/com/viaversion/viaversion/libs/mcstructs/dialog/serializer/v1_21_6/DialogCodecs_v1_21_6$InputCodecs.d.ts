import type { MapCodec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/mapcodec/MapCodec.d.ts'
import type { BooleanInput } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/input/BooleanInput.d.ts'
import type { DialogInput } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/input/DialogInput.d.ts'
import type { NumberRangeInput } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/input/NumberRangeInput.d.ts'
import type { SingleOptionInput } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/input/SingleOptionInput.d.ts'
import type { TextInput } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/input/TextInput.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class DialogCodecs_v1_21_6$InputCodecs extends Object {
    static BOOLEAN_INPUT_MAP_CODEC: MapCodec<BooleanInput>;
    static DIALOG_INPUT_MAP_CODEC: MapCodec<DialogInput>;
    static NUMBER_RANGE_INPUT_MAP_CODEC: MapCodec<NumberRangeInput>;
    static SINGLE_OPTION_INPUT_MAP_CODEC: MapCodec<SingleOptionInput>;
    static TEXT_INPUT_MAP_CODEC: MapCodec<TextInput>;
    constructor()
}