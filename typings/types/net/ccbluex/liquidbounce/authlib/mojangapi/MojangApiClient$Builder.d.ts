import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MojangApiClient } from '../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/MojangApiClient.d.ts'
import type { OkHttpClient } from '../../../../../okhttp3/OkHttpClient.d.ts'
export class MojangApiClient$Builder extends Object {
    constructor()
    // private baseHttpClient: OkHttpClient | null;
    // private gson: Gson | null;
    // private tokenProvider: () => string | null;
    build(): MojangApiClient;
    gson(gson: Gson): MojangApiClient$Builder;
    httpClient(client: OkHttpClient): MojangApiClient$Builder;
    tokenProvider(provider: () => string | null): MojangApiClient$Builder;
}