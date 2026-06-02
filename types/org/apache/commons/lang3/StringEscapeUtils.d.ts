import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequenceTranslator } from '../../../../org/apache/commons/lang3/text/translate/CharSequenceTranslator.d.ts'
export class StringEscapeUtils extends Object {
    static ESCAPE_CSV: CharSequenceTranslator;
    static ESCAPE_ECMASCRIPT: CharSequenceTranslator;
    static ESCAPE_HTML3: CharSequenceTranslator;
    static ESCAPE_HTML4: CharSequenceTranslator;
    static ESCAPE_JAVA: CharSequenceTranslator;
    static ESCAPE_JSON: CharSequenceTranslator;
    static ESCAPE_XML: CharSequenceTranslator;
    static ESCAPE_XML10: CharSequenceTranslator;
    static ESCAPE_XML11: CharSequenceTranslator;
    static UNESCAPE_CSV: CharSequenceTranslator;
    static UNESCAPE_ECMASCRIPT: CharSequenceTranslator;
    static UNESCAPE_HTML3: CharSequenceTranslator;
    static UNESCAPE_HTML4: CharSequenceTranslator;
    static UNESCAPE_JAVA: CharSequenceTranslator;
    static UNESCAPE_JSON: CharSequenceTranslator;
    static UNESCAPE_XML: CharSequenceTranslator;
    static escapeCsv(paramarg0: string): string;
    static escapeEcmaScript(paramarg0: string): string;
    static escapeHtml3(paramarg0: string): string;
    static escapeHtml4(paramarg0: string): string;
    static escapeJava(paramarg0: string): string;
    static escapeJson(paramarg0: string): string;
    static escapeXml(paramarg0: string): string;
    static escapeXml10(paramarg0: string): string;
    static escapeXml11(paramarg0: string): string;
    static unescapeCsv(paramarg0: string): string;
    static unescapeEcmaScript(paramarg0: string): string;
    static unescapeHtml3(paramarg0: string): string;
    static unescapeHtml4(paramarg0: string): string;
    static unescapeJava(paramarg0: string): string;
    static unescapeJson(paramarg0: string): string;
    static unescapeXml(paramarg0: string): string;
    constructor()
}