import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { InetAddress } from '../../java/net/InetAddress.d.ts'
import type { Proxy } from '../../java/net/Proxy.d.ts'
import type { URI } from '../../java/net/URI.d.ts'
import type { URLConnection } from '../../java/net/URLConnection.d.ts'
import type { URLStreamHandler } from '../../java/net/URLStreamHandler.d.ts'
import type { URLStreamHandlerFactory } from '../../java/net/URLStreamHandlerFactory.d.ts'
import type { UrlDeserializedState } from '../../java/net/UrlDeserializedState.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class URL extends Object implements Serializable {
    static of(paramarg0: URI, paramarg1: URLStreamHandler): URL;
    static setURLStreamHandlerFactory(paramarg0: URLStreamHandlerFactory): void;
    constructor(arg0: URL, arg1: string)
    constructor(arg0: URL, arg1: string, arg2: URLStreamHandler)
    constructor(arg0: string)
    constructor(arg0: string, arg1: string, arg2: number, arg3: string)
    constructor(arg0: string, arg1: string, arg2: number, arg3: string, arg4: URLStreamHandler)
    constructor(arg0: string, arg1: string, arg2: string)
    readonly authority: string;
    readonly file: string;
    // private handler: URLStreamHandler;
    // private hashCode: number;
    readonly host: string;
    // private hostAddress: InetAddress;
    readonly path: string;
    readonly port: number;
    readonly protocol: string;
    readonly query: string;
    readonly ref: string;
    // private tempState: UrlDeserializedState;
    readonly userInfo: string;
    equals(arg0: Object | null): boolean;
    // private fabricateNewURL(): URL;
    getAuthority(): string;
    getContent(): Object;
    getContent(arg0: Class<Object>[]): Object;
    getDefaultPort(): number;
    getFile(): string;
    getHost(): string;
    getHostAddress(): InetAddress;
    getPath(): string;
    getPort(): number;
    getProtocol(): string;
    getQuery(): string;
    getRef(): string;
    getUserInfo(): string;
    hashCode(): number;
    isBuiltinStreamHandler(arg0: URLStreamHandler): boolean;
    // private isBuiltinStreamHandler(arg0: string): boolean;
    // private isValidProtocol(arg0: string): boolean;
    openConnection(): URLConnection;
    openConnection(arg0: Proxy): URLConnection;
    openStream(): InputStream;
    // private readObject(arg0: ObjectInputStream): void;
    // private readResolve(): Object;
    // private resetState(): void;
    sameFile(arg0: URL): boolean;
    set(arg0: string, arg1: string, arg2: number, arg3: string, arg4: string, arg5: string, arg6: string, arg7: string): void;
    // private setDeserializedFields(arg0: URLStreamHandler): URL;
    // private setSerializedHashCode(arg0: number): void;
    toExternalForm(): string;
    toString(): string;
    toURI(): URI;
    // private writeObject(arg0: ObjectOutputStream): void;
}