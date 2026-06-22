import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { Reader } from '../../java/io/Reader.d.ts'
import type { Writer } from '../../java/io/Writer.d.ts'
import type { URI } from '../../java/net/URI.d.ts'
import type { Modifier } from '../../javax/lang/model/element/Modifier.d.ts'
import type { NestingKind } from '../../javax/lang/model/element/NestingKind.d.ts'
import type { FileObject } from '../../javax/tools/FileObject.d.ts'
import type { JavaFileObject$Kind } from '../../javax/tools/JavaFileObject$Kind.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
export interface JavaFileObject extends FileObject, Object{
    delete(): boolean;
    getAccessLevel(): Modifier;
    getCharContent(arg0: boolean): CharSequence;
    getKind(): JavaFileObject$Kind;
    getLastModified(): number;
    getName(): string;
    getNestingKind(): NestingKind;
    isNameCompatible(arg0: string, arg1: JavaFileObject$Kind): boolean;
    openInputStream(): InputStream;
    openOutputStream(): OutputStream;
    openReader(arg0: boolean): Reader;
    openWriter(): Writer;
    toUri(): URI;
}