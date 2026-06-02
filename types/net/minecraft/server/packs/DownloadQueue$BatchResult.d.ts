import type { Record } from '../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DownloadQueue$BatchResult extends Record {
    constructor()
    constructor(downloaded: Map<UUID, Path[]>, failed: UUID[])
    // private downloaded: Map<UUID, Path[]>;
    // private failed: UUID[];
    downloaded(): Map<UUID, Path[]>;
    equals(o: Object | null): boolean;
    failed(): UUID[];
    hashCode(): number;
    toString(): string;
}