import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../kotlin/Pair.d.ts'
import type { MediaType } from '../../../../../okhttp3/MediaType.d.ts'
import type { RequestBody } from '../../../../../okhttp3/RequestBody.d.ts'
export class HttpUtils extends Object {
    static HEADERS_FORM: Pair<string, string>[];
    static HEADERS_JSON: Pair<string, string>[];
    static HEADERS_JSON_RESPONSE: Pair<string, string>[];
    static INSTANCE: HttpUtils;
    static MEDIA_TYPE_JSON: MediaType;
    HEADERS_FORM: Pair<string, string>[];
    HEADERS_JSON: Pair<string, string>[];
    HEADERS_JSON_RESPONSE: Pair<string, string>[];
    MEDIA_TYPE_JSON: MediaType;
    get(url: string, headers: Pair<string, string>[]): Pair<number, string>;
    post<T extends unknown>(url: string, data: Object): T;
    post(url: string, data: string, headers: Pair<string, string>[]): Pair<number, string>;
    post(url: string, data: RequestBody, headers: Pair<string, string>[]): Pair<number, string>;
    // private request(url: string, method: string, body: RequestBody | null, headers: Pair<string, string>[]): Pair<number, string>;
}