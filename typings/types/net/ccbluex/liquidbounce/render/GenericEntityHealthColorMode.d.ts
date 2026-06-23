import type { ModeValueGroup } from '../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { GenericColorMode } from '../../../../net/ccbluex/liquidbounce/render/GenericColorMode.d.ts'
import type { Color4b } from '../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class GenericEntityHealthColorMode extends GenericColorMode<LivingEntity> {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<any>)
    // private alpha: number;
    // private /*not mapped: */ getAlpha(): number;
    readonly parent: ModeValueGroup<any>;
    getColor(param: LivingEntity): Color4b;
}