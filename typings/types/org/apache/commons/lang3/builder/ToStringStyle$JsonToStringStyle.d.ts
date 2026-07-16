import type { StringBuffer } from '../../../../../java/lang/StringBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ToStringStyle } from '../../../../../org/apache/commons/lang3/builder/ToStringStyle.d.ts'
export class ToStringStyle$JsonToStringStyle extends ToStringStyle {
    static DEFAULT_STYLE: ToStringStyle;
    static JSON_STYLE: ToStringStyle;
    static MULTI_LINE_STYLE: ToStringStyle;
    static NO_CLASS_NAME_STYLE: ToStringStyle;
    static NO_FIELD_NAMES_STYLE: ToStringStyle;
    static SHORT_PREFIX_STYLE: ToStringStyle;
    static SIMPLE_STYLE: ToStringStyle;
    static getRegistry(): Map<Object, Object>;
    constructor()
    append(arg0: StringBuffer, arg1: string, arg2: Object, arg3: boolean): void;
    append(arg0: StringBuffer, arg1: string, arg2: Object[], arg3: boolean): void;
    append(arg0: StringBuffer, arg1: string, arg2: boolean): void;
    append(arg0: StringBuffer, arg1: string, arg2: boolean[], arg3: boolean): void;
    append(arg0: StringBuffer, arg1: string, arg2: number): void;
    append(arg0: StringBuffer, arg1: string, arg2: number[], arg3: boolean): void;
    append(arg0: StringBuffer, arg1: string, arg2: string): void;
    append(arg0: StringBuffer, arg1: string, arg2: string[], arg3: boolean): void;
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
    appendDetail(arg0: StringBuffer, arg1: string, arg2: Map<Object | null, Object | null>): void;
    appendFieldStart(arg0: StringBuffer, arg1: string): void;
    // private appendValueAsString(arg0: StringBuffer, arg1: string): void;
    // private checkAppendInput(arg0: string, arg1: boolean): void;
    // private checkFieldName(arg0: string): void;
    // private checkIsFullDetail(arg0: boolean): void;
    // private isJsonArray(arg0: string): boolean;
    // private isJsonObject(arg0: string): boolean;
    // private readResolve(): Object;
}