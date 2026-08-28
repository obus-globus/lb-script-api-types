import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { TextureMode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/utils/TextureMode.d.ts'
export class PotionFXPlayers$SecondEffect extends ToggleableValueGroup {
    static INSTANCE: PotionFXPlayers$SecondEffect;
    readonly extraRadius: number;
    readonly rotationSpeed: number;
    readonly secondaryTextureMode: ModeValueGroup<TextureMode>;
}