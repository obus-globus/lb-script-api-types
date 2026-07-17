import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PathContents } from '../../../../../net/minecraft/server/packs/linkfs/PathContents.d.ts'
export class PathContents$DirectoryContents extends Record implements PathContents {
    static MISSING: PathContents;
    static RELATIVE: PathContents;
    constructor(children: JavaMap<string, (Object | null)[]>)
    // private children: JavaMap<string, (Object | null)[]>;
    children(): JavaMap<string, (Object | null)[]>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}