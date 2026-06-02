import type { OkHttpProgressInterceptor$ProgressListener } from '../../../../../net/ccbluex/liquidbounce/mcef/listeners/OkHttpProgressInterceptor$ProgressListener.d.ts'
import type { MediaType } from '../../../../../okhttp3/MediaType.d.ts'
import type { ResponseBody } from '../../../../../okhttp3/ResponseBody.d.ts'
import type { ResponseBody$Companion } from '../../../../../okhttp3/ResponseBody$Companion.d.ts'
import type { BufferedSource } from '../../../../../okio/BufferedSource.d.ts'
import type { ByteString } from '../../../../../okio/ByteString.d.ts'
import type { Source } from '../../../../../okio/Source.d.ts'
export class OkHttpProgressInterceptor$ProgressResponseBody extends ResponseBody {
    static Companion: ResponseBody$Companion;
    static EMPTY: ResponseBody;
    static create(paramarg0: number[], paramarg1: MediaType): ResponseBody;
    static create(paramarg0: string, paramarg1: MediaType): ResponseBody;
    static create(paramarg0: MediaType, paramarg1: number[]): ResponseBody;
    static create(paramarg0: MediaType, paramarg1: string): ResponseBody;
    static create(paramarg0: MediaType, paramarg1: number, paramarg2: BufferedSource): ResponseBody;
    static create(paramarg0: MediaType, paramarg1: ByteString): ResponseBody;
    static create(paramarg0: BufferedSource, paramarg1: MediaType, paramarg2: number): ResponseBody;
    static create(paramarg0: ByteString, paramarg1: MediaType): ResponseBody;
    constructor(arg0: ResponseBody, arg1: (param0: number, param1: number, param2: boolean) => void)
    // private bufferedSource: BufferedSource;
    // private progressListener: (param0: number, param1: number, param2: boolean) => void;
    // private responseBody: ResponseBody;
    contentLength(): number;
    contentType(): MediaType | null;
    source(): BufferedSource;
    // private source(arg0: Source): Source;
}