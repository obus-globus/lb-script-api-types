import type { Object } from '../java/lang/Object.d.ts'
import type { Pair } from '../kotlin/Pair.d.ts'
import type { MultipartBody$Part } from '../okhttp3/MultipartBody$Part.d.ts'
import type { RequestBody } from '../okhttp3/RequestBody.d.ts'
export class MultipartBody$Part$Companion extends Object {
    create(headers: Pair<string, string>[] | null, body: RequestBody): MultipartBody$Part;
    create(body: RequestBody): MultipartBody$Part;
    createFormData(name: string, value: string): MultipartBody$Part;
    createFormData(name: string, filename: string | null, body: RequestBody): MultipartBody$Part;
}