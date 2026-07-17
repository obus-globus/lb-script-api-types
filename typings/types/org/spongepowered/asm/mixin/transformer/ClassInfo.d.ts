import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../org/objectweb/asm/Type.d.ts'
import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { FieldInsnNode } from '../../../../../org/objectweb/asm/tree/FieldInsnNode.d.ts'
import type { FieldNode } from '../../../../../org/objectweb/asm/tree/FieldNode.d.ts'
import type { MethodInsnNode } from '../../../../../org/objectweb/asm/tree/MethodInsnNode.d.ts'
import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { IMixinInfo } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
import type { ClassInfo$Field } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo$Field.d.ts'
import type { ClassInfo$Member } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo$Member.d.ts'
import type { ClassInfo$Member$Type } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo$Member$Type.d.ts'
import type { ClassInfo$Method } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo$Method.d.ts'
import type { ClassInfo$SearchType } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo$SearchType.d.ts'
import type { ClassInfo$Traversal } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo$Traversal.d.ts'
import type { ClassInfo$TypeLookup } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo$TypeLookup.d.ts'
import type { MethodMapper } from '../../../../../org/spongepowered/asm/mixin/transformer/MethodMapper.d.ts'
import type { MixinInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo.d.ts'
import type { ClassSignature } from '../../../../../org/spongepowered/asm/util/ClassSignature.d.ts'
export class ClassInfo extends Object {
    static INCLUDE_ALL: number;
    static INCLUDE_INITIALISERS: number;
    static INCLUDE_PRIVATE: number;
    static INCLUDE_STATIC: number;
    static forDescriptor(paramarg0: string, paramarg1: ClassInfo$TypeLookup): ClassInfo;
    static forName(paramarg0: string): ClassInfo;
    static forType(paramarg0: Type, paramarg1: ClassInfo$TypeLookup): ClassInfo;
    static fromCache(paramarg0: string): ClassInfo;
    static fromCache(paramarg0: Type, paramarg1: ClassInfo$TypeLookup): ClassInfo;
    static getCommonSuperClass(paramarg0: string, paramarg1: string): ClassInfo;
    static getCommonSuperClass(paramarg0: Type, paramarg1: Type): ClassInfo;
    static getCommonSuperClassOrInterface(paramarg0: string, paramarg1: string): ClassInfo;
    static getCommonSuperClassOrInterface(paramarg0: Type, paramarg1: Type): ClassInfo;
    static getCommonSuperClassOrInterface(paramarg0: ClassInfo, paramarg1: ClassInfo): ClassInfo;
    static isMixin(paramarg0: string): boolean;
    private constructor()
    private constructor(arg0: Class<Object>)
    private constructor(arg0: ClassNode)
    readonly access: number;
    readonly appliedMixins: MixinInfo[];
    // private correspondingTypes: JavaMap<ClassInfo, ClassInfo>;
    // private fields: ClassInfo$Field[];
    // private initialisers: ClassInfo$Method[];
    readonly interfaces: string[];
    // private isInner: boolean;
    // private isInterface: boolean;
    // private isMixin: boolean;
    // private isProbablyStatic: boolean;
    // private methodMapper: MethodMapper;
    readonly methods: ClassInfo$Method[];
    readonly mixin: MixinInfo;
    // private mixins: MixinInfo[];
    readonly name: string;
    readonly nestHost: string;
    readonly nestMembers: string[];
    readonly outerClass: ClassInfo;
    readonly outerName: string;
    readonly signature: ClassSignature;
    readonly superClass: ClassInfo;
    readonly superName: string;
    addAppliedMixin(arg0: MixinInfo): void;
    addInterface(arg0: string): void;
    addMethod(arg0: MethodNode): void;
    // private addMethod(arg0: MethodNode, arg1: boolean): void;
    // private addMethodsRecursive(arg0: ClassInfo$Method[], arg1: boolean): ClassInfo;
    addMixin(arg0: MixinInfo): void;
    // private cloneMember<M extends ClassInfo$Member>(arg0: M): M;
    equals(arg0: Object | null): boolean;
    findCorrespondingType(arg0: ClassInfo): ClassInfo;
    findField(arg0: string, arg1: string, arg2: number): ClassInfo$Field;
    findField(arg0: FieldInsnNode, arg1: number): ClassInfo$Field;
    findField(arg0: FieldNode): ClassInfo$Field;
    findFieldInHierarchy(arg0: string, arg1: string, arg2: ClassInfo$SearchType): ClassInfo$Field;
    findFieldInHierarchy(arg0: string, arg1: string, arg2: ClassInfo$SearchType, arg3: number): ClassInfo$Field;
    findFieldInHierarchy(arg0: string, arg1: string, arg2: ClassInfo$SearchType, arg3: ClassInfo$Traversal): ClassInfo$Field;
    findFieldInHierarchy(arg0: string, arg1: string, arg2: ClassInfo$SearchType, arg3: ClassInfo$Traversal, arg4: number): ClassInfo$Field;
    findFieldInHierarchy(arg0: FieldInsnNode, arg1: ClassInfo$SearchType): ClassInfo$Field;
    findFieldInHierarchy(arg0: FieldInsnNode, arg1: ClassInfo$SearchType, arg2: number): ClassInfo$Field;
    findFieldInHierarchy(arg0: FieldNode, arg1: ClassInfo$SearchType): ClassInfo$Field;
    findFieldInHierarchy(arg0: FieldNode, arg1: ClassInfo$SearchType, arg2: number): ClassInfo$Field;
    // private findInHierarchy<M extends ClassInfo$Member>(arg0: string, arg1: string, arg2: ClassInfo$SearchType, arg3: ClassInfo$Traversal, arg4: number, arg5: ClassInfo$Member$Type): M;
    // private findInterface(arg0: string): ClassInfo;
    // private findMember<M extends ClassInfo$Member>(arg0: string, arg1: string, arg2: number, arg3: ClassInfo$Member$Type): M;
    findMethod(arg0: string, arg1: string, arg2: number): ClassInfo$Method;
    findMethod(arg0: MethodInsnNode): ClassInfo$Method;
    findMethod(arg0: MethodInsnNode, arg1: number): ClassInfo$Method;
    findMethod(arg0: MethodNode): ClassInfo$Method;
    findMethod(arg0: MethodNode, arg1: number): ClassInfo$Method;
    findMethodInHierarchy(arg0: string, arg1: string, arg2: ClassInfo$SearchType, arg3: number): ClassInfo$Method;
    findMethodInHierarchy(arg0: string, arg1: string, arg2: ClassInfo$SearchType, arg3: ClassInfo$Traversal): ClassInfo$Method;
    findMethodInHierarchy(arg0: string, arg1: string, arg2: ClassInfo$SearchType, arg3: ClassInfo$Traversal, arg4: number): ClassInfo$Method;
    findMethodInHierarchy(arg0: MethodInsnNode, arg1: ClassInfo$SearchType): ClassInfo$Method;
    findMethodInHierarchy(arg0: MethodInsnNode, arg1: ClassInfo$SearchType, arg2: number): ClassInfo$Method;
    findMethodInHierarchy(arg0: MethodNode, arg1: ClassInfo$SearchType): ClassInfo$Method;
    findMethodInHierarchy(arg0: MethodNode, arg1: ClassInfo$SearchType, arg2: number): ClassInfo$Method;
    findMethodInHierarchy(arg0: MethodNode, arg1: ClassInfo$SearchType, arg2: ClassInfo$Traversal): ClassInfo$Method;
    findMethodInHierarchy(arg0: MethodNode, arg1: ClassInfo$SearchType, arg2: ClassInfo$Traversal, arg3: number): ClassInfo$Method;
    findSuperClass(arg0: string): ClassInfo;
    findSuperClass(arg0: string, arg1: ClassInfo$Traversal): ClassInfo;
    findSuperClass(arg0: string, arg1: ClassInfo$Traversal, arg2: boolean): ClassInfo;
    // private findSuperClass(arg0: string, arg1: ClassInfo$Traversal, arg2: boolean, arg3: string[]): ClassInfo;
    // private findSuperTypeForMixin(arg0: ClassInfo): ClassInfo;
    getAccess(): number;
    getAppliedMixins(): IMixinInfo[];
    getClassName(): string;
    getInterfaceMethods(arg0: boolean): ClassInfo$Method[];
    getInterfaces(): string[];
    getMethodMapper(): MethodMapper;
    getMethods(): ClassInfo$Method[];
    getName(): string;
    getNestHost(): string;
    getNestMembers(): string[];
    getOuterClass(): ClassInfo;
    getOuterName(): string;
    getSignature(): ClassSignature;
    getSimpleName(): string;
    getSuperClass(): ClassInfo;
    getSuperName(): string;
    getTargets(): ClassInfo[];
    getType(): Type;
    hasMixinInHierarchy(): boolean;
    hasMixinTargetInHierarchy(): boolean;
    hasSuperClass(arg0: Class<Object>): boolean;
    hasSuperClass(arg0: Class<Object>, arg1: ClassInfo$Traversal): boolean;
    hasSuperClass(arg0: Class<Object>, arg1: ClassInfo$Traversal, arg2: boolean): boolean;
    hasSuperClass(arg0: string): boolean;
    hasSuperClass(arg0: string, arg1: ClassInfo$Traversal): boolean;
    hasSuperClass(arg0: string, arg1: ClassInfo$Traversal, arg2: boolean): boolean;
    hasSuperClass(arg0: ClassInfo): boolean;
    hasSuperClass(arg0: ClassInfo, arg1: ClassInfo$Traversal): boolean;
    hasSuperClass(arg0: ClassInfo, arg1: ClassInfo$Traversal, arg2: boolean): boolean;
    hashCode(): number;
    isAbstract(): boolean;
    isEnum(): boolean;
    isFinal(): boolean;
    isInner(): boolean;
    isInterface(): boolean;
    isLoadable(): boolean;
    isMixin(): boolean;
    isPrivate(): boolean;
    isProbablyStatic(): boolean;
    isProtected(): boolean;
    isPublic(): boolean;
    isReallyPublic(): boolean;
    isSynthetic(): boolean;
    resolveNestHost(): ClassInfo;
    toString(): string;
}