import type { Codec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { MapCodec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/mapcodec/MapCodec.d.ts'
import type { TextComponent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { KeybindComponent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/components/KeybindComponent.d.ts'
import type { NbtComponent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/components/NbtComponent.d.ts'
import type { ScoreComponent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/components/ScoreComponent.d.ts'
import type { SelectorComponent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/components/SelectorComponent.d.ts'
import type { StringComponent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/components/StringComponent.d.ts'
import type { TranslationComponent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/components/TranslationComponent.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class TextCodecs_v1_20_5 extends Object {
    static KEYBIND_COMPONENT: MapCodec<KeybindComponent>;
    static NBT_COMPONENT: MapCodec<NbtComponent>;
    static SCORE_COMPONENT: MapCodec<ScoreComponent>;
    static SELECTOR_COMPONENT: MapCodec<SelectorComponent>;
    static STRING_COMPONENT: MapCodec<StringComponent>;
    static TEXT: Codec<TextComponent>;
    static TRANSLATION_COMPONENT: MapCodec<TranslationComponent>;
    constructor()
}