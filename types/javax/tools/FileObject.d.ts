import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { Reader } from '../../java/io/Reader.d.ts'
import type { Writer } from '../../java/io/Writer.d.ts'
import type { URI } from '../../java/net/URI.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
export interface FileObject extends Object{
    delete(): boolean;
    getCharContent(arg0: boolean): CharSequence;
    getLastModified(): number;
    getName(): string;
    openInputStream(): InputStream;
    openOutputStream(): OutputStream;
    openReader(arg0: boolean): Reader;
    openWriter(): Writer;
    toUri(): URI;
}