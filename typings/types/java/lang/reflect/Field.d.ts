import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { AccessFlag } from '../../../java/lang/reflect/AccessFlag.d.ts'
import type { AccessibleObject } from '../../../java/lang/reflect/AccessibleObject.d.ts'
import type { AnnotatedType } from '../../../java/lang/reflect/AnnotatedType.d.ts'
import type { Member } from '../../../java/lang/reflect/Member.d.ts'
import type { Type } from '../../../java/lang/reflect/Type.d.ts'
import type { FieldAccessor } from '../../../jdk/internal/reflect/FieldAccessor.d.ts'
import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { GenericsFactory } from '../../../sun/reflect/generics/factory/GenericsFactory.d.ts'
import type { FieldRepository } from '../../../sun/reflect/generics/repository/FieldRepository.d.ts'
export class Field extends AccessibleObject implements Member {
    static DECLARED: number;
    static PUBLIC: number;
    static setAccessible(paramarg0: AccessibleObject[], paramarg1: boolean): void;
    constructor(arg0: Class<Object>, arg1: string, arg2: Class<Object>, arg3: number, arg4: boolean, arg5: number, arg6: string, arg7: number[])
    accessFlags(): AccessFlag[];
    // private acquireFieldAccessor(): FieldAccessor;
    // private acquireOverrideFieldAccessor(): FieldAccessor;
    checkAccess(arg0: Class<Object>, arg1: Class<Object>, arg2: Class<Object>, arg3: number): void;
    // private checkAccess(arg0: Class<Object>, arg1: Object): void;
    checkCanSetAccessible(arg0: Class<Object>): void;
    checkCanSetAccessible(arg0: Class<Object>, arg1: Class<Object>): void;
    copy(): Field;
    // private declaredAnnotations(): JavaMap<Class<Annotation>, Annotation>;
    equals(arg0: Object | null): boolean;
    get(arg0: Object): Object;
    getAnnotatedType(): AnnotatedType;
    getAnnotation<T extends Annotation>(arg0: Class<T>): T;
    getAnnotationsByType<T extends Annotation>(arg0: Class<T>): T[];
    getBoolean(arg0: Object): boolean;
    getByte(arg0: Object): number;
    getChar(arg0: Object): string;
    getDeclaredAnnotations(): Annotation[];
    getDeclaringClass(): Class<Object>;
    getDouble(arg0: Object): number;
    // private getFactory(): GenericsFactory;
    // private getFieldAccessor(): FieldAccessor;
    getFloat(arg0: Object): number;
    // private getGenericInfo(): FieldRepository;
    // private getGenericSignature(): string;
    getGenericType(): Type;
    getInt(arg0: Object): number;
    getLong(arg0: Object): number;
    getModifiers(): number;
    getName(): string;
    // private getOverrideFieldAccessor(): FieldAccessor;
    getRoot(): Field;
    getShort(arg0: Object): number;
    getType(): Class<Object>;
    // private getTypeAnnotationBytes0(): number[];
    hashCode(): number;
    isEnumConstant(): boolean;
    isSynthetic(): boolean;
    isTrustedFinal(): boolean;
    set(arg0: Object, arg1: Object): void;
    setAccessible(arg0: boolean): void;
    setBoolean(arg0: Object, arg1: boolean): void;
    setByte(arg0: Object, arg1: number): void;
    setChar(arg0: Object, arg1: string): void;
    setDouble(arg0: Object, arg1: number): void;
    // private setFieldAccessor(arg0: FieldAccessor): void;
    setFloat(arg0: Object, arg1: number): void;
    setInt(arg0: Object, arg1: number): void;
    setLong(arg0: Object, arg1: number): void;
    // private setOverrideFieldAccessor(arg0: FieldAccessor): void;
    setShort(arg0: Object, arg1: number): void;
    toGenericString(): string;
    toShortString(): string;
    toString(): string;
}