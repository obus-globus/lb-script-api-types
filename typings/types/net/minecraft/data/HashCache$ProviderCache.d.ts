import type { HashCode } from '../../../com/google/common/hash/HashCode.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class HashCache$ProviderCache extends Record {
    static load(paramrootDir: Path[][], paramcacheFile: Path[][]): HashCache$ProviderCache;
    private constructor(version: string, data: Map<Path[], HashCode>)
    // private data: Map<Path[], HashCode>;
    // private version: string;
    count(): number;
    data(): Map<Path[], HashCode>;
    equals(o: Object | null): boolean;
    get(path: Path[]): HashCode;
    hashCode(): number;
    save(rootDir: Path[], cacheFile: Path[], extraHeaderInfo: string): void;
    toString(): string;
    version(): string;
}