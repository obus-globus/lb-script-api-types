import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { TagLoader$LoadResult } from '../../../net/minecraft/tags/TagLoader$LoadResult.d.ts'
export class TagNetworkSerialization$NetworkPayload extends Object {
    static EMPTY: TagNetworkSerialization$NetworkPayload;
    static read(parambuf: FriendlyByteBuf): TagNetworkSerialization$NetworkPayload;
    constructor(tags: JavaMap<Identifier, (Object | null)[]>)
    // private tags: JavaMap<Identifier, (Object | null)[]>;
    isEmpty(): boolean;
    resolve<T extends unknown>(registry: T[]): TagLoader$LoadResult<T>;
    size(): number;
    write(buf: FriendlyByteBuf): void;
}