import type { Mode } from '../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
export class HeightMode extends Mode {
    static Companion: Tagged$Companion;
    protected constructor(name: string)
    getHeight(entity: Entity, partialTicks: number): number;
}