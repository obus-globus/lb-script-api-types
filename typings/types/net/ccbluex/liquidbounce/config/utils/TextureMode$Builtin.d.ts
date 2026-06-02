import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModeValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ChoiceListValue } from '../../../../../net/ccbluex/liquidbounce/config/types/list/ChoiceListValue.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { TextureMode } from '../../../../../net/ccbluex/liquidbounce/config/utils/TextureMode.d.ts'
import type { TextureMode$Builtin$Preset } from '../../../../../net/ccbluex/liquidbounce/config/utils/TextureMode$Builtin$Preset.d.ts'
import type { DynamicTexture } from '../../../../../net/minecraft/client/renderer/texture/DynamicTexture.d.ts'
export class TextureMode$Builtin<T extends TextureMode$Builtin$Preset> extends TextureMode {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<Object>, default_: T, choices: T[])
    // private mode: ChoiceListValue<T>;
    readonly parent: ModeValueGroup<Object>;
    readonly texture: DynamicTexture | null;
}