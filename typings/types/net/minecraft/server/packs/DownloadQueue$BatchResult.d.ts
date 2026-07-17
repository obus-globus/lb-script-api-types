import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DownloadQueue$BatchResult extends Record {
    constructor()
    constructor(downloaded: JavaMap<UUID, Path>, failed: UUID[])
    // private downloaded: JavaMap<UUID, Path>;
    // private failed: UUID[];
    downloaded(): JavaMap<UUID, Path>;
    equals(o: Object | null): boolean;
    failed(): UUID[];
    hashCode(): number;
    toString(): string;
}