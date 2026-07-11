import type { Class } from '../../../java/lang/Class.d.ts'
import type { IllegalAccessException } from '../../../java/lang/IllegalAccessException.d.ts'
import type { DirectMethodHandle } from '../../../java/lang/invoke/DirectMethodHandle.d.ts'
import type { MemberName } from '../../../java/lang/invoke/MemberName.d.ts'
import type { MethodHandle } from '../../../java/lang/invoke/MethodHandle.d.ts'
import type { MethodHandleInfo } from '../../../java/lang/invoke/MethodHandleInfo.d.ts'
import type { MethodHandles$Lookup$ClassDefiner } from '../../../java/lang/invoke/MethodHandles$Lookup$ClassDefiner.d.ts'
import type { MethodHandles$Lookup$ClassOption } from '../../../java/lang/invoke/MethodHandles$Lookup$ClassOption.d.ts'
import type { MethodType } from '../../../java/lang/invoke/MethodType.d.ts'
import type { VarHandle } from '../../../java/lang/invoke/VarHandle.d.ts'
import type { Constructor } from '../../../java/lang/reflect/Constructor.d.ts'
import type { Field } from '../../../java/lang/reflect/Field.d.ts'
import type { Method } from '../../../java/lang/reflect/Method.d.ts'
import type { ProtectionDomain } from '../../../java/security/ProtectionDomain.d.ts'
import type { ClassFileDumper } from '../../../jdk/internal/util/ClassFileDumper.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class MethodHandles$Lookup extends Object {
    static MODULE: number;
    static ORIGINAL: number;
    static PACKAGE: number;
    static PRIVATE: number;
    static PROTECTED: number;
    static PUBLIC: number;
    static UNCONDITIONAL: number;
    constructor(arg0: Class<Object>)
    // private cachedProtectionDomain: ProtectionDomain;
    // private prevLookupClass: Class<Object>;
    accessClass<T extends unknown>(arg0: Class<T>): Class<T>;
    accessFailedMessage(arg0: Class<Object>, arg1: MemberName): string;
    bind(arg0: Object, arg1: string, arg2: MethodType): MethodHandle;
    // private canBeCached(arg0: number, arg1: Class<Object>, arg2: MemberName): boolean;
    checkAccess(arg0: number, arg1: Class<Object>, arg2: MemberName): void;
    checkField(arg0: number, arg1: Class<Object>, arg2: MemberName): void;
    checkMethod(arg0: number, arg1: Class<Object>, arg2: MemberName): void;
    checkMethodName(arg0: number, arg1: string): void;
    // private checkSpecialCaller(arg0: Class<Object>, arg1: Class<Object>): void;
    checkSymbolicClass(arg0: Class<Object>): void;
    defineClass(arg0: number[]): Class<Object>;
    defineHiddenClass(arg0: number[], arg1: boolean, ...arg2: MethodHandles$Lookup$ClassOption[]): MethodHandles$Lookup;
    defineHiddenClassWithClassData(arg0: number[], arg1: Object, arg2: boolean, ...arg3: MethodHandles$Lookup$ClassOption[]): MethodHandles$Lookup;
    dropLookupMode(arg0: number): MethodHandles$Lookup;
    ensureInitialized<T extends unknown>(arg0: Class<T>): Class<T>;
    findBoundCallerLookup(arg0: MemberName): MethodHandles$Lookup;
    findClass(arg0: string): Class<Object>;
    findConstructor(arg0: Class<Object>, arg1: MethodType): MethodHandle;
    findGetter(arg0: Class<Object>, arg1: string, arg2: Class<Object>): MethodHandle;
    findSetter(arg0: Class<Object>, arg1: string, arg2: Class<Object>): MethodHandle;
    findSpecial(arg0: Class<Object>, arg1: string, arg2: MethodType, arg3: Class<Object>): MethodHandle;
    findStatic(arg0: Class<Object>, arg1: string, arg2: MethodType): MethodHandle;
    findStaticGetter(arg0: Class<Object>, arg1: string, arg2: Class<Object>): MethodHandle;
    findStaticSetter(arg0: Class<Object>, arg1: string, arg2: Class<Object>): MethodHandle;
    findStaticVarHandle(arg0: Class<Object>, arg1: string, arg2: Class<Object>): VarHandle;
    findVarHandle(arg0: Class<Object>, arg1: string, arg2: Class<Object>): VarHandle;
    findVirtual(arg0: Class<Object>, arg1: string, arg2: MethodType): MethodHandle;
    // private findVirtualForMH(arg0: string, arg1: MethodType): MethodHandle;
    // private findVirtualForVH(arg0: string, arg1: MethodType): MethodHandle;
    // private getDirectConstructor(arg0: Class<Object>, arg1: MemberName): MethodHandle;
    // private getDirectConstructorCommon(arg0: Class<Object>, arg1: MemberName): MethodHandle;
    // private getDirectField(arg0: number, arg1: Class<Object>, arg2: MemberName): MethodHandle;
    // private getDirectFieldCommon(arg0: number, arg1: Class<Object>, arg2: MemberName): MethodHandle;
    // private getDirectMethod(arg0: number, arg1: Class<Object>, arg2: MemberName, arg3: MethodHandles$Lookup): MethodHandle;
    // private getDirectMethodCommon(arg0: number, arg1: Class<Object>, arg2: MemberName, arg3: boolean, arg4: MethodHandles$Lookup): MethodHandle;
    // private getDirectMethodForConstant(arg0: number, arg1: Class<Object>, arg2: MemberName): MethodHandle;
    // private getDirectMethodNoRestrictInvokeSpecial(arg0: Class<Object>, arg1: MemberName, arg2: MethodHandles$Lookup): MethodHandle;
    // private getFieldVarHandle(arg0: number, arg1: number, arg2: Class<Object>, arg3: MemberName, arg4: MemberName): VarHandle;
    // private getFieldVarHandleCommon(arg0: number, arg1: number, arg2: Class<Object>, arg3: MemberName, arg4: MemberName): VarHandle;
    hasFullPrivilegeAccess(): boolean;
    hasPrivateAccess(): boolean;
    in(arg0: Class<Object>): MethodHandles$Lookup;
    // private isArrayClone(arg0: number, arg1: Class<Object>, arg2: MemberName): boolean;
    isClassAccessible(arg0: Class<Object>): boolean;
    linkMethodHandleConstant(arg0: number, arg1: Class<Object>, arg2: string, arg3: Object): MethodHandle;
    lookupClass(): Class<Object>;
    // private lookupClassOrNull(): Class<Object>;
    // private lookupClassProtectionDomain(): ProtectionDomain;
    lookupModes(): number;
    // private makeAccessException(arg0: Class<Object>): IllegalAccessException;
    // private makeClassDefiner(arg0: number[]): MethodHandles$Lookup$ClassDefiner;
    makeClassDefiner(arg0: string, arg1: number[], arg2: ClassFileDumper): MethodHandles$Lookup$ClassDefiner;
    makeHiddenClassDefiner(arg0: number[], arg1: ClassFileDumper): MethodHandles$Lookup$ClassDefiner;
    // private makeHiddenClassDefiner(arg0: number[], arg1: boolean, arg2: number): MethodHandles$Lookup$ClassDefiner;
    makeHiddenClassDefiner(arg0: string, arg1: number[], arg2: ClassFileDumper): MethodHandles$Lookup$ClassDefiner;
    makeHiddenClassDefiner(arg0: string, arg1: number[], arg2: ClassFileDumper, arg3: number): MethodHandles$Lookup$ClassDefiner;
    // private makeHiddenClassDefiner(arg0: string, arg1: number[], arg2: boolean, arg3: ClassFileDumper, arg4: number): MethodHandles$Lookup$ClassDefiner;
    // private maybeBindCaller(arg0: MemberName, arg1: MethodHandle, arg2: MethodHandles$Lookup): MethodHandle;
    previousLookupClass(): Class<Object>;
    resolveOrFail(arg0: number, arg1: Class<Object>, arg2: string, arg3: Class<Object>): MemberName;
    resolveOrFail(arg0: number, arg1: Class<Object>, arg2: string, arg3: MethodType): MemberName;
    resolveOrFail(arg0: number, arg1: MemberName): MemberName;
    resolveOrNull(arg0: number, arg1: Class<Object>, arg2: string, arg3: MethodType): MemberName;
    resolveOrNull(arg0: number, arg1: MemberName): MemberName;
    // private restrictProtectedReceiver(arg0: MemberName): boolean;
    // private restrictReceiver(arg0: MemberName, arg1: DirectMethodHandle, arg2: Class<Object>): MethodHandle;
    revealDirect(arg0: MethodHandle): MethodHandleInfo;
    serializableConstructor(arg0: Class<Object>, arg1: Constructor<Object>): MethodHandle;
    toString(): string;
    unreflect(arg0: Method): MethodHandle;
    unreflectConstructor(arg0: Constructor<Object>): MethodHandle;
    // private unreflectField(arg0: Field, arg1: boolean): MethodHandle;
    // private unreflectForMH(arg0: Method): MethodHandle;
    // private unreflectForVH(arg0: Method): MethodHandle;
    unreflectGetter(arg0: Field): MethodHandle;
    unreflectSetter(arg0: Field): MethodHandle;
    unreflectSpecial(arg0: Method, arg1: Class<Object>): MethodHandle;
    unreflectVarHandle(arg0: Field): VarHandle;
}