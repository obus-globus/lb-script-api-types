import type { Class } from '../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../java/lang/ClassLoader.d.ts'
import type { IllegalAccessException } from '../../../java/lang/IllegalAccessException.d.ts'
import type { ReflectiveOperationException } from '../../../java/lang/ReflectiveOperationException.d.ts'
import type { MethodType } from '../../../java/lang/invoke/MethodType.d.ts'
import type { ResolvedMethodName } from '../../../java/lang/invoke/ResolvedMethodName.d.ts'
import type { AccessFlag } from '../../../java/lang/reflect/AccessFlag.d.ts'
import type { Constructor } from '../../../java/lang/reflect/Constructor.d.ts'
import type { Field } from '../../../java/lang/reflect/Field.d.ts'
import type { Member } from '../../../java/lang/reflect/Member.d.ts'
import type { Method } from '../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../java/lang/Cloneable.d.ts'
export class MemberName extends Object implements Member, Cloneable {
    static DECLARED: number;
    static PUBLIC: number;
    static isMethodHandleInvokeName(paramarg0: string): boolean;
    static isVarHandleMethodInvokeName(paramarg0: string): boolean;
    constructor()
    constructor(arg0: Class<Object>)
    constructor(arg0: Class<Object>, arg1: string, arg2: Class<Object>, arg3: number)
    constructor(arg0: Class<Object>, arg1: string, arg2: MethodType, arg3: number)
    constructor(arg0: Constructor<Object>)
    constructor(arg0: Field)
    constructor(arg0: Field, arg1: boolean)
    constructor(arg0: Method)
    constructor(arg0: Method, arg1: boolean)
    constructor(arg0: number, arg1: Class<Object>, arg2: string, arg3: Object)
    // private clazz: Class<Object>;
    // private flags: number;
    readonly method: ResolvedMethodName;
    readonly name: string;
    // private resolution: Object;
    readonly type: Object;
    accessFlags(): AccessFlag[];
    // private allFlagsSet(arg0: number): boolean;
    // private anyFlagSet(arg0: number): boolean;
    asConstructor(): MemberName;
    asNormalOriginal(): MemberName;
    asSpecial(): MemberName;
    canBeStaticallyBound(): boolean;
    // private changeReferenceKind(arg0: number, arg1: number): MemberName;
    clone(): MemberName;
    protected clone(): Object;
    ensureTypeVisible(arg0: Class<Object>): void;
    equals(arg0: MemberName): boolean;
    equals(arg0: Object | null): boolean;
    // private expandFromVM(): void;
    getClassLoader(): ClassLoader;
    getDeclaringClass(): Class<Object>;
    getDefinition(): MemberName;
    getFieldType(): Class<Object>;
    getInvocationType(): MethodType;
    getMethodDescriptor(): string;
    getMethodOrFieldType(): MethodType;
    getMethodType(): MethodType;
    getModifiers(): number;
    getName(): string;
    getReferenceKind(): number;
    getType(): Object;
    hashCode(): number;
    // private init(arg0: Class<Object>, arg1: string, arg2: Object, arg3: number): void;
    initResolved(arg0: boolean): void;
    isAbstract(): boolean;
    isBridge(): boolean;
    isCallerSensitive(): boolean;
    isConstructor(): boolean;
    isField(): boolean;
    isFinal(): boolean;
    isGetter(): boolean;
    isInvocable(): boolean;
    isMethod(): boolean;
    isMethodHandleInvoke(): boolean;
    isNative(): boolean;
    // private isObjectPublicMethod(): boolean;
    isPackage(): boolean;
    isPrivate(): boolean;
    isProtected(): boolean;
    isPublic(): boolean;
    isResolved(): boolean;
    isSetter(): boolean;
    isStatic(): boolean;
    isSynthetic(): boolean;
    isTrustedFinalField(): boolean;
    isType(): boolean;
    isVarHandleMethodInvoke(): boolean;
    isVarargs(): boolean;
    isVolatile(): boolean;
    makeAccessException(): ReflectiveOperationException;
    makeAccessException(arg0: string, arg1: Object): IllegalAccessException;
    // private matchingFlagsSet(arg0: number, arg1: number): boolean;
    // private message(): string;
    // private referenceKindIsConsistent(): boolean;
    referenceKindIsConsistentWith(arg0: number): boolean;
    refersTo(arg0: Class<Object>, arg1: string): boolean;
    // private staticIsConsistent(): boolean;
    toString(): string;
    // private vminfoIsConsistent(): boolean;
}