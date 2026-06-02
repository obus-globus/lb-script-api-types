import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { URL } from '../../../java/net/URL.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Classes$ClassLoaderAccessor extends Object{
    getResource(arg0: string): URL;
    getResourceStream(arg0: string): InputStream;
    loadClass(arg0: string): Class<Object>;
}