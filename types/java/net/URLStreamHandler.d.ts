import type { InetAddress } from '../../java/net/InetAddress.d.ts'
import type { Proxy } from '../../java/net/Proxy.d.ts'
import type { URL } from '../../java/net/URL.d.ts'
import type { URLConnection } from '../../java/net/URLConnection.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class URLStreamHandler extends Object {
    constructor()
    equals(arg0: URL, arg1: URL): boolean;
    getDefaultPort(): number;
    getHostAddress(arg0: URL): InetAddress;
    hashCode(arg0: URL): number;
    hostsEqual(arg0: URL, arg1: URL): boolean;
    openConnection(arg0: URL): URLConnection;
    openConnection(arg0: URL, arg1: Proxy): URLConnection;
    parseURL(arg0: URL, arg1: string, arg2: number, arg3: number): void;
    sameFile(arg0: URL, arg1: URL): boolean;
    setURL(arg0: URL, arg1: string, arg2: string, arg3: number, arg4: string, arg5: string): void;
    setURL(arg0: URL, arg1: string, arg2: string, arg3: number, arg4: string, arg5: string, arg6: string, arg7: string, arg8: string): void;
    toExternalForm(arg0: URL): string;
}