import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ExternalParser } from '../../../../../org/apache/tika/parser/external/ExternalParser.d.ts'
import type { ExternalParsersConfigReaderMetKeys } from '../../../../../org/apache/tika/parser/external/ExternalParsersConfigReaderMetKeys.d.ts'
import type { Document } from '../../../../../org/w3c/dom/Document.d.ts'
import type { Element } from '../../../../../org/w3c/dom/Element.d.ts'
export class ExternalParsersConfigReader extends Object implements ExternalParsersConfigReaderMetKeys {
    static CHECK_TAG: string;
    static COMMAND_TAG: string;
    static ERROR_CODES_TAG: string;
    static EXTERNAL_PARSERS_TAG: string;
    static METADATA_KEY_ATTR: string;
    static METADATA_MATCH_TAG: string;
    static METADATA_TAG: string;
    static MIMETYPES_TAG: string;
    static MIMETYPE_TAG: string;
    static PARSER_TAG: string;
    static read(paramarg0: InputStream): ExternalParser[];
    static read(paramarg0: Document): ExternalParser[];
    static read(paramarg0: Element): ExternalParser[];
    constructor()
}