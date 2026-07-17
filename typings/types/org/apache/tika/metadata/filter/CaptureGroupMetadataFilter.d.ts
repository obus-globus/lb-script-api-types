import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Pattern } from '../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Initializable } from '../../../../../org/apache/tika/config/Initializable.d.ts'
import type { InitializableProblemHandler } from '../../../../../org/apache/tika/config/InitializableProblemHandler.d.ts'
import type { Param } from '../../../../../org/apache/tika/config/Param.d.ts'
import type { Metadata } from '../../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { MetadataFilter } from '../../../../../org/apache/tika/metadata/filter/MetadataFilter.d.ts'
import type { Element } from '../../../../../org/w3c/dom/Element.d.ts'
export class CaptureGroupMetadataFilter extends MetadataFilter implements Initializable {
    static load(paramarg0: Element, paramarg1: boolean): MetadataFilter;
    constructor()
    readonly regex: Pattern;
    // private regexString: string;
    readonly sourceField: string;
    readonly targetField: string;
    checkInitialization(arg0: InitializableProblemHandler): void;
    filter(arg0: Metadata): void;
    getRegex(): string;
    getSourceField(): string;
    getTargetField(): string;
    initialize(arg0: JavaMap<string, Param<Object>>): void;
    setRegex(arg0: string): void;
    setSourceField(arg0: string): void;
    setTargetField(arg0: string): void;
}