import type { Object } from '../java/lang/Object.d.ts'
import type { KClass } from '../kotlin/reflect/KClass.d.ts'
import type { Path } from '../okio/Path.d.ts'
export class FileMetadata extends Object {
    constructor(isRegularFile: boolean, isDirectory: boolean, symlinkTarget: Path | null, size: number | null, createdAtMillis: number | null, lastModifiedAtMillis: number | null, lastAccessedAtMillis: number | null, extras: Map<KClass<Object>, Object>)
    readonly createdAtMillis: number | null;
    readonly extras: Map<KClass<Object>, Object>;
    // private isDirectory: boolean;
    /*not mapped: */ isDirectory(): boolean;
    // private isRegularFile: boolean;
    /*not mapped: */ isRegularFile(): boolean;
    readonly lastAccessedAtMillis: number | null;
    readonly lastModifiedAtMillis: number | null;
    readonly size: number | null;
    readonly symlinkTarget: Path | null;
    copy(isRegularFile: boolean, isDirectory: boolean, symlinkTarget: Path | null, size: number | null, createdAtMillis: number | null, lastModifiedAtMillis: number | null, lastAccessedAtMillis: number | null, extras: Map<KClass<Object>, Object>): FileMetadata;
    extra<T extends Object | number | string | boolean>(type: KClass<T>): T | null;
    toString(): string;
}