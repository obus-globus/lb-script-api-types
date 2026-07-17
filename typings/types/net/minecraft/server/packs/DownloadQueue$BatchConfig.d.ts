import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { HashFunction } from '../../../../com/google/common/hash/HashFunction.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Proxy } from '../../../../java/net/Proxy.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HttpUtil$DownloadProgressListener } from '../../../../net/minecraft/util/HttpUtil$DownloadProgressListener.d.ts'
export class DownloadQueue$BatchConfig extends Record {
    constructor(hashFunction: HashFunction, maxSize: number, headers: JavaMap<string, string>, proxy: Proxy, listener: HttpUtil$DownloadProgressListener)
    // private hashFunction: HashFunction;
    // private headers: JavaMap<string, string>;
    // private listener: HttpUtil$DownloadProgressListener;
    // private maxSize: number;
    // private proxy: Proxy;
    equals(o: Object | null): boolean;
    hashCode(): number;
    hashFunction(): HashFunction;
    headers(): JavaMap<string, string>;
    listener(): HttpUtil$DownloadProgressListener;
    maxSize(): number;
    proxy(): Proxy;
    toString(): string;
}