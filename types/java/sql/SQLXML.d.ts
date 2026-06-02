import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { Reader } from '../../java/io/Reader.d.ts'
import type { Writer } from '../../java/io/Writer.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Result } from '../../javax/xml/transform/Result.d.ts'
import type { Source } from '../../javax/xml/transform/Source.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface SQLXML extends Object{
    free(): void;
    getBinaryStream(): InputStream;
    getCharacterStream(): Reader;
    getSource<T extends Source>(arg0: Class<T>): T;
    getString(): string;
    setBinaryStream(): OutputStream;
    setCharacterStream(): Writer;
    setResult<T extends Result>(arg0: Class<T>): T;
    setString(arg0: string): void;
}