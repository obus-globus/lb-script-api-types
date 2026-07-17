import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { LogEvent } from '../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractStringLayout } from '../../../../org/apache/logging/log4j/core/layout/AbstractStringLayout.d.ts'
export class LegacyXMLLayout extends AbstractStringLayout {
    static ELEMENT_TYPE: string;
    static createLayout(paramarg0: boolean, paramarg1: boolean, paramarg2: boolean, paramarg3: boolean, paramarg4: string, paramarg5: Charset): LegacyXMLLayout;
    constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: string, arg5: Charset)
    // private complete: boolean;
    // private eol: string;
    // private indent1: string;
    // private indent2: string;
    // private indent3: string;
    // private locationInfo: boolean;
    // private namespacePrefix: string;
    // private properties: boolean;
    getContentFormat(): JavaMap<string, string>;
    getContentType(): string;
    getFooter(): number[];
    getHeader(): number[];
    toSerializable(arg0: LogEvent): string;
}