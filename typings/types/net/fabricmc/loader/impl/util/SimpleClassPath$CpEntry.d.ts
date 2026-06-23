import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SimpleClassPath$CpEntry extends Object {
    private constructor(null_: SimpleClassPath$CpEntry, arg1: number, arg2: string, arg3: Object)
    // private idx: number;
    // private instance: Object;
    readonly subPath: string;
    getInputStream(): InputStream;
    getOrigin(): Path[];
    getSubPath(): string;
    toString(): string;
}