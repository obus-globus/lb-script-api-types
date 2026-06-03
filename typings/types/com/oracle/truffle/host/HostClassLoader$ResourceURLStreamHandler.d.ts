import type { HostClassLoader$Resource } from '../../../../com/oracle/truffle/host/HostClassLoader$Resource.d.ts'
import type { Proxy } from '../../../../java/net/Proxy.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { URLConnection } from '../../../../java/net/URLConnection.d.ts'
import type { URLStreamHandler } from '../../../../java/net/URLStreamHandler.d.ts'
export class HostClassLoader$ResourceURLStreamHandler extends URLStreamHandler {
    constructor(resource: HostClassLoader$Resource)
    // private resource: HostClassLoader$Resource;
    openConnection(u: URL): URLConnection;
    openConnection(arg0: URL, arg1: Proxy): URLConnection;
}