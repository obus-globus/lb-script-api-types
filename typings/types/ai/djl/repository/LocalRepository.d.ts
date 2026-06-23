import type { AbstractRepository } from '../../../ai/djl/repository/AbstractRepository.d.ts'
import type { Artifact } from '../../../ai/djl/repository/Artifact.d.ts'
import type { MRL } from '../../../ai/djl/repository/MRL.d.ts'
import type { Metadata } from '../../../ai/djl/repository/Metadata.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
export class LocalRepository extends AbstractRepository {
    constructor(arg0: string, arg1: URI, arg2: Path[])
    // private path: Path[];
    getResources(): MRL[];
    isRemote(): boolean;
    locate(arg0: MRL): Metadata;
    resolve(arg0: MRL, arg1: { [key: string]: string }): Artifact;
}