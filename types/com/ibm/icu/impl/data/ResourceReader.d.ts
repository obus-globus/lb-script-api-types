import type { BufferedReader } from '../../../../../java/io/BufferedReader.d.ts'
import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ResourceReader extends Object implements Closeable {
    constructor(arg0: InputStream, arg1: string)
    constructor(arg0: InputStream, arg1: string, arg2: string)
    constructor(arg0: Class<Object>, arg1: string)
    constructor(arg0: Class<Object>, arg1: string, arg2: string)
    constructor(arg0: string)
    constructor(arg0: string, arg1: string)
    // private encoding: string;
    // private lineNo: number;
    // private reader: BufferedReader;
    // private resourceName: string;
    // private root: Class<Object>;
    // private _reset(): void;
    close(): void;
    describePosition(): string;
    getLineNumber(): number;
    readLine(): string;
    readLineSkippingComments(): string;
    readLineSkippingComments(arg0: boolean): string;
    reset(): void;
}