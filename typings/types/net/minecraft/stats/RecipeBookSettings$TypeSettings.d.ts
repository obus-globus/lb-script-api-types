import type { MapCodec } from '../../../com/mojang/serialization/MapCodec.d.ts'
import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class RecipeBookSettings$TypeSettings extends Record {
    static BLAST_FURNACE_MAP_CODEC: MapCodec<RecipeBookSettings$TypeSettings>;
    static CRAFTING_MAP_CODEC: MapCodec<RecipeBookSettings$TypeSettings>;
    static DEFAULT: RecipeBookSettings$TypeSettings;
    static FURNACE_MAP_CODEC: MapCodec<RecipeBookSettings$TypeSettings>;
    static SMOKER_MAP_CODEC: MapCodec<RecipeBookSettings$TypeSettings>;
    static STREAM_CODEC: StreamCodec<ByteBuf, RecipeBookSettings$TypeSettings>;
    constructor(open: boolean, filtering: boolean)
    // private filtering: boolean;
    // private open: boolean;
    equals(o: Object | null): boolean;
    filtering(): boolean;
    hashCode(): number;
    open(): boolean;
    setFiltering(filtering: boolean): RecipeBookSettings$TypeSettings;
    setOpen(open: boolean): RecipeBookSettings$TypeSettings;
    toString(): string;
}