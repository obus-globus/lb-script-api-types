import type { ClassLoader } from '../../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Provider } from '../../../../../org/apache/logging/log4j/spi/Provider.d.ts'
export class ProviderUtil extends Object {
    static findClassLoader(): ClassLoader;
    static getProvider(): Provider;
    static getProviders(): Provider[];
    static hasProviders(): boolean;
    private constructor()
}