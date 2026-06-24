import type { HttpChunkLineValidatingByteProcessor$Match } from '../../../../../io/netty/handler/codec/http/HttpChunkLineValidatingByteProcessor$Match.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class HttpChunkLineValidatingByteProcessor$State extends Enum<HttpChunkLineValidatingByteProcessor$State> {
    static ChunkExtName: HttpChunkLineValidatingByteProcessor$State;
    static ChunkExtValQuoted: HttpChunkLineValidatingByteProcessor$State;
    static ChunkExtValQuotedEnd: HttpChunkLineValidatingByteProcessor$State;
    static ChunkExtValQuotedEscape: HttpChunkLineValidatingByteProcessor$State;
    static ChunkExtValStart: HttpChunkLineValidatingByteProcessor$State;
    static ChunkExtValToken: HttpChunkLineValidatingByteProcessor$State;
    static Size: HttpChunkLineValidatingByteProcessor$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): HttpChunkLineValidatingByteProcessor$State;
    static values(): (Object | null)[];
    private constructor(arg2: HttpChunkLineValidatingByteProcessor$Match[])
    // private matches: HttpChunkLineValidatingByteProcessor$Match[];
    match(arg0: number): HttpChunkLineValidatingByteProcessor$State;
    name(): "Size" | "ChunkExtName" | "ChunkExtValStart" | "ChunkExtValQuoted" | "ChunkExtValQuotedEscape" | "ChunkExtValQuotedEnd" | "ChunkExtValToken";
}