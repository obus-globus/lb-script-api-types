import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
export class ModuleStorageESP$ChestType extends ToggleableValueGroup {
    protected constructor(name: string, defaultColor: Color4b)
    readonly color: Color4b;
    getColor(): Color4b;
    readonly tracers: boolean;
    shouldRender(pos: BlockPos, ignoreDistance?: boolean): boolean;
    shouldRender(entity: Entity, ignoreDistance?: boolean): boolean;
}