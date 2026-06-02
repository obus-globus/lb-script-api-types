import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { MimeType } from '../../../../org/apache/tika/mime/MimeType.d.ts'
import type { MimeTypeException } from '../../../../org/apache/tika/mime/MimeTypeException.d.ts'
import type { MimeTypes } from '../../../../org/apache/tika/mime/MimeTypes.d.ts'
import type { MimeTypesReader$ClauseRecord } from '../../../../org/apache/tika/mime/MimeTypesReader$ClauseRecord.d.ts'
import type { MimeTypesReaderMetKeys } from '../../../../org/apache/tika/mime/MimeTypesReaderMetKeys.d.ts'
import type { Document } from '../../../../org/w3c/dom/Document.d.ts'
import type { Attributes } from '../../../../org/xml/sax/Attributes.d.ts'
import type { InputSource } from '../../../../org/xml/sax/InputSource.d.ts'
import type { DefaultHandler } from '../../../../org/xml/sax/helpers/DefaultHandler.d.ts'
export class MimeTypesReader extends DefaultHandler implements MimeTypesReaderMetKeys {
    static ACRONYM_TAG: string;
    static ALIAS_TAG: string;
    static ALIAS_TYPE_ATTR: string;
    static COMMENT_TAG: string;
    static GLOB_TAG: string;
    static INTERPRETED_ATTR: string;
    static ISREGEX_ATTR: string;
    static LOCAL_NAME_ATTR: string;
    static MAGIC_PRIORITY_ATTR: string;
    static MAGIC_TAG: string;
    static MATCH_MASK_ATTR: string;
    static MATCH_MINSHOULDMATCH_ATTR: string;
    static MATCH_OFFSET_ATTR: string;
    static MATCH_TAG: string;
    static MATCH_TYPE_ATTR: string;
    static MATCH_VALUE_ATTR: string;
    static MIME_INFO_TAG: string;
    static MIME_TYPE_TAG: string;
    static MIME_TYPE_TYPE_ATTR: string;
    static NS_URI_ATTR: string;
    static PATTERN_ATTR: string;
    static ROOT_XML_TAG: string;
    static SUB_CLASS_OF_TAG: string;
    static SUB_CLASS_TYPE_ATTR: string;
    static TIKA_LINK_TAG: string;
    static TIKA_UTI_TAG: string;
    static setPoolSize(paramarg0: number): void;
    constructor(arg0: MimeTypes)
    // private characters: StringBuilder;
    // private current: MimeTypesReader$ClauseRecord;
    // private priority: number;
    // private type: MimeType;
    // private types: MimeTypes;
    characters(arg0: string[], arg1: number, arg2: number): void;
    endElement(arg0: string, arg1: string, arg2: string): void;
    handleGlobError(arg0: MimeType, arg1: string, arg2: MimeTypeException, arg3: string, arg4: Attributes): void;
    handleMimeError(arg0: string, arg1: MimeTypeException, arg2: string, arg3: Attributes): void;
    read(arg0: InputStream): void;
    read(arg0: Document): void;
    resolveEntity(arg0: string, arg1: string): InputSource;
    startElement(arg0: string, arg1: string, arg2: string, arg3: Attributes): void;
}