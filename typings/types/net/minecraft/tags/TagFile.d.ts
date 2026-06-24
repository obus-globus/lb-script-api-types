import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { FabricTagFile } from '../../../net/fabricmc/fabric/api/tag/v1/FabricTagFile.d.ts'
import type { TagFileHooks } from '../../../net/fabricmc/fabric/impl/tag/TagFileHooks.d.ts'
import type { TagEntry } from '../../../net/minecraft/tags/TagEntry.d.ts'
export class TagFile extends Record implements FabricTagFile, TagFileHooks {
    static CODEC: Codec<TagFile>;
    constructor(entries: TagEntry[], replace: boolean)
    // private entries: TagEntry[];
    // private remove: (Object | null)[];
    // private replace: boolean;
    entries(): TagEntry[];
    equals(o: Object | null): boolean;
    fabric_setRemove(arg0: (Object | null)[]): void;
    hashCode(): number;
    remove(): TagEntry[];
    remove(): (Object | null)[];
    replace(): boolean;
    toString(): string;
}