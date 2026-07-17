import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { StringBuffer } from '../../../../../java/lang/StringBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RecursiveToStringStyle } from '../../../../../org/apache/commons/lang3/builder/RecursiveToStringStyle.d.ts'
import type { ToStringStyle } from '../../../../../org/apache/commons/lang3/builder/ToStringStyle.d.ts'
export class MultilineRecursiveToStringStyle extends RecursiveToStringStyle {
    static DEFAULT_STYLE: ToStringStyle;
    static JSON_STYLE: ToStringStyle;
    static MULTI_LINE_STYLE: ToStringStyle;
    static NO_CLASS_NAME_STYLE: ToStringStyle;
    static NO_FIELD_NAMES_STYLE: ToStringStyle;
    static SHORT_PREFIX_STYLE: ToStringStyle;
    static SIMPLE_STYLE: ToStringStyle;
    static getRegistry(): JavaMap<Object, Object>;
    constructor()
    // private spaces: number;
    appendDetail(arg0: StringBuffer, arg1: string, arg2: Object): void;
    appendDetail(arg0: StringBuffer, arg1: string, arg2: Object[]): void;
    appendDetail(arg0: StringBuffer, arg1: string, arg2: boolean): void;
    appendDetail(arg0: StringBuffer, arg1: string, arg2: boolean[]): void;
    appendDetail(arg0: StringBuffer, arg1: string, arg2: number): void;
    appendDetail(arg0: StringBuffer, arg1: string, arg2: number[]): void;
    appendDetail(arg0: StringBuffer, arg1: string, arg2: string): void;
    appendDetail(arg0: StringBuffer, arg1: string, arg2: string[]): void;
    appendDetail(arg0: StringBuffer, arg1: string, arg2: number, arg3: Object): void;
    appendDetail(arg0: StringBuffer, arg1: string, arg2: (Object | null)[]): void;
    appendDetail(arg0: StringBuffer, arg1: string, arg2: JavaMap<Object | null, Object | null>): void;
    reflectionAppendArrayDetail(arg0: StringBuffer, arg1: string, arg2: Object): void;
    // private resetIndent(): void;
    // private spacer(arg0: number): string;
}