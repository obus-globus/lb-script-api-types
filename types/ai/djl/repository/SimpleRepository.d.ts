import type { AbstractRepository } from '../../../ai/djl/repository/AbstractRepository.d.ts'
import type { Artifact } from '../../../ai/djl/repository/Artifact.d.ts'
import type { Artifact$Item } from '../../../ai/djl/repository/Artifact$Item.d.ts'
import type { MRL } from '../../../ai/djl/repository/MRL.d.ts'
import type { Metadata } from '../../../ai/djl/repository/Metadata.d.ts'
import type { Progress } from '../../../ai/djl/util/Progress.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
export class SimpleRepository extends AbstractRepository {
    constructor(arg0: string, arg1: URI, arg2: Path[])
    // private artifactId: string;
    // private isRemote: boolean;
    // private metadata: Metadata;
    // private modelName: string;
    // private path: Path[];
    // private resolved: boolean;
    download(arg0: Path[], arg1: URI, arg2: Artifact$Item, arg3: Progress): void;
    getBaseUri(): URI;
    getCacheDirectory(): Path[];
    // private getMetadata(): Metadata;
    getResourceDirectory(arg0: Artifact): Path[];
    getResources(): MRL[];
    isRemote(): boolean;
    locate(arg0: MRL): Metadata;
    prepare(arg0: Artifact, arg1: Progress): void;
    resolve(arg0: MRL, arg1: { [key: string]: string }): Artifact;
    resolvePath(arg0: Artifact$Item, arg1: string): URI;
}