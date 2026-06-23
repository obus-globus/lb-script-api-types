import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { RepositoryChunk } from '../../../jdk/jfr/internal/RepositoryChunk.d.ts'
import type { ChunkFilename } from '../../../jdk/jfr/internal/management/ChunkFilename.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Repository extends Object {
    static getRepository(): Repository;
    private constructor()
    readonly baseLocation: Path[];
    // private chunkFilename: ChunkFilename;
    // private cleanupDirectories: Path[][];
    // private repository: Path[];
    clear(): void;
    ensureRepository(): void;
    getBaseLocation(): Path[];
    getRepositoryPath(): Path[];
    newChunk(): RepositoryChunk;
    setBasePath(arg0: Path[]): void;
}