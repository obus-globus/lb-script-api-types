import type { File$PathStatus } from '../../java/io/File$PathStatus.d.ts'
import type { FileFilter } from '../../java/io/FileFilter.d.ts'
import type { FilenameFilter } from '../../java/io/FilenameFilter.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { URI } from '../../java/net/URI.d.ts'
import type { URL } from '../../java/net/URL.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
export class File extends Object implements Serializable, Comparable<File> {
    static pathSeparator: string;
    static pathSeparatorChar: string;
    static separator: string;
    static separatorChar: string;
    static createTempFile(paramarg0: string, paramarg1: string): File;
    static createTempFile(paramarg0: string, paramarg1: string, paramarg2: File): File;
    static listRoots(): (Object | null)[];
    constructor(arg0: File, arg1: string)
    constructor(arg0: URI)
    constructor(arg0: string)
    private constructor(arg0: string, arg1: File)
    private constructor(arg0: string, arg1: number)
    constructor(arg0: string, arg1: string)
    // private filePath: Path[];
    readonly path: string;
    // private prefixLength: number;
    // private status: File$PathStatus;
    canExecute(): boolean;
    canRead(): boolean;
    canWrite(): boolean;
    compareTo(arg0: File): number;
    createNewFile(): boolean;
    delete(): boolean;
    deleteOnExit(): void;
    equals(arg0: Object | null): boolean;
    exists(): boolean;
    getAbsoluteFile(): File;
    getAbsolutePath(): string;
    getCanonicalFile(): File;
    getCanonicalPath(): string;
    getFreeSpace(): number;
    getName(): string;
    getParent(): string;
    getParentFile(): File;
    getPath(): string;
    getPrefixLength(): number;
    getTotalSpace(): number;
    getUsableSpace(): number;
    hashCode(): number;
    isAbsolute(): boolean;
    isDirectory(): boolean;
    isFile(): boolean;
    isHidden(): boolean;
    isInvalid(): boolean;
    lastModified(): number;
    length(): number;
    list(): string[];
    list(arg0: (param0: File, param1: string) => kotlin.Boolean): string[];
    listFiles(): File[];
    listFiles(arg0: (param0: File) => kotlin.Boolean): File[];
    listFiles(arg0: (param0: File, param1: string) => kotlin.Boolean): File[];
    mkdir(): boolean;
    mkdirs(): boolean;
    // private normalizedList(): string[];
    // private readObject(arg0: ObjectInputStream): void;
    renameTo(arg0: File): boolean;
    setExecutable(arg0: boolean): boolean;
    setExecutable(arg0: boolean, arg1: boolean): boolean;
    setLastModified(arg0: number): boolean;
    setReadOnly(): boolean;
    setReadable(arg0: boolean): boolean;
    setReadable(arg0: boolean, arg1: boolean): boolean;
    setWritable(arg0: boolean): boolean;
    setWritable(arg0: boolean, arg1: boolean): boolean;
    toPath(): Path[];
    toString(): string;
    toURI(): URI;
    toURL(): URL;
    // private writeObject(arg0: ObjectOutputStream): void;
}