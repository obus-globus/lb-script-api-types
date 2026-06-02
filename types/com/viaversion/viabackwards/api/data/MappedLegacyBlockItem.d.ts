import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { MappedLegacyBlockItem$BlockEntityHandler } from '../../../../../com/viaversion/viabackwards/api/data/MappedLegacyBlockItem$BlockEntityHandler.d.ts'
import type { MappedLegacyBlockItem$Type } from '../../../../../com/viaversion/viabackwards/api/data/MappedLegacyBlockItem$Type.d.ts'
import type { IdAndData } from '../../../../../com/viaversion/viaversion/util/IdAndData.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class MappedLegacyBlockItem extends Object {
    constructor(arg0: number)
    constructor(arg0: number, arg1: number, arg2: string, arg3: MappedLegacyBlockItem$Type)
    readonly block: IdAndData;
    readonly blockEntityHandler: (param0: number, param1: Map$Entry<string, Tag>[]) => void;
    readonly data: number;
    readonly id: number;
    readonly name: string;
    getBlock(): IdAndData;
    getBlockEntityHandler(): (param0: number, param1: Map$Entry<string, Tag>[]) => void;
    getData(): number;
    getId(): number;
    getName(): string;
    hasBlockEntityHandler(): boolean;
    setBlockEntityHandler(arg0: (param0: number, param1: Map$Entry<string, Tag>[]) => void): void;
}