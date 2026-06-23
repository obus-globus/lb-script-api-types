import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PackReloadConfig$IdAndPath extends Record {
    constructor(id: UUID, path: Path[])
    // private id: UUID;
    // private path: Path[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): UUID;
    path(): Path[];
    toString(): string;
}