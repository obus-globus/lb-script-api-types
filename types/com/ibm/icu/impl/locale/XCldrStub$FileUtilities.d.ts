import type { BufferedReader } from '../../../../../java/io/BufferedReader.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class XCldrStub$FileUtilities extends Object {
    static UTF8: Charset;
    static getRelativeFileName(paramarg0: Class<Object>, paramarg1: string): string;
    static openFile(paramarg0: Class<Object>, paramarg1: string): BufferedReader;
    static openFile(paramarg0: Class<Object>, paramarg1: string, paramarg2: Charset): BufferedReader;
    constructor()
}