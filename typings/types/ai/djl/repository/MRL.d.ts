import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Application } from '../../../ai/djl/Application.d.ts'
import type { Artifact } from '../../../ai/djl/repository/Artifact.d.ts'
import type { Metadata } from '../../../ai/djl/repository/Metadata.d.ts'
import type { Repository } from '../../../ai/djl/repository/Repository.d.ts'
import type { Progress } from '../../../ai/djl/util/Progress.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class MRL extends Object {
    static dataset(paramarg0: Repository, paramarg1: Application, paramarg2: string, paramarg3: string, paramarg4: string): MRL;
    static model(paramarg0: Repository, paramarg1: Application, paramarg2: string, paramarg3: string, paramarg4: string, paramarg5: string): MRL;
    static undefined(paramarg0: Repository, paramarg1: string, paramarg2: string): MRL;
    private constructor(arg0: Repository, arg1: string, arg2: Application, arg3: string, arg4: string, arg5: string, arg6: string)
    readonly application: Application;
    readonly artifactId: string;
    // private artifactName: string;
    readonly groupId: string;
    // private metadata: Metadata;
    readonly repository: Repository;
    // private type: string;
    readonly version: string;
    getApplication(): Application;
    getArtifactId(): string;
    getDefaultArtifact(): Artifact;
    getGroupId(): string;
    // private getMetadata(): Metadata;
    getRepository(): Repository;
    getVersion(): string;
    isPrepared(arg0: Artifact): boolean;
    listArtifacts(): Artifact[];
    match(arg0: JavaMap<string, string>): Artifact;
    prepare(arg0: Artifact): void;
    prepare(arg0: Artifact, arg1: Progress): void;
    // private search(arg0: JavaMap<string, string>): Artifact[];
    toString(): string;
    toURI(): URI;
}