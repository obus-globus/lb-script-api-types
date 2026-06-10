import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Builder } from '../../../../../org/apache/commons/lang3/builder/Builder.d.ts'
export class EqualsBuilder extends Object implements Builder<boolean> {
    static reflectionEquals(paramarg0: Object, paramarg1: Object, paramarg2: boolean): boolean;
    static reflectionEquals(paramarg0: Object, paramarg1: Object, paramarg2: boolean, paramarg3: Class<Object>, paramarg4: boolean, paramarg5: (Object | null)[]): boolean;
    static reflectionEquals(paramarg0: Object, paramarg1: Object, paramarg2: boolean, paramarg3: Class<Object>, paramarg4: (Object | null)[]): boolean;
    static reflectionEquals(paramarg0: Object, paramarg1: Object, paramarg2: (Object | null)[]): boolean;
    static reflectionEquals(paramarg0: Object, paramarg1: Object, paramarg2: string[]): boolean;
    constructor()
    // private bypassReflectionClasses: Class<Object>[];
    // private excludeFields: string[];
    // private isEquals: boolean;
    // private reflectUpToClass: Class<Object>;
    // private testRecursive: boolean;
    // private testTransients: boolean;
    append(arg0: Object, arg1: Object): EqualsBuilder;
    append(arg0: Object[], arg1: Object[]): EqualsBuilder;
    append(arg0: boolean, arg1: boolean): EqualsBuilder;
    append(arg0: (Object | null)[], arg1: (Object | null)[]): EqualsBuilder;
    append(arg0: number, arg1: number): EqualsBuilder;
    append(arg0: number[], arg1: number[]): EqualsBuilder;
    append(arg0: string, arg1: string): EqualsBuilder;
    append(arg0: string[], arg1: string[]): EqualsBuilder;
    // private appendArray(arg0: Object, arg1: Object): void;
    appendSuper(arg0: boolean): EqualsBuilder;
    build(): boolean;
    isEquals(): boolean;
    reflectionAppend(arg0: Object, arg1: Object): EqualsBuilder;
    // private reflectionAppend(arg0: Object, arg1: Object, arg2: Class<Object>): void;
    reset(): void;
    setBypassReflectionClasses(arg0: Class<Object>[]): EqualsBuilder;
    setEquals(arg0: boolean): void;
    setExcludeFields(arg0: string[]): EqualsBuilder;
    setReflectUpToClass(arg0: Class<Object>): EqualsBuilder;
    setTestRecursive(arg0: boolean): EqualsBuilder;
    setTestTransients(arg0: boolean): EqualsBuilder;
}