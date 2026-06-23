import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class InternalResourceRoots$ResolvedCacheFolder extends Record {
    private constructor(path: Path[], hint: string, hintValue: Path[])
    // private hint: string;
    // private hintValue: Path[];
    // private path: Path[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    hint(): string;
    hintValue(): Path[];
    path(): Path[];
    resolve(file: string): InternalResourceRoots$ResolvedCacheFolder;
    toString(): string;
}