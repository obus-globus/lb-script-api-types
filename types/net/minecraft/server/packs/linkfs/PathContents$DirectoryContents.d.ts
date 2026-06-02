import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PathContents } from '../../../../../net/minecraft/server/packs/linkfs/PathContents.d.ts'
export class PathContents$DirectoryContents extends Record implements PathContents {
    static MISSING: PathContents;
    static RELATIVE: PathContents;
    constructor(children: { [key: string]: (Object | null)[] })
    // private children: { [key: string]: (Object | null)[] };
    children(): { [key: string]: (Object | null)[] };
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}