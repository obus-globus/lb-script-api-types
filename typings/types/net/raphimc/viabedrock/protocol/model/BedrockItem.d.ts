import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { StructuredDataContainer } from '../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataContainer.d.ts'
import type { Item } from '../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class BedrockItem extends Object implements Item {
    static empty(): BedrockItem;
    static emptyArray(paramarg0: number): BedrockItem[];
    static isEmpty(paramarg0: Item): boolean;
    constructor(arg0: number)
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: Map$Entry<string, Tag>[])
    constructor(arg0: number, arg1: number, arg2: number, arg3: Map$Entry<string, Tag>[], arg4: string[], arg5: string[], arg6: number, arg7: number, arg8: number)
    // private id: number;
    amount(): number;
    blockRuntimeId(): number;
    blockingTicks(): number;
    canBreak(): string[];
    canPlace(): string[];
    copy(): BedrockItem;
    data(): number;
    dataContainer(): StructuredDataContainer;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    identifier(): number;
    isDifferent(arg0: BedrockItem): boolean;
    isEmpty(): boolean;
    isTemplate(): boolean;
    netId(): number;
    setAmount(arg0: number): void;
    setBlockRuntimeId(arg0: number): void;
    setBlockingTicks(arg0: number): void;
    setCanBreak(arg0: string[]): void;
    setCanPlace(arg0: string[]): void;
    setData(arg0: number): void;
    setIdentifier(arg0: number): void;
    setNetId(arg0: number): void;
    setTag(arg0: Map$Entry<string, Tag>[]): void;
    tag(): Map$Entry<string, Tag>[];
    toString(): string;
}