import type { DynamicOps } from '../../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { Tag } from '../../../../../net/minecraft/nbt/Tag.d.ts'
import type { ValueInput } from '../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
export class ValueInputContextHelper extends Object {
    constructor(lookup: HolderLookup$Provider, ops: DynamicOps<Tag>)
    // private empty: ValueInput;
    // private emptyChildList: ValueInput[];
    // private emptyTypedList: Object[];
    // private lookup: HolderLookup$Provider;
    // private ops: DynamicOps<Tag>;
    empty(): ValueInput;
    emptyList(): ValueInput[];
    emptyTypedList<T extends unknown>(): T[];
    lookup(): HolderLookup$Provider;
    ops(): DynamicOps<Tag>;
}