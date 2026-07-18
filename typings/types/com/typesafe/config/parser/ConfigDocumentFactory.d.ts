import type { ConfigParseOptions } from '../../../../com/typesafe/config/ConfigParseOptions.d.ts'
import type { ConfigDocument } from '../../../../com/typesafe/config/parser/ConfigDocument.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ConfigDocumentFactory extends Object {
    static parseFile(paramarg0: File): ConfigDocument;
    static parseFile(paramarg0: File, paramarg1: ConfigParseOptions): ConfigDocument;
    static parseReader(paramarg0: Reader): ConfigDocument;
    static parseReader(paramarg0: Reader, paramarg1: ConfigParseOptions): ConfigDocument;
    static parseString(paramarg0: string): ConfigDocument;
    static parseString(paramarg0: string, paramarg1: ConfigParseOptions): ConfigDocument;
    constructor()
}