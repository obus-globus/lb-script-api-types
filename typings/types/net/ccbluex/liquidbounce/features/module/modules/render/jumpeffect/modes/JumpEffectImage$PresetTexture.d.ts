import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { TextureMode$Builtin$Preset } from '../../../../../../../../../net/ccbluex/liquidbounce/config/utils/TextureMode$Builtin$Preset.d.ts'
import type { DynamicTexture } from '../../../../../../../../../net/minecraft/client/renderer/texture/DynamicTexture.d.ts'
export class JumpEffectImage$PresetTexture extends Enum<JumpEffectImage$PresetTexture> implements TextureMode$Builtin$Preset {
    static Companion: Tagged$Companion;
    static LIQUIDBOUNCE: JumpEffectImage$PresetTexture;
    static LIQUIDBOUNCE_LOGO: JumpEffectImage$PresetTexture;
    static getEntries(): JumpEffectImage$PresetTexture[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): JumpEffectImage$PresetTexture;
    static values(): JumpEffectImage$PresetTexture[];
    private constructor(tag: string, path: string)
    readonly path: string;
    readonly tag: string;
    readonly texture: DynamicTexture;
    name(): "LIQUIDBOUNCE" | "LIQUIDBOUNCE_LOGO";
}