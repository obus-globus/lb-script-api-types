import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../../../java/lang/ClassLoader.d.ts'
import type { Package } from '../../../../../../java/lang/Package.d.ts'
import type { URL } from '../../../../../../java/net/URL.d.ts'
import type { URLClassLoader } from '../../../../../../java/net/URLClassLoader.d.ts'
import type { CodeSource } from '../../../../../../java/security/CodeSource.d.ts'
import type { Enumeration } from '../../../../../../java/util/Enumeration.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EnvType } from '../../../../../../net/fabricmc/api/EnvType.d.ts'
import type { GameProvider } from '../../../../../../net/fabricmc/loader/impl/game/GameProvider.d.ts'
import type { KnotClassDelegate } from '../../../../../../net/fabricmc/loader/impl/launch/knot/KnotClassDelegate.d.ts'
import type { KnotClassDelegate$ClassLoaderAccess } from '../../../../../../net/fabricmc/loader/impl/launch/knot/KnotClassDelegate$ClassLoaderAccess.d.ts'
export class KnotCompatibilityClassLoader extends URLClassLoader implements KnotClassDelegate$ClassLoaderAccess {
    static getPlatformClassLoader(): ClassLoader;
    static getSystemClassLoader(): ClassLoader;
    static getSystemResource(paramarg0: string): URL;
    static getSystemResourceAsStream(paramarg0: string): InputStream;
    static getSystemResources(paramarg0: string): Enumeration<URL>;
    static newInstance(paramarg0: URL[]): URLClassLoader;
    static newInstance(paramarg0: URL[], paramarg1: ClassLoader): URLClassLoader;
    constructor(arg0: boolean, arg1: EnvType, arg2: GameProvider)
    // private delegate: KnotClassDelegate<KnotCompatibilityClassLoader>;
    addUrlFwd(arg0: URL): void;
    defineClassFwd(arg0: string, arg1: number[], arg2: number, arg3: number, arg4: CodeSource): Class<Object>;
    definePackageFwd(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, arg7: URL): Package;
    findClass(arg0: string): Class<Object>;
    findClass(arg0: string, arg1: string): Class<Object>;
    findLibrary(arg0: string): string;
    findLoadedClassFwd(arg0: string): Class<Object>;
    findResourceFwd(arg0: string): URL;
    getClassLoadingLockFwd(arg0: string): Object;
    getDelegate(): KnotClassDelegate<any>;
    getPackageFwd(arg0: string): Package;
    loadClass(arg0: string): Class<Object>;
    loadClass(arg0: string, arg1: boolean): Class<Object>;
    resolveClassFwd(arg0: Class<Object>): void;
}