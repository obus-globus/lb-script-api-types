import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { TextureMode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/utils/TextureMode.d.ts'
export class PotionFXSplash$MainEffect extends ValueGroup {
    static INSTANCE: PotionFXSplash$MainEffect;
    readonly fadeStart: number;
    readonly lifetime: { start: number; endInclusive: number; step: number };
    readonly radius: number;
    readonly rotationSpeed: number;
    readonly textureMode: ModeValueGroup<TextureMode>;
}