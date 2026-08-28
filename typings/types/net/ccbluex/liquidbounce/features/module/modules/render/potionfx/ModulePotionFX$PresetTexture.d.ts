import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { TextureMode$Builtin$Preset } from '../../../../../../../../net/ccbluex/liquidbounce/config/utils/TextureMode$Builtin$Preset.d.ts'
import type { DynamicTexture } from '../../../../../../../../net/minecraft/client/renderer/texture/DynamicTexture.d.ts'
export class ModulePotionFX$PresetTexture extends Enum<ModulePotionFX$PresetTexture> implements TextureMode$Builtin$Preset {
    static ATLAS: ModulePotionFX$PresetTexture;
    static Companion: Tagged$Companion;
    static DASHED: ModulePotionFX$PresetTexture;
    static RUNES: ModulePotionFX$PresetTexture;
    static SOLID: ModulePotionFX$PresetTexture;
    static getEntries(): ModulePotionFX$PresetTexture[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModulePotionFX$PresetTexture;
    static values(): ModulePotionFX$PresetTexture[];
    private constructor(tag: string, path: string)
    readonly path: string;
    readonly tag: string;
    readonly texture: DynamicTexture;
    name(): "DASHED" | "SOLID" | "RUNES" | "ATLAS";
}