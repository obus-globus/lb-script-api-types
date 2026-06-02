import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class CustomModelData extends Record {
    static CODEC: Codec<CustomModelData>;
    static EMPTY: CustomModelData;
    static STREAM_CODEC: StreamCodec<ByteBuf, CustomModelData>;
    constructor(floats: number[], flags: boolean[], strings: string[], colors: number[])
    // private colors: number[];
    // private flags: boolean[];
    // private floats: number[];
    // private strings: string[];
    colors(): number[];
    equals(o: Object | null): boolean;
    flags(): boolean[];
    floats(): number[];
    getBoolean(index: number): boolean;
    getColor(index: number): number;
    getFloat(index: number): number;
    getString(index: number): string;
    hashCode(): number;
    strings(): string[];
    toString(): string;
}