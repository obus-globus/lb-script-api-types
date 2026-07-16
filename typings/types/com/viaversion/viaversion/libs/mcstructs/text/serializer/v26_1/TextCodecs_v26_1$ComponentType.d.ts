import type { MapCodec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/mapcodec/MapCodec.d.ts'
import type { TextComponent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { TextCodecs_v1_20_3$TextComponentType } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/v1_20_3/TextCodecs_v1_20_3$TextComponentType.d.ts'
import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class TextCodecs_v26_1$ComponentType extends Enum<TextCodecs_v26_1$ComponentType> implements TextCodecs_v1_20_3$TextComponentType {
    static KEYBIND: TextCodecs_v26_1$ComponentType;
    static NBT: TextCodecs_v26_1$ComponentType;
    static OBJECT: TextCodecs_v26_1$ComponentType;
    static SCORE: TextCodecs_v26_1$ComponentType;
    static SELECTOR: TextCodecs_v26_1$ComponentType;
    static STRING: TextCodecs_v26_1$ComponentType;
    static TRANSLATION: TextCodecs_v26_1$ComponentType;
    static forComponent(paramarg0: TextComponent): TextCodecs_v26_1$ComponentType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TextCodecs_v26_1$ComponentType;
    static values(): TextCodecs_v26_1$ComponentType[];
    private constructor(arg2: string, arg3: MapCodec<TextComponent>)
    readonly codec: MapCodec<TextComponent>;
    getCodec(): MapCodec<TextComponent>;
    getName(): string;
    name(): "STRING" | "TRANSLATION" | "KEYBIND" | "SCORE" | "SELECTOR" | "NBT" | "OBJECT";
}