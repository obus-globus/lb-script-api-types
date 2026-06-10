import type { BufferedReader } from '../../../java/io/BufferedReader.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../java/lang/ClassLoader.d.ts'
import type { URL } from '../../../java/net/URL.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MainDispatcherFactory } from '../../../kotlinx/coroutines/internal/MainDispatcherFactory.d.ts'
export class FastServiceLoader extends Object {
    static INSTANCE: FastServiceLoader;
    // private PREFIX: string;
    // private createInstanceOf(baseClass: Class<MainDispatcherFactory>, serviceClass: string): MainDispatcherFactory | null;
    // private getProviderInstance<S extends Object | number | string | boolean>(name: string, loader: ClassLoader, service: Class<S>): S;
    // private load<S extends Object | number | string | boolean>(service: Class<S>, loader: ClassLoader): S[];
    loadMainDispatcherFactory(): MainDispatcherFactory[];
    loadProviders<S extends Object | number | string | boolean>(service: Class<S>, loader: ClassLoader): S[];
    // private parse(url: URL): string[];
    // private parseFile(r: BufferedReader): string[];
}