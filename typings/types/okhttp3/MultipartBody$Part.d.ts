import type { Object } from '../java/lang/Object.d.ts'
import type { Pair } from '../kotlin/Pair.d.ts'
import type { MultipartBody$Part$Companion } from '../okhttp3/MultipartBody$Part$Companion.d.ts'
import type { RequestBody } from '../okhttp3/RequestBody.d.ts'
export class MultipartBody$Part extends Object {
    static Companion: MultipartBody$Part$Companion;
    static create(paramarg0: Pair<string, string>[], paramarg1: RequestBody): MultipartBody$Part;
    static create(paramarg0: RequestBody): MultipartBody$Part;
    static createFormData(paramarg0: string, paramarg1: string): MultipartBody$Part;
    static createFormData(paramarg0: string, paramarg1: string, paramarg2: RequestBody): MultipartBody$Part;
    private constructor(headers: Pair<string, string>[] | null, body: RequestBody)
    // private body: RequestBody;
    body(): RequestBody;
    // private headers: Pair<string, string>[] | null;
    headers(): Pair<string, string>[] | null;
    body(): RequestBody;
    headers(): Pair<string, string>[] | null;
}