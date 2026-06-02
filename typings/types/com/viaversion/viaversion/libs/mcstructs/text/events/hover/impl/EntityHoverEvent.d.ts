import type { Tag } from '../../../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Identifier } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/core/Identifier.d.ts'
import type { TextComponent } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { HoverEvent } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/HoverEvent.d.ts'
import type { AchievementHoverEvent } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/impl/AchievementHoverEvent.d.ts'
import type { EntityHoverEvent$DataHolder } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/impl/EntityHoverEvent$DataHolder.d.ts'
import type { EntityHoverEvent$LegacyHolder } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/impl/EntityHoverEvent$LegacyHolder.d.ts'
import type { EntityHoverEvent$ModernHolder } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/impl/EntityHoverEvent$ModernHolder.d.ts'
import type { ItemHoverEvent } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/impl/ItemHoverEvent.d.ts'
import type { TextHoverEvent } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/impl/TextHoverEvent.d.ts'
import type { UUID } from '../../../../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../../../../java/util/Map$Entry.d.ts'
export class EntityHoverEvent extends HoverEvent {
    static achievement(paramarg0: string): AchievementHoverEvent;
    static entity(paramarg0: Identifier, paramarg1: UUID, paramarg2: TextComponent): EntityHoverEvent;
    static item(paramarg0: Identifier, paramarg1: number, paramarg2: Map$Entry<string, Tag>[]): ItemHoverEvent;
    static text(paramarg0: TextComponent): TextHoverEvent;
    constructor(arg0: Identifier, arg1: UUID, arg2: TextComponent)
    constructor(arg0: TextComponent)
    constructor(arg0: EntityHoverEvent$DataHolder)
    readonly data: EntityHoverEvent$DataHolder;
    asLegacy(): EntityHoverEvent$LegacyHolder;
    asModern(): EntityHoverEvent$ModernHolder;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getData(): EntityHoverEvent$DataHolder;
    hashCode(): number;
    isLegacy(): boolean;
    isModern(): boolean;
    setData(arg0: EntityHoverEvent$DataHolder): EntityHoverEvent;
    setLegacyData(arg0: TextComponent): EntityHoverEvent;
    setModernData(arg0: Identifier, arg1: UUID, arg2: TextComponent): EntityHoverEvent;
    toString(): string;
}