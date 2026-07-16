import type { Application } from '../../../ai/djl/Application.d.ts'
import type { Artifact } from '../../../ai/djl/repository/Artifact.d.ts'
import type { Artifact$Item } from '../../../ai/djl/repository/Artifact$Item.d.ts'
import type { MRL } from '../../../ai/djl/repository/MRL.d.ts'
import type { Metadata } from '../../../ai/djl/repository/Metadata.d.ts'
import type { Repository } from '../../../ai/djl/repository/Repository.d.ts'
import type { RepositoryFactory } from '../../../ai/djl/repository/RepositoryFactory.d.ts'
import type { Progress } from '../../../ai/djl/util/Progress.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class AbstractRepository extends Object implements Repository {
    static newInstance(paramarg0: string, paramarg1: string): Repository;
    static newInstance(paramarg0: string, paramarg1: Path): Repository;
    static registerRepositoryFactory(paramarg0: RepositoryFactory): void;
    constructor(arg0: string, arg1: URI)
    // private arguments: { [key: string]: string };
    name: string;
    // private uri: URI;
    addResource(arg0: MRL): void;
    dataset(arg0: Application, arg1: string, arg2: string): MRL;
    dataset(arg0: Application, arg1: string, arg2: string, arg3: string): MRL;
    download(arg0: Path, arg1: URI, arg2: Artifact$Item, arg3: Progress): void;
    getBaseUri(): URI;
    getCacheDirectory(): Path;
    getFile(arg0: Artifact$Item, arg1: string): Path;
    getName(): string;
    getResourceDirectory(arg0: Artifact): Path;
    isRemote(): boolean;
    listDirectory(arg0: Artifact$Item, arg1: string): string[];
    locate(arg0: MRL): Metadata;
    model(arg0: Application, arg1: string, arg2: string): MRL;
    model(arg0: Application, arg1: string, arg2: string, arg3: string): MRL;
    model(arg0: Application, arg1: string, arg2: string, arg3: string, arg4: string): MRL;
    openStream(arg0: Artifact$Item, arg1: string): InputStream;
    prepare(arg0: Artifact): void;
    prepare(arg0: Artifact, arg1: Progress): void;
    resolvePath(arg0: Artifact$Item, arg1: string): URI;
    save(arg0: InputStream, arg1: Path, arg2: Artifact$Item, arg3: Progress): void;
}