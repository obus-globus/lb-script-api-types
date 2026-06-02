import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface LSInput extends Object{
    getBaseURI(): string;
    getByteStream(): InputStream;
    getCertifiedText(): boolean;
    getCharacterStream(): Reader;
    getEncoding(): string;
    getPublicId(): string;
    getStringData(): string;
    getSystemId(): string;
    setBaseURI(arg0: string): void;
    setByteStream(arg0: InputStream): void;
    setCertifiedText(arg0: boolean): void;
    setCharacterStream(arg0: Reader): void;
    setEncoding(arg0: string): void;
    setPublicId(arg0: string): void;
    setStringData(arg0: string): void;
    setSystemId(arg0: string): void;
}