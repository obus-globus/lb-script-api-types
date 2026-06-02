import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Instant } from '../../../../java/time/Instant.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DownloadQueue$FileInfoEntry } from '../../../../net/minecraft/server/packs/DownloadQueue$FileInfoEntry.d.ts'
export class DownloadQueue$LogEntry extends Record {
    static CODEC: Codec<DownloadQueue$LogEntry>;
    private constructor(id: UUID, url: string, time: Instant, hash: Optional<string>, errorOrFileInfo: Either<string, DownloadQueue$FileInfoEntry>)
    // private errorOrFileInfo: Either<string, DownloadQueue$FileInfoEntry>;
    // private hash: Optional<string>;
    // private id: UUID;
    // private time: Instant;
    // private url: string;
    equals(o: Object | null): boolean;
    errorOrFileInfo(): Either<string, DownloadQueue$FileInfoEntry>;
    hash(): Optional<string>;
    hashCode(): number;
    id(): UUID;
    time(): Instant;
    toString(): string;
    url(): string;
}