import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../java/io/Reader.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class InputSource extends Object {
    constructor()
    constructor(arg0: InputStream)
    constructor(arg0: Reader)
    constructor(arg0: string)
    readonly byteStream: InputStream;
    readonly characterStream: Reader;
    readonly encoding: string;
    readonly publicId: string;
    readonly systemId: string;
    getByteStream(): InputStream;
    getCharacterStream(): Reader;
    getEncoding(): string;
    getPublicId(): string;
    getSystemId(): string;
    isEmpty(): boolean;
    // private isStreamEmpty(): boolean;
    setByteStream(arg0: InputStream): void;
    setCharacterStream(arg0: Reader): void;
    setEncoding(arg0: string): void;
    setPublicId(arg0: string): void;
    setSystemId(arg0: string): void;
}