import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { TextureMode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/utils/TextureMode.d.ts'
export class PotionFXLingering$MainEffect extends ValueGroup {
    static INSTANCE: PotionFXLingering$MainEffect;
    readonly extraRadius: number;
    readonly rotationSpeed: number;
    readonly textureMode: ModeValueGroup<TextureMode>;
}