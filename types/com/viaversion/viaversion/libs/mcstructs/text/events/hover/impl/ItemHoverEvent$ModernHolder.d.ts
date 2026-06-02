import type { Tag } from '../../../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Identifier } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/core/Identifier.d.ts'
import type { ItemHoverEvent$DataHolder } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/impl/ItemHoverEvent$DataHolder.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../../../../java/util/Map$Entry.d.ts'
export class ItemHoverEvent$ModernHolder extends Object implements ItemHoverEvent$DataHolder {
    constructor(arg0: Identifier, arg1: number, arg2: Map$Entry<string, Tag>[])
    readonly count: number;
    readonly id: Identifier;
    readonly tag: Map$Entry<string, Tag>[];
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getCount(): number;
    getId(): Identifier;
    getTag(): Map$Entry<string, Tag>[];
    hashCode(): number;
    setCount(arg0: number): void;
    setId(arg0: Identifier): void;
    setTag(arg0: Map$Entry<string, Tag>[]): void;
    toString(): string;
}