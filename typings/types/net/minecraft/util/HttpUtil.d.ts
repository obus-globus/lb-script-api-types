import type { HashCode } from '../../../com/google/common/hash/HashCode.d.ts'
import type { HashFunction } from '../../../com/google/common/hash/HashFunction.d.ts'
import type { Proxy } from '../../../java/net/Proxy.d.ts'
import type { URL } from '../../../java/net/URL.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { HttpUtil$DownloadProgressListener } from '../../../net/minecraft/util/HttpUtil$DownloadProgressListener.d.ts'
export class HttpUtil extends Object {
    static downloadFile(paramtargetDir: Path, paramurl: URL, paramheaders: { [key: string]: string }, paramhashFunction: HashFunction, paramrequestedHash: HashCode, parammaxSize: number, paramproxy: Proxy, paramlistener: HttpUtil$DownloadProgressListener): Path;
    static getAvailablePort(): number;
    static isPortAvailable(paramport: number): boolean;
    private constructor()
}