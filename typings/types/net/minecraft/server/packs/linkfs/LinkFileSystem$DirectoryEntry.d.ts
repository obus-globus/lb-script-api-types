import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LinkFileSystem$DirectoryEntry extends Record {
    constructor()
    // private children: JavaMap<string, LinkFileSystem$DirectoryEntry>;
    // private files: JavaMap<string, Path>;
    children(): JavaMap<string, LinkFileSystem$DirectoryEntry>;
    equals(o: Object | null): boolean;
    files(): JavaMap<string, Path>;
    hashCode(): number;
    toString(): string;
}