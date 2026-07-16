import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { StringBuffer } from '../../../../../java/lang/StringBuffer.d.ts'
import type { Field } from '../../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ToStringBuilder } from '../../../../../org/apache/commons/lang3/builder/ToStringBuilder.d.ts'
import type { ToStringStyle } from '../../../../../org/apache/commons/lang3/builder/ToStringStyle.d.ts'
export class ReflectionToStringBuilder extends ToStringBuilder {
    static getDefaultStyle(): ToStringStyle;
    static reflectionToString<T extends unknown>(paramarg0: T, paramarg1: ToStringStyle, paramarg2: boolean, paramarg3: Class<Object>): string;
    static reflectionToString(paramarg0: Object): string;
    static reflectionToString(paramarg0: Object, paramarg1: ToStringStyle): string;
    static reflectionToString(paramarg0: Object, paramarg1: ToStringStyle, paramarg2: boolean): string;
    static setDefaultStyle(paramarg0: ToStringStyle): void;
    static toString<T extends unknown>(paramarg0: T, paramarg1: ToStringStyle, paramarg2: boolean, paramarg3: boolean, paramarg4: boolean, paramarg5: Class<Object>): string;
    static toString<T extends unknown>(paramarg0: T, paramarg1: ToStringStyle, paramarg2: boolean, paramarg3: boolean, paramarg4: Class<Object>): string;
    static toString(paramarg0: Object): string;
    static toString(paramarg0: Object, paramarg1: ToStringStyle): string;
    static toString(paramarg0: Object, paramarg1: ToStringStyle, paramarg2: boolean): string;
    static toString(paramarg0: Object, paramarg1: ToStringStyle, paramarg2: boolean, paramarg3: boolean): string;
    static toStringExclude(paramarg0: Object, ...paramarg1: string[]): string;
    static toStringExclude(paramarg0: Object, paramarg1: string[]): string;
    static toStringInclude(paramarg0: Object, ...paramarg1: string[]): string;
    static toStringInclude(paramarg0: Object, paramarg1: string[]): string;
    constructor(arg0: Object, arg1: ToStringStyle, arg2: StringBuffer, arg3: Class<Object>, arg4: boolean, arg5: boolean)
    constructor(arg0: Object, arg1: ToStringStyle, arg2: StringBuffer, arg3: Class<Object>, arg4: boolean, arg5: boolean, arg6: boolean)
    constructor(arg0: Object)
    constructor(arg0: Object, arg1: ToStringStyle)
    constructor(arg0: Object, arg1: ToStringStyle, arg2: StringBuffer)
    readonly appendStatics: boolean;
    readonly appendTransients: boolean;
    excludeFieldNames: string[];
    readonly excludeNullValues: boolean;
    includeFieldNames: string[];
    readonly upToClass: Class<Object>;
    accept(arg0: Field): boolean;
    appendFieldsIn(arg0: Class<Object>): void;
    getExcludeFieldNames(): string[];
    getIncludeFieldNames(): string[];
    getUpToClass(): Class<Object>;
    getValue(arg0: Field): Object;
    isAppendStatics(): boolean;
    isAppendTransients(): boolean;
    isExcludeNullValues(): boolean;
    reflectionAppendArray(arg0: Object): ReflectionToStringBuilder;
    setAppendStatics(arg0: boolean): void;
    setAppendTransients(arg0: boolean): void;
    setExcludeFieldNames(...arg0: string[]): ReflectionToStringBuilder;
    setExcludeNullValues(arg0: boolean): void;
    setIncludeFieldNames(...arg0: string[]): ReflectionToStringBuilder;
    setUpToClass(arg0: Class<Object>): void;
    toString(): string;
    // private validate(): void;
}