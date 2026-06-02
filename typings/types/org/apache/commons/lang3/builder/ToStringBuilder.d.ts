import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { StringBuffer } from '../../../../../java/lang/StringBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Builder } from '../../../../../org/apache/commons/lang3/builder/Builder.d.ts'
import type { ToStringStyle } from '../../../../../org/apache/commons/lang3/builder/ToStringStyle.d.ts'
export class ToStringBuilder extends Object implements Builder<string> {
    static getDefaultStyle(): ToStringStyle;
    static reflectionToString(paramarg0: Object | null, paramarg1: ToStringStyle, paramarg2: boolean, paramarg3: Class<Object>): string;
    static reflectionToString(paramarg0: Object): string;
    static reflectionToString(paramarg0: Object, paramarg1: ToStringStyle): string;
    static reflectionToString(paramarg0: Object, paramarg1: ToStringStyle, paramarg2: boolean): string;
    static setDefaultStyle(paramarg0: ToStringStyle): void;
    constructor(arg0: Object)
    constructor(arg0: Object, arg1: ToStringStyle)
    constructor(arg0: Object, arg1: ToStringStyle, arg2: StringBuffer)
    // private buffer: StringBuffer;
    readonly object: Object;
    readonly style: ToStringStyle;
    append(arg0: Object): ToStringBuilder;
    append(arg0: Object[]): ToStringBuilder;
    append(arg0: boolean): ToStringBuilder;
    append(arg0: (Object | null)[]): ToStringBuilder;
    append(arg0: number): ToStringBuilder;
    append(arg0: number[]): ToStringBuilder;
    append(arg0: string): ToStringBuilder;
    append(arg0: string[]): ToStringBuilder;
    append(arg0: number): ToStringBuilder;
    append(arg0: number[]): ToStringBuilder;
    append(arg0: number): ToStringBuilder;
    append(arg0: number[]): ToStringBuilder;
    append(arg0: number): ToStringBuilder;
    append(arg0: number[]): ToStringBuilder;
    append(arg0: number): ToStringBuilder;
    append(arg0: number[]): ToStringBuilder;
    append(arg0: number): ToStringBuilder;
    append(arg0: number[]): ToStringBuilder;
    append(arg0: string, arg1: Object): ToStringBuilder;
    append(arg0: string, arg1: Object, arg2: boolean): ToStringBuilder;
    append(arg0: string, arg1: Object[]): ToStringBuilder;
    append(arg0: string, arg1: Object[], arg2: boolean): ToStringBuilder;
    append(arg0: string, arg1: boolean): ToStringBuilder;
    append(arg0: string, arg1: (Object | null)[]): ToStringBuilder;
    append(arg0: string, arg1: (Object | null)[], arg2: boolean): ToStringBuilder;
    append(arg0: string, arg1: number): ToStringBuilder;
    append(arg0: string, arg1: number[]): ToStringBuilder;
    append(arg0: string, arg1: number[], arg2: boolean): ToStringBuilder;
    append(arg0: string, arg1: string): ToStringBuilder;
    append(arg0: string, arg1: string[]): ToStringBuilder;
    append(arg0: string, arg1: string[], arg2: boolean): ToStringBuilder;
    append(arg0: string, arg1: number): ToStringBuilder;
    append(arg0: string, arg1: number[]): ToStringBuilder;
    append(arg0: string, arg1: number[], arg2: boolean): ToStringBuilder;
    append(arg0: string, arg1: number): ToStringBuilder;
    append(arg0: string, arg1: number[]): ToStringBuilder;
    append(arg0: string, arg1: number[], arg2: boolean): ToStringBuilder;
    append(arg0: string, arg1: number): ToStringBuilder;
    append(arg0: string, arg1: number[]): ToStringBuilder;
    append(arg0: string, arg1: number[], arg2: boolean): ToStringBuilder;
    append(arg0: string, arg1: number): ToStringBuilder;
    append(arg0: string, arg1: number[]): ToStringBuilder;
    append(arg0: string, arg1: number[], arg2: boolean): ToStringBuilder;
    append(arg0: string, arg1: number): ToStringBuilder;
    append(arg0: string, arg1: number[]): ToStringBuilder;
    append(arg0: string, arg1: number[], arg2: boolean): ToStringBuilder;
    appendAsObjectToString(arg0: Object): ToStringBuilder;
    appendSuper(arg0: string): ToStringBuilder;
    appendToString(arg0: string): ToStringBuilder;
    build(): string;
    getObject(): Object;
    getStringBuffer(): StringBuffer;
    getStyle(): ToStringStyle;
    toString(): string;
}