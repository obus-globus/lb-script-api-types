import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Package } from '../../../../../../java/lang/Package.d.ts'
import type { URL } from '../../../../../../java/net/URL.d.ts'
import type { CodeSource } from '../../../../../../java/security/CodeSource.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface KnotClassDelegate$ClassLoaderAccess extends Object{
    addUrlFwd(arg0: URL): void;
    defineClassFwd(arg0: string, arg1: number[], arg2: number, arg3: number, arg4: CodeSource): Class<Object>;
    definePackageFwd(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, arg7: URL): Package;
    findLoadedClassFwd(arg0: string): Class<Object>;
    findResourceFwd(arg0: string): URL;
    getClassLoadingLockFwd(arg0: string): Object;
    getPackageFwd(arg0: string): Package;
    resolveClassFwd(arg0: Class<Object>): void;
}