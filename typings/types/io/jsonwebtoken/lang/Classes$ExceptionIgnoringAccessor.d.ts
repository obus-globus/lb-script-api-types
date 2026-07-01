import type { Classes$ClassLoaderAccessor } from '../../../io/jsonwebtoken/lang/Classes$ClassLoaderAccessor.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../java/lang/ClassLoader.d.ts'
import type { URL } from '../../../java/net/URL.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class Classes$ExceptionIgnoringAccessor extends Object implements Classes$ClassLoaderAccessor {
    constructor(arg0: Classes$ExceptionIgnoringAccessor)
    doGetClassLoader(): ClassLoader;
    getClassLoader(): ClassLoader;
    getResource(arg0: string): URL;
    getResourceStream(arg0: string): InputStream;
    loadClass(arg0: string): Class<Object>;
}