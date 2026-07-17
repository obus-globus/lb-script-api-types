import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { Entity } from '../../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
export class EspMode extends Mode {
    static Companion: Tagged$Companion;
    protected constructor(name: string, requiresTrueSight: boolean)
    readonly parent: ModeValueGroup<EspMode>;
    getParent(): ModeValueGroup<EspMode>;
    readonly requiresTrueSight: boolean;
    shouldRender(entity: Entity | null): boolean;
}