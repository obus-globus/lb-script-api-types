import type { Comparator } from '../../../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { MinimapHudComponent$EntityValueGroup$OutOfBounds } from '../../../../../../../../net/ccbluex/liquidbounce/integration/theme/component/components/minimap/MinimapHudComponent$EntityValueGroup$OutOfBounds.d.ts'
import type { LivingEntity } from '../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class MinimapHudComponent$EntityValueGroup extends ToggleableValueGroup {
    static INSTANCE: MinimapHudComponent$EntityValueGroup;
    // private MINIMAP_ENTITY_ORDER: (param0: Object) => boolean;
    readonly entities: LivingEntity[];
    readonly outOfBounds: MinimapHudComponent$EntityValueGroup$OutOfBounds;
    readonly scale: number;
    onDisabled(): void;
    onEnabled(): void;
}