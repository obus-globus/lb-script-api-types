import type { Codec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { MapCodec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/mapcodec/MapCodec.d.ts'
import type { NamedType } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/types/NamedType.d.ts'
import type { Style } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/Style.d.ts'
import type { TextComponent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { KeybindComponent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/components/KeybindComponent.d.ts'
import type { NbtComponent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/components/NbtComponent.d.ts'
import type { ScoreComponent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/components/ScoreComponent.d.ts'
import type { SelectorComponent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/components/SelectorComponent.d.ts'
import type { StringComponent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/components/StringComponent.d.ts'
import type { TranslationComponent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/components/TranslationComponent.d.ts'
import type { TextCodecs_v1_20_3$TextComponentType } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/v1_20_3/TextCodecs_v1_20_3$TextComponentType.d.ts'
import type { Function } from '../../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class TextCodecs_v1_20_3 extends Object {
    static KEYBIND_COMPONENT: MapCodec<KeybindComponent>;
    static NBT_COMPONENT: MapCodec<NbtComponent>;
    static SCORE_COMPONENT: MapCodec<ScoreComponent>;
    static SELECTOR_COMPONENT: MapCodec<SelectorComponent>;
    static STRING_COMPONENT: MapCodec<StringComponent>;
    static TEXT: Codec<TextComponent>;
    static TRANSLATION_COMPONENT: MapCodec<TranslationComponent>;
    static createCodec(paramarg0: Codec<TextComponent>, paramarg1: MapCodec<Style>, paramarg2: (TextCodecs_v1_20_3$TextComponentType | null)[], paramarg3: (param0: TextComponent) => TextCodecs_v1_20_3$TextComponentType | null): Codec<TextComponent>;
    static createLegacyComponentMatcher(paramarg0: (NamedType | null)[], paramarg1: (param0: NamedType | null) => MapCodec<Object>, paramarg2: (param0: Object | null) => NamedType | null, paramarg3: string): MapCodec<Object>;
    static tryCollapse(paramarg0: TextComponent): string;
    constructor()
}