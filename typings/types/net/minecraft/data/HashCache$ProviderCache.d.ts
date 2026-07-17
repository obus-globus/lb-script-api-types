import type { JavaMap } from '../../../JavaMap.d.ts'
import type { HashCode } from '../../../com/google/common/hash/HashCode.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class HashCache$ProviderCache extends Record {
    static load(paramrootDir: Path, paramcacheFile: Path): HashCache$ProviderCache;
    private constructor(version: string, data: JavaMap<Path, HashCode>)
    // private data: JavaMap<Path, HashCode>;
    // private version: string;
    count(): number;
    data(): JavaMap<Path, HashCode>;
    equals(o: Object | null): boolean;
    get(path: Path): HashCode;
    hashCode(): number;
    save(rootDir: Path, cacheFile: Path, extraHeaderInfo: string): void;
    toString(): string;
    version(): string;
}