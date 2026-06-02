import type { BufferedReader } from '../../../../../../../../java/io/BufferedReader.d.ts'
import type { Closeable } from '../../../../../../../../java/io/Closeable.d.ts'
import type { InputStream } from '../../../../../../../../java/io/InputStream.d.ts'
import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class ResourceReader extends Object implements Closeable {
    constructor(is: InputStream, resourceName: string)
    constructor(is: InputStream, resourceName: string, encoding: string)
    constructor(rootClass: Class<Object>, resourceName: string)
    constructor(rootClass: Class<Object>, resourceName: string, encoding: string)
    constructor(resourceName: string)
    constructor(resourceName: string, encoding: string)
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
    readLineSkippingComments(trim: boolean): string;
    reset(): void;
}