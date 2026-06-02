import type { File } from '../../../java/io/File.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { BasicFileAttributes } from '../../../java/nio/file/attribute/BasicFileAttributes.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ZipFile$Source$Key extends Object {
    constructor(arg0: File, arg1: BasicFileAttributes, arg2: Charset)
    // private attrs: BasicFileAttributes;
    // private charset: Charset;
    // private file: File;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
}