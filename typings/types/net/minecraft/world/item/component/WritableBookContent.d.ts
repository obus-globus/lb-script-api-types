import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Filterable } from '../../../../../net/minecraft/server/network/Filterable.d.ts'
import type { BookContent } from '../../../../../net/minecraft/world/item/component/BookContent.d.ts'
export class WritableBookContent extends Record implements BookContent<string, WritableBookContent> {
    static CODEC: Codec<WritableBookContent>;
    static EMPTY: WritableBookContent;
    static MAX_PAGES: number;
    static PAGES_CODEC: Codec<Filterable<string>[]>;
    static PAGE_EDIT_LENGTH: number;
    static STREAM_CODEC: StreamCodec<ByteBuf, WritableBookContent>;
    constructor(pages: Filterable<string>[])
    // private pages: Filterable<string>[];
    equals(o: Object | null): boolean;
    getPages(filterEnabled: boolean): Stream<string>;
    hashCode(): number;
    pages(): Filterable<string>[];
    toString(): string;
    withReplacedPages(newPages: Filterable<string>[]): WritableBookContent;
}