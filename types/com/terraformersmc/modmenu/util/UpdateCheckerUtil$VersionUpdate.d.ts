import type { UpdateChannel } from '../../../../com/terraformersmc/modmenu/api/UpdateChannel.d.ts'
import type { UpdateInfo } from '../../../../com/terraformersmc/modmenu/api/UpdateInfo.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Instant } from '../../../../java/time/Instant.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UpdateCheckerUtil$VersionUpdate extends Record {
    private constructor(projectId: string, versionId: string, versionNumber: string, releaseDate: Instant, updateChannel: UpdateChannel, hash: string)
    // private hash: string;
    // private projectId: string;
    // private releaseDate: Instant;
    // private updateChannel: UpdateChannel;
    // private versionId: string;
    // private versionNumber: string;
    // private asUpdateInfo(): UpdateInfo;
    equals(arg0: Object | null): boolean;
    hash(): string;
    hashCode(): number;
    projectId(): string;
    releaseDate(): Instant;
    toString(): string;
    updateChannel(): UpdateChannel;
    versionId(): string;
    versionNumber(): string;
}