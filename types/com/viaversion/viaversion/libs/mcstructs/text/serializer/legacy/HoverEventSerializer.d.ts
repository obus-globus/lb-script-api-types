import type { TextComponent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { HoverEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/HoverEvent.d.ts'
import type { HoverEventAction } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/HoverEventAction.d.ts'
import type { AchievementHoverEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/impl/AchievementHoverEvent.d.ts'
import type { EntityHoverEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/impl/EntityHoverEvent.d.ts'
import type { ItemHoverEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/impl/ItemHoverEvent.d.ts'
import type { TextHoverEvent } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/impl/TextHoverEvent.d.ts'
import type { EventSerializer } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/legacy/EventSerializer.d.ts'
import type { EventSerializer$IOFunction } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/legacy/EventSerializer$IOFunction.d.ts'
import type { Predicate } from '../../../../../../../../java/util/function/Predicate.d.ts'
export class HoverEventSerializer<T extends HoverEvent> extends EventSerializer<HoverEvent, T, HoverEventAction, TextComponent> {
    static ACHIEVEMENT: HoverEventSerializer<AchievementHoverEvent>;
    static LEGACY_ENTITY: HoverEventSerializer<EntityHoverEvent>;
    static LEGACY_ITEM: HoverEventSerializer<ItemHoverEvent>;
    static TEXT: HoverEventSerializer<TextHoverEvent>;
    constructor(arg0: (param0: HoverEvent) => kotlin.Boolean, arg1: (param0: T, param1: TextComponent) => unknown, arg2: HoverEventAction, arg3: (param0: TextComponent, param1: T) => unknown)
}