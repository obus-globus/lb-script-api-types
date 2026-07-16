import type { Object } from '../java/lang/Object.d.ts'
import type { Pair } from '../kotlin/Pair.d.ts'
import type { MultipartBody$Part$Companion } from '../okhttp3/MultipartBody$Part$Companion.d.ts'
import type { RequestBody } from '../okhttp3/RequestBody.d.ts'
export class MultipartBody$Part extends Object {
    static Companion: MultipartBody$Part$Companion;
    static create(headers: Pair<string, string>[] | null, body: RequestBody): MultipartBody$Part;
    static create(body: RequestBody): MultipartBody$Part;
    static createFormData(name: string, value: string): MultipartBody$Part;
    static createFormData(name: string, filename: string | null, body: RequestBody): MultipartBody$Part;
    private constructor(headers: Pair<string, string>[] | null, body: RequestBody)
    // private body: RequestBody;
    body(): RequestBody;
    // private headers: Pair<string, string>[] | null;
    headers(): Pair<string, string>[] | null;
    body(): RequestBody;
    headers(): Pair<string, string>[] | null;
}