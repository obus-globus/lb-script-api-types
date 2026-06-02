import type { Tag } from '../../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Codec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { ActionButton } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/ActionButton.d.ts'
import type { AfterAction } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/AfterAction.d.ts'
import type { Input } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/Input.d.ts'
import type { ParsedTemplate } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/template/ParsedTemplate.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../../../java/util/Map$Entry.d.ts'
export class DialogCodecs_v1_21_6$InternalCodecs extends Object {
    static ACTION_BUTTON_CODEC: Codec<ActionButton>;
    static AFTER_ACTION_CODEC: Codec<AfterAction>;
    static COMPOUND_TAG_CODEC: Codec<Map$Entry<string, Tag>[]>;
    static INPUT_CODEC: Codec<Input>;
    static PARSED_TEMPLATE_CODEC: Codec<ParsedTemplate>;
    static PARSED_TEMPLATE_VARIABLE_CODEC: Codec<string>;
    constructor()
}