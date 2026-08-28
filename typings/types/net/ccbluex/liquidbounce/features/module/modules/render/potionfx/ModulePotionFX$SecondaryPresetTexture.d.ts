import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { TextureMode$Builtin$Preset } from '../../../../../../../../net/ccbluex/liquidbounce/config/utils/TextureMode$Builtin$Preset.d.ts'
import type { DynamicTexture } from '../../../../../../../../net/minecraft/client/renderer/texture/DynamicTexture.d.ts'
export class ModulePotionFX$SecondaryPresetTexture extends Enum<ModulePotionFX$SecondaryPresetTexture> implements TextureMode$Builtin$Preset {
    static CRACKED: ModulePotionFX$SecondaryPresetTexture;
    static Companion: Tagged$Companion;
    static HEXAGON: ModulePotionFX$SecondaryPresetTexture;
    static NEURON: ModulePotionFX$SecondaryPresetTexture;
    static STARDUST: ModulePotionFX$SecondaryPresetTexture;
    static getEntries(): ModulePotionFX$SecondaryPresetTexture[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModulePotionFX$SecondaryPresetTexture;
    static values(): ModulePotionFX$SecondaryPresetTexture[];
    private constructor(tag: string, path: string)
    readonly path: string;
    readonly tag: string;
    readonly texture: DynamicTexture;
    name(): "CRACKED" | "NEURON" | "HEXAGON" | "STARDUST";
}