import type { Object } from '../java/lang/Object.d.ts'
import type { MediaType } from '../okhttp3/MediaType.d.ts'
import type { ResponseBody } from '../okhttp3/ResponseBody.d.ts'
import type { BufferedSource } from '../okio/BufferedSource.d.ts'
import type { ByteString } from '../okio/ByteString.d.ts'
export class ResponseBody$Companion extends Object {
    EMPTY: ResponseBody;
    create(contentType: MediaType | null, content: number[]): ResponseBody;
    create(contentType: MediaType | null, contentLength: number, content: BufferedSource): ResponseBody;
    create(contentType: MediaType | null, content: string): ResponseBody;
    create(contentType: MediaType | null, content: ByteString): ResponseBody;
}