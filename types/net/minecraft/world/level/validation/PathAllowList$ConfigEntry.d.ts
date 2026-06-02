import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { FileSystem } from '../../../../../java/nio/file/FileSystem.d.ts'
import type { PathMatcher } from '../../../../../java/nio/file/PathMatcher.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PathAllowList$EntryType } from '../../../../../net/minecraft/world/level/validation/PathAllowList$EntryType.d.ts'
export class PathAllowList$ConfigEntry extends Record {
    constructor(type: (param0: FileSystem, param1: string) => java.nio.file.PathMatcher, pattern: string)
    // private pattern: string;
    // private type: (param0: FileSystem, param1: string) => java.nio.file.PathMatcher;
    compile(fileSystem: FileSystem): (param0: Path[][]) => kotlin.Boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    pattern(): string;
    toString(): string;
    type(): (param0: FileSystem, param1: string) => java.nio.file.PathMatcher;
}