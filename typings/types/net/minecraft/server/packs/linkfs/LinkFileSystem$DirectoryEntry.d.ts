import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LinkFileSystem$DirectoryEntry extends Record {
    constructor()
    private constructor(children: { [key: string]: LinkFileSystem$DirectoryEntry }, files: { [key: string]: Path[] })
    // private children: { [key: string]: LinkFileSystem$DirectoryEntry };
    // private files: { [key: string]: Path[] };
    children(): { [key: string]: LinkFileSystem$DirectoryEntry };
    equals(o: Object | null): boolean;
    files(): { [key: string]: Path[] };
    hashCode(): number;
    toString(): string;
}