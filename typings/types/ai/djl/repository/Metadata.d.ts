import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Application } from '../../../ai/djl/Application.d.ts'
import type { Artifact } from '../../../ai/djl/repository/Artifact.d.ts'
import type { License } from '../../../ai/djl/repository/License.d.ts'
import type { VersionRange } from '../../../ai/djl/repository/VersionRange.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
import type { Date } from '../../../java/util/Date.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Metadata extends Object {
    constructor()
    readonly application: string;
    // private applicationClass: Application;
    artifactId: string;
    artifacts: Artifact[];
    readonly description: string;
    groupId: string;
    readonly lastUpdated: Date;
    licenses: JavaMap<string, License>;
    readonly metadataVersion: string;
    readonly name: string;
    readonly repositoryUri: URI;
    readonly resourceType: string;
    readonly website: string;
    addArtifact(arg0: Artifact): void;
    addLicense(arg0: License): void;
    getApplication(): Application;
    getArtifactId(): string;
    getArtifacts(): Artifact[];
    getDescription(): string;
    getGroupId(): string;
    getLastUpdated(): Date;
    getLicenses(): JavaMap<string, License>;
    getMetadataVersion(): string;
    getName(): string;
    getRepositoryUri(): URI;
    getResourceType(): string;
    getWebsite(): string;
    init(arg0: JavaMap<string, string>): void;
    search(arg0: VersionRange, arg1: JavaMap<string, string>): Artifact[];
    setApplication(arg0: Application): void;
    setArtifactId(arg0: string): void;
    setArtifacts(arg0: Artifact[]): void;
    setDescription(arg0: string): void;
    setGroupId(arg0: string): void;
    setLastUpdated(arg0: Date): void;
    setLicense(arg0: JavaMap<string, License>): void;
    setMetadataVersion(arg0: string): void;
    setName(arg0: string): void;
    setRepositoryUri(arg0: URI): void;
    setResourceType(arg0: string): void;
    setWebsite(arg0: string): void;
}