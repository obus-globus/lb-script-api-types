import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Tag } from '../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Identifier } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/core/Identifier.d.ts'
import type { DialogAction } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/action/DialogAction.d.ts'
import type { ValueGetter } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/action/ValueGetter.d.ts'
import type { ClickEvent } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/click/ClickEvent.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../../java/util/Map$Entry.d.ts'
export class CustomAllAction extends Object implements DialogAction {
    constructor(arg0: Identifier, arg1: Map$Entry<string, Tag>[])
    readonly additions: Map$Entry<string, Tag>[];
    readonly id: Identifier;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getAdditions(): Map$Entry<string, Tag>[];
    getId(): Identifier;
    hashCode(): number;
    setAdditions(arg0: Map$Entry<string, Tag>[]): void;
    setId(arg0: Identifier): void;
    toAction(arg0: JavaMap<string, ValueGetter>): ClickEvent;
    toString(): string;
}