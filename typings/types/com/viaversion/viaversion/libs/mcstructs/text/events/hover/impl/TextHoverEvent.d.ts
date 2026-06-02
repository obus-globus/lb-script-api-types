import type { Tag } from '../../../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Identifier } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/core/Identifier.d.ts'
import type { TextComponent } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { HoverEvent } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/HoverEvent.d.ts'
import type { AchievementHoverEvent } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/impl/AchievementHoverEvent.d.ts'
import type { EntityHoverEvent } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/impl/EntityHoverEvent.d.ts'
import type { ItemHoverEvent } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/impl/ItemHoverEvent.d.ts'
import type { UUID } from '../../../../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../../../../java/util/Map$Entry.d.ts'
export class TextHoverEvent extends HoverEvent {
    static achievement(paramarg0: string): AchievementHoverEvent;
    static entity(paramarg0: Identifier, paramarg1: UUID, paramarg2: TextComponent): EntityHoverEvent;
    static item(paramarg0: Identifier, paramarg1: number, paramarg2: Map$Entry<string, Tag>[]): ItemHoverEvent;
    static text(paramarg0: TextComponent): TextHoverEvent;
    constructor(arg0: TextComponent)
    readonly text: TextComponent;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getText(): TextComponent;
    hashCode(): number;
    setText(arg0: TextComponent): TextHoverEvent;
    toString(): string;
}