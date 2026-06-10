import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { FileSystem } from '../../../../../java/nio/file/FileSystem.d.ts'
import type { PathMatcher } from '../../../../../java/nio/file/PathMatcher.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PathAllowList$EntryType } from '../../../../../net/minecraft/world/level/validation/PathAllowList$EntryType.d.ts'
export class PathAllowList$ConfigEntry extends Record {
    constructor(type: (param0: FileSystem, param1: string) => (param0: Path[][]) => boolean, pattern: string)
    // private pattern: string;
    // private type: (param0: FileSystem, param1: string) => (param0: Path[][]) => boolean;
    compile(fileSystem: FileSystem): (param0: Path[][]) => boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    pattern(): string;
    toString(): string;
    type(): (param0: FileSystem, param1: string) => (param0: Path[][]) => boolean;
}