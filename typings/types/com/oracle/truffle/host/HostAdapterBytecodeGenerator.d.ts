import type { ClassWriter } from '../../../../com/oracle/truffle/api/impl/asm/ClassWriter.d.ts'
import type { Type } from '../../../../com/oracle/truffle/api/impl/asm/Type.d.ts'
import type { InstructionAdapter } from '../../../../com/oracle/truffle/api/impl/asm/commons/InstructionAdapter.d.ts'
import type { HostAdapterBytecodeGenerator$MethodInfo } from '../../../../com/oracle/truffle/host/HostAdapterBytecodeGenerator$MethodInfo.d.ts'
import type { HostAdapterClassLoader } from '../../../../com/oracle/truffle/host/HostAdapterClassLoader.d.ts'
import type { HostClassCache } from '../../../../com/oracle/truffle/host/HostClassCache.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Constructor } from '../../../../java/lang/reflect/Constructor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostAdapterBytecodeGenerator extends Object {
    constructor(superClass: Class<Object>, interfaces: Class<Object>[], commonLoader: ClassLoader, hostClassCache: HostClassCache, classOverride: boolean)
    // private abstractMethodNames: string[];
    // private autoConvertibleFromFunction: boolean;
    // private classOverride: boolean;
    // private commonLoader: ClassLoader;
    // private cw: ClassWriter;
    // private finalMethods: HostAdapterBytecodeGenerator$MethodInfo[];
    // private generatedClassName: string;
    // private getClassOverridesMethodDescriptor: string;
    // private hasMethodDescriptor: string;
    // private hasOwnMethodDescriptor: string;
    // private hasPublicDelegateField: boolean;
    // private hasSuperMethods: boolean;
    // private hostClassCache: HostClassCache;
    // private interfaces: Class<Object>[];
    // private methodInfos: HostAdapterBytecodeGenerator$MethodInfo[];
    // private polyglotValueType: Type;
    // private polyglotValueTypeDescriptor: string;
    // private samName: string;
    // private superClass: Class<Object>;
    // private superClassName: string;
    createAdapterClassLoader(): HostAdapterClassLoader;
    // private emitSuperCall(mv: InstructionAdapter, owner: Class<Object>, name: string, methodDesc: string): number;
    // private emitSuperCall(mv: InstructionAdapter, owner: Class<Object>, name: string, methodDesc: string, constructor: boolean): number;
    // private emitSuperConstructorCall(mv: InstructionAdapter, methodDesc: string): number;
    // private findInvokespecialOwnerFor(owner: Class<Object>): Class<Object>;
    // private gatherMethods(type: Class<Object>): void;
    // private gatherMethods(classes: Class<Object>[]): void;
    // private generateClassInit(): void;
    // private generateConstructors(): boolean;
    // private generateConstructors(ctor: Constructor<Object>): boolean;
    // private generateDelegatingConstructor(ctor: Constructor<Object>): void;
    // private generateMethod(mi: HostAdapterBytecodeGenerator$MethodInfo): void;
    // private generateMethods(): void;
    // private generateOverridingConstructor(ctor: Constructor<Object>, fromFunction: boolean): void;
    // private generatePrivateField(name: string, fieldDesc: string): void;
    // private generatePublicDelegateField(): void;
    // private generateSuperMethod(mi: HostAdapterBytecodeGenerator$MethodInfo): void;
    // private generateSuperMethods(): boolean;
    // private getCommonSuperClass(type1: string, type2: string): string;
    // private getGeneratedClassAsType(): Type;
    hasSuperMethods(): boolean;
    isAutoConvertibleFromFunction(): boolean;
    // private loadField(mv: InstructionAdapter, name: string, desc: string): void;
}