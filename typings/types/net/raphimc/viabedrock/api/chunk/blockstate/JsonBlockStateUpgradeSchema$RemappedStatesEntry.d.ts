import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class JsonBlockStateUpgradeSchema$RemappedStatesEntry extends Record {
    private constructor(oldStateTag: Map$Entry<string, Tag>[], newStateTag: Map$Entry<string, Tag>[], copiedStates: string[], nameFunction: (param0: Map$Entry<string, Tag>[]) => string)
    // private copiedStates: string[];
    // private nameFunction: (param0: Map$Entry<string, Tag>[]) => string;
    // private newStateTag: Map$Entry<string, Tag>[];
    // private oldStateTag: Map$Entry<string, Tag>[];
    copiedStates(): string[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    nameFunction(): (param0: Map$Entry<string, Tag>[]) => string;
    newStateTag(): Map$Entry<string, Tag>[];
    oldStateTag(): Map$Entry<string, Tag>[];
    toString(): string;
}