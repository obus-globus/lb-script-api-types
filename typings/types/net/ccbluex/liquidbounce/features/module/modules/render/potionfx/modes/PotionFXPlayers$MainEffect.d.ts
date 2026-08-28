import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { TextureMode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/utils/TextureMode.d.ts'
export class PotionFXPlayers$MainEffect extends ValueGroup {
    static INSTANCE: PotionFXPlayers$MainEffect;
    readonly radius: number;
    readonly rotationSpeed: number;
    readonly textureMode: ModeValueGroup<TextureMode>;
}