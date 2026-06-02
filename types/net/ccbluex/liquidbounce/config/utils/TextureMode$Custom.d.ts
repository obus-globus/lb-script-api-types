import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModeValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { TextureMode } from '../../../../../net/ccbluex/liquidbounce/config/utils/TextureMode.d.ts'
import type { DynamicTexture } from '../../../../../net/minecraft/client/renderer/texture/DynamicTexture.d.ts'
export class TextureMode$Custom extends TextureMode {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<Object>)
    readonly parent: ModeValueGroup<Object>;
    readonly texture: DynamicTexture | null;
}