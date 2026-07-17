import type { ModeValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { HeightMode } from '../../../../../net/ccbluex/liquidbounce/utils/render/HeightMode.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
export class HeightMode$Feet extends HeightMode {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<any>)
    // private offset: number;
    // private /*not mapped: */ getOffset(): number;
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    getHeight(entity: Entity, partialTicks: number): number;
}