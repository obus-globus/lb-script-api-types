import type { URL } from '../java/net/URL.d.ts'
import type { Executor } from '../java/util/concurrent/Executor.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Call$Factory } from '../okhttp3/Call$Factory.d.ts'
import type { HttpUrl } from '../okhttp3/HttpUrl.d.ts'
import type { OkHttpClient } from '../okhttp3/OkHttpClient.d.ts'
import type { CallAdapter$Factory } from '../retrofit2/CallAdapter$Factory.d.ts'
import type { Converter$Factory } from '../retrofit2/Converter$Factory.d.ts'
import type { Retrofit } from '../retrofit2/Retrofit.d.ts'
export class Retrofit$Builder extends Object {
    constructor()
    constructor(arg0: Retrofit)
    // private baseUrl: HttpUrl;
    // private callAdapterFactories: CallAdapter$Factory[];
    // private callFactory: Call$Factory;
    // private callbackExecutor: Executor;
    // private converterFactories: Converter$Factory[];
    // private validateEagerly: boolean;
    addCallAdapterFactory(arg0: CallAdapter$Factory): Retrofit$Builder;
    addConverterFactory(arg0: Converter$Factory): Retrofit$Builder;
    baseUrl(arg0: URL): Retrofit$Builder;
    baseUrl(arg0: string): Retrofit$Builder;
    baseUrl(arg0: HttpUrl): Retrofit$Builder;
    build(): Retrofit;
    callAdapterFactories(): CallAdapter$Factory[];
    callFactory(arg0: Call$Factory): Retrofit$Builder;
    callbackExecutor(arg0: Executor): Retrofit$Builder;
    client(arg0: OkHttpClient): Retrofit$Builder;
    converterFactories(): Converter$Factory[];
    validateEagerly(arg0: boolean): Retrofit$Builder;
}