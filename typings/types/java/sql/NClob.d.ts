import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { Reader } from '../../java/io/Reader.d.ts'
import type { Writer } from '../../java/io/Writer.d.ts'
import type { Clob } from '../../java/sql/Clob.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface NClob extends Clob, Object{
    free(): void;
    getAsciiStream(): InputStream;
    getCharacterStream(): Reader;
    getCharacterStream(arg0: number, arg1: number): Reader;
    getSubString(arg0: number, arg1: number): string;
    length(): number;
    position(arg0: Clob, arg1: number): number;
    position(arg0: string, arg1: number): number;
    setAsciiStream(arg0: number): OutputStream;
    setCharacterStream(arg0: number): Writer;
    setString(arg0: number, arg1: string): number;
    setString(arg0: number, arg1: string, arg2: number, arg3: number): number;
    truncate(arg0: number): void;
}