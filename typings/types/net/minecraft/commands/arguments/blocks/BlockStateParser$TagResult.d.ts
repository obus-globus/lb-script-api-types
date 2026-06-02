import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
export class BlockStateParser$TagResult extends Record {
    constructor(tag: Holder<T>[], vagueProperties: { [key: string]: string }, nbt: CompoundTag)
    // private nbt: CompoundTag;
    // private tag: Holder<T>[];
    // private vagueProperties: { [key: string]: string };
    equals(o: Object | null): boolean;
    hashCode(): number;
    nbt(): CompoundTag;
    tag(): Holder<T>[];
    toString(): string;
    vagueProperties(): { [key: string]: string };
}