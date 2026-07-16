import type { AbstractRepository } from '../../../ai/djl/repository/AbstractRepository.d.ts'
import type { Artifact } from '../../../ai/djl/repository/Artifact.d.ts'
import type { Artifact$Item } from '../../../ai/djl/repository/Artifact$Item.d.ts'
import type { MRL } from '../../../ai/djl/repository/MRL.d.ts'
import type { Metadata } from '../../../ai/djl/repository/Metadata.d.ts'
import type { Progress } from '../../../ai/djl/util/Progress.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
export class SimpleUrlRepository extends AbstractRepository {
    constructor(arg0: string, arg1: URI, arg2: string)
    // private artifactId: string;
    // private fileName: string;
    // private metadata: Metadata;
    // private modelName: string;
    // private resolved: boolean;
    download(arg0: Path, arg1: URI, arg2: Artifact$Item, arg3: Progress): void;
    // private getContentLength(): number;
    // private getMetadata(): Metadata;
    getResources(): MRL[];
    isRemote(): boolean;
    locate(arg0: MRL): Metadata;
    resolve(arg0: MRL, arg1: { [key: string]: string }): Artifact;
}