import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class DocTree$Kind extends Enum<DocTree$Kind> {
    static ATTRIBUTE: DocTree$Kind;
    static AUTHOR: DocTree$Kind;
    static CODE: DocTree$Kind;
    static COMMENT: DocTree$Kind;
    static DEPRECATED: DocTree$Kind;
    static DOC_COMMENT: DocTree$Kind;
    static DOC_ROOT: DocTree$Kind;
    static DOC_TYPE: DocTree$Kind;
    static END_ELEMENT: DocTree$Kind;
    static ENTITY: DocTree$Kind;
    static ERRONEOUS: DocTree$Kind;
    static ESCAPE: DocTree$Kind;
    static EXCEPTION: DocTree$Kind;
    static HIDDEN: DocTree$Kind;
    static IDENTIFIER: DocTree$Kind;
    static INDEX: DocTree$Kind;
    static INHERIT_DOC: DocTree$Kind;
    static LINK: DocTree$Kind;
    static LINK_PLAIN: DocTree$Kind;
    static LITERAL: DocTree$Kind;
    static MARKDOWN: DocTree$Kind;
    static OTHER: DocTree$Kind;
    static PARAM: DocTree$Kind;
    static PROVIDES: DocTree$Kind;
    static REFERENCE: DocTree$Kind;
    static RETURN: DocTree$Kind;
    static SEE: DocTree$Kind;
    static SERIAL: DocTree$Kind;
    static SERIAL_DATA: DocTree$Kind;
    static SERIAL_FIELD: DocTree$Kind;
    static SINCE: DocTree$Kind;
    static SNIPPET: DocTree$Kind;
    static SPEC: DocTree$Kind;
    static START_ELEMENT: DocTree$Kind;
    static SUMMARY: DocTree$Kind;
    static SYSTEM_PROPERTY: DocTree$Kind;
    static TEXT: DocTree$Kind;
    static THROWS: DocTree$Kind;
    static UNKNOWN_BLOCK_TAG: DocTree$Kind;
    static UNKNOWN_INLINE_TAG: DocTree$Kind;
    static USES: DocTree$Kind;
    static VALUE: DocTree$Kind;
    static VERSION: DocTree$Kind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DocTree$Kind;
    static values(): DocTree$Kind[];
    private constructor()
    private constructor(arg2: string)
    tagName: string;
    name(): "ATTRIBUTE" | "AUTHOR" | "CODE" | "COMMENT" | "DEPRECATED" | "DOC_COMMENT" | "DOC_ROOT" | "DOC_TYPE" | "END_ELEMENT" | "ENTITY" | "ERRONEOUS" | "ESCAPE" | "EXCEPTION" | "HIDDEN" | "IDENTIFIER" | "INDEX" | "INHERIT_DOC" | "LINK" | "LINK_PLAIN" | "LITERAL" | "MARKDOWN" | "PARAM" | "PROVIDES" | "REFERENCE" | "RETURN" | "SEE" | "SERIAL" | "SERIAL_DATA" | "SERIAL_FIELD" | "SINCE" | "SNIPPET" | "SPEC" | "START_ELEMENT" | "SYSTEM_PROPERTY" | "SUMMARY" | "TEXT" | "THROWS" | "UNKNOWN_BLOCK_TAG" | "UNKNOWN_INLINE_TAG" | "USES" | "VALUE" | "VERSION" | "OTHER";
}