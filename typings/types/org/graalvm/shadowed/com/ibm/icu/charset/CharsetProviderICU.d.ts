import type { ClassLoader } from '../../../../../../../java/lang/ClassLoader.d.ts'
import type { Charset } from '../../../../../../../java/nio/charset/Charset.d.ts'
import type { CharsetProvider } from '../../../../../../../java/nio/charset/spi/CharsetProvider.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
export class CharsetProviderICU extends CharsetProvider {
    static getAllNames(): string[];
    static getAvailableNames(): string[];
    static getICUCanonicalName(paramenc: string): string;
    static getJavaCanonicalName(paramcharsetName: string): string;
    constructor()
    charsetForName(charsetName: string): Charset;
    charsetForName(charsetName: string, classPath: string): Charset;
    charsetForName(charsetName: string, classPath: string, loader: ClassLoader): Charset;
    charsets(): Iterator<Charset>;
}