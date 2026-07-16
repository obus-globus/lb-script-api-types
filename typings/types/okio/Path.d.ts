import type { File } from '../java/io/File.d.ts'
import type { Path as Path_2 } from '../java/nio/file/Path.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Comparable } from '../java/lang/Comparable.d.ts'
import type { ByteString } from '../okio/ByteString.d.ts'
import type { Path$Companion } from '../okio/Path$Companion.d.ts'
export class Path extends Object implements Comparable<Path> {
    static Companion: Path$Companion;
    static DIRECTORY_SEPARATOR: string;
    static get(paramarg0: File): Path;
    static get(paramarg0: File, paramarg1: boolean): Path;
    static get(paramarg0: string): Path;
    static get(paramarg0: string, paramarg1: boolean): Path;
    static get(paramarg0: Path_2): Path;
    static get(paramarg0: Path_2, paramarg1: boolean): Path;
    constructor(bytes: ByteString)
    // private bytes: ByteString;
    /*not mapped: */ getBytes$okio(): ByteString;
    /*not mapped: */ isAbsolute(): boolean;
    /*not mapped: */ isRelative(): boolean;
    /*not mapped: */ isRoot(): boolean;
    /*not mapped: */ name(): string;
    /*not mapped: */ nameBytes(): ByteString;
    /*not mapped: */ parent(): Path | null;
    readonly root: Path | null;
    readonly segments: string[];
    readonly segmentsBytes: ByteString[];
    /*not mapped: */ volumeLetter(): string | null;
    compareTo(other: Path): number;
    div(child: string): Path;
    div(child: ByteString): Path;
    div(child: Path): Path;
    equals(other: Object | null): boolean;
    hashCode(): number;
    normalized(): Path;
    relativeTo(other: Path): Path;
    resolve(child: string, normalize: boolean): Path;
    resolve(child: ByteString, normalize: boolean): Path;
    resolve(child: Path, normalize: boolean): Path;
    toFile(): File;
    toNioPath(): Path_2;
    toString(): string;
}