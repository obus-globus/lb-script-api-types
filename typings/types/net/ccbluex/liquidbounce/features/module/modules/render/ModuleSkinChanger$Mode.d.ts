import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { PlayerSkin } from '../../../../../../../net/minecraft/world/entity/player/PlayerSkin.d.ts'
export class ModuleSkinChanger$Mode extends Mode {
    static Companion: Tagged$Companion;
    protected constructor(name: string)
    readonly parent: ModeValueGroup<any>;
    readonly skinTextures: (() => PlayerSkin) | null;
    uploadSkin(): void;
}