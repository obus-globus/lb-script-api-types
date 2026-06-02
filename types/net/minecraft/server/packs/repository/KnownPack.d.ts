import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class KnownPack extends Record {
    static STREAM_CODEC: StreamCodec<ByteBuf, KnownPack>;
    static VANILLA_NAMESPACE: string;
    static vanilla(paramid: string): KnownPack;
    constructor(namespace: string, id: string, version: string)
    // private id: string;
    // private namespace: string;
    // private version: string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): string;
    isVanilla(): boolean;
    namespace(): string;
    toString(): string;
    version(): string;
}