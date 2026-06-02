import type { File } from '../java/io/File.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { MediaType } from '../okhttp3/MediaType.d.ts'
import type { RequestBody } from '../okhttp3/RequestBody.d.ts'
import type { ByteString } from '../okio/ByteString.d.ts'
export class RequestBody$Companion extends Object {
    EMPTY: RequestBody;
    create(contentType: MediaType | null, file: File): RequestBody;
    create(contentType: MediaType | null, content: number[], offset: number, byteCount: number): RequestBody;
    create(contentType: MediaType | null, content: string): RequestBody;
    create(contentType: MediaType | null, content: ByteString): RequestBody;
}