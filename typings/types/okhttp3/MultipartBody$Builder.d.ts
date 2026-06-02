import type { Object } from '../java/lang/Object.d.ts'
import type { Pair } from '../kotlin/Pair.d.ts'
import type { MediaType } from '../okhttp3/MediaType.d.ts'
import type { MultipartBody } from '../okhttp3/MultipartBody.d.ts'
import type { MultipartBody$Part } from '../okhttp3/MultipartBody$Part.d.ts'
import type { RequestBody } from '../okhttp3/RequestBody.d.ts'
import type { ByteString } from '../okio/ByteString.d.ts'
export class MultipartBody$Builder extends Object {
    constructor(boundary: string)
    // private boundary: ByteString;
    // private parts: MultipartBody$Part[];
    // private type: MediaType;
    addFormDataPart(name: string, value: string): MultipartBody$Builder;
    addFormDataPart(name: string, filename: string | null, body: RequestBody): MultipartBody$Builder;
    addPart(headers: Pair<string, string>[] | null, body: RequestBody): MultipartBody$Builder;
    addPart(part: MultipartBody$Part): MultipartBody$Builder;
    addPart(body: RequestBody): MultipartBody$Builder;
    build(): MultipartBody;
    setType(type: MediaType): MultipartBody$Builder;
}