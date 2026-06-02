import type { ByteSource } from '../../../../com/google/common/io/ByteSource.d.ts'
import type { CharSource } from '../../../../com/google/common/io/CharSource.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ClassPath$ResourceInfo extends Object {
    constructor(file: File, resourceName: string, loader: ClassLoader)
    // private file: File;
    // private loader: ClassLoader;
    readonly resourceName: string;
    asByteSource(): ByteSource;
    asCharSource(charset: Charset): CharSource;
    equals(obj: Object | null): boolean;
    getFile(): File;
    getResourceName(): string;
    hashCode(): number;
    toString(): string;
    url(): URL;
}