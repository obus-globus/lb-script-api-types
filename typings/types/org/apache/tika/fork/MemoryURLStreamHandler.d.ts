import type { URL } from '../../../../java/net/URL.d.ts'
import type { URLConnection } from '../../../../java/net/URLConnection.d.ts'
import type { URLStreamHandler } from '../../../../java/net/URLStreamHandler.d.ts'
export class MemoryURLStreamHandler extends URLStreamHandler {
    static createURL(paramarg0: number[]): URL;
    constructor()
    openConnection(arg0: URL): URLConnection;
}