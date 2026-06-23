import type { File } from '../../../java/io/File.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
import type { FileSystem } from '../../../java/nio/file/FileSystem.d.ts'
import type { LinkOption } from '../../../java/nio/file/LinkOption.d.ts'
import type { WatchEvent$Kind } from '../../../java/nio/file/WatchEvent$Kind.d.ts'
import type { WatchEvent$Modifier } from '../../../java/nio/file/WatchEvent$Modifier.d.ts'
import type { WatchKey } from '../../../java/nio/file/WatchKey.d.ts'
import type { WatchService } from '../../../java/nio/file/WatchService.d.ts'
import type { Watchable } from '../../../java/nio/file/Watchable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
export interface Path extends Watchable, Object, Comparable<Path[]>{
    compareTo(arg0: Path[]): number;
    endsWith(arg0: Path[]): boolean;
    endsWith(arg0: string): boolean;
    getFileName(): Path[];
    getFileSystem(): FileSystem;
    getName(arg0: number): Path[];
    getNameCount(): number;
    getParent(): Path[];
    getRoot(): Path[];
    isAbsolute(): boolean;
    iterator(): Iterator<Path[]>;
    normalize(): Path[];
    register(arg0: WatchService, arg1: WatchEvent$Kind<Object>[]): WatchKey;
    register(arg0: WatchService, arg1: WatchEvent$Kind<Object>[], arg2: WatchEvent$Modifier[]): WatchKey;
    relativize(arg0: Path[]): Path[];
    resolve(arg0: Path[]): Path[];
    resolve(arg0: Path[], arg1: Path[][]): Path[];
    resolve(arg0: string): Path[];
    resolve(arg0: string, arg1: string[]): Path[];
    resolveSibling(arg0: Path[]): Path[];
    resolveSibling(arg0: string): Path[];
    startsWith(arg0: Path[]): boolean;
    startsWith(arg0: string): boolean;
    subpath(arg0: number, arg1: number): Path[];
    toAbsolutePath(): Path[];
    toFile(): File;
    toRealPath(arg0: LinkOption[]): Path[];
    toUri(): URI;
}