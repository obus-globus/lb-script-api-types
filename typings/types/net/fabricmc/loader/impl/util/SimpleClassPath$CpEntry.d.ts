import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SimpleClassPath } from '../../../../../net/fabricmc/loader/impl/util/SimpleClassPath.d.ts'
export class SimpleClassPath$CpEntry extends Object {
    constructor(null_: SimpleClassPath, arg1: number, arg2: string, arg3: Object, arg4: any)
    // private idx: number;
    // private instance: Object;
    readonly subPath: string;
    getInputStream(): InputStream;
    getOrigin(): Path[];
    getSubPath(): string;
    toString(): string;
}