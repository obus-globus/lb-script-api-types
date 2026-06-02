import type { BufferedReader } from '../../../../../../../../java/io/BufferedReader.d.ts'
import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Charset } from '../../../../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class XCldrStub$FileUtilities extends Object {
    static UTF8: Charset;
    static getRelativeFileName(paramclass1: Class<Object>, paramfilename: string): string;
    static openFile(paramclass1: Class<Object>, paramfile: string): BufferedReader;
    static openFile(paramclass1: Class<Object>, paramfile: string, paramcharset: Charset): BufferedReader;
    constructor()
}