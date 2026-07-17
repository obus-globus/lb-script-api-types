import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ToStringStyle } from '../../../../../org/apache/commons/lang3/builder/ToStringStyle.d.ts'
export class StandardToStringStyle extends ToStringStyle {
    static DEFAULT_STYLE: ToStringStyle;
    static JSON_STYLE: ToStringStyle;
    static MULTI_LINE_STYLE: ToStringStyle;
    static NO_CLASS_NAME_STYLE: ToStringStyle;
    static NO_FIELD_NAMES_STYLE: ToStringStyle;
    static SHORT_PREFIX_STYLE: ToStringStyle;
    static SIMPLE_STYLE: ToStringStyle;
    static getRegistry(): JavaMap<Object, Object>;
    constructor()
    getArrayEnd(): string;
    getArraySeparator(): string;
    getArrayStart(): string;
    getContentEnd(): string;
    getContentStart(): string;
    getFieldNameValueSeparator(): string;
    getFieldSeparator(): string;
    getNullText(): string;
    getSizeEndText(): string;
    getSizeStartText(): string;
    getSummaryObjectEndText(): string;
    getSummaryObjectStartText(): string;
    isArrayContentDetail(): boolean;
    isDefaultFullDetail(): boolean;
    isFieldSeparatorAtEnd(): boolean;
    isFieldSeparatorAtStart(): boolean;
    isUseClassName(): boolean;
    isUseFieldNames(): boolean;
    isUseIdentityHashCode(): boolean;
    isUseShortClassName(): boolean;
    setArrayContentDetail(arg0: boolean): void;
    setArrayEnd(arg0: string): void;
    setArraySeparator(arg0: string): void;
    setArrayStart(arg0: string): void;
    setContentEnd(arg0: string): void;
    setContentStart(arg0: string): void;
    setDefaultFullDetail(arg0: boolean): void;
    setFieldNameValueSeparator(arg0: string): void;
    setFieldSeparator(arg0: string): void;
    setFieldSeparatorAtEnd(arg0: boolean): void;
    setFieldSeparatorAtStart(arg0: boolean): void;
    setNullText(arg0: string): void;
    setSizeEndText(arg0: string): void;
    setSizeStartText(arg0: string): void;
    setSummaryObjectEndText(arg0: string): void;
    setSummaryObjectStartText(arg0: string): void;
    setUseClassName(arg0: boolean): void;
    setUseFieldNames(arg0: boolean): void;
    setUseIdentityHashCode(arg0: boolean): void;
    setUseShortClassName(arg0: boolean): void;
}