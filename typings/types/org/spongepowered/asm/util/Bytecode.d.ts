import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { ClassNode } from '../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { FieldNode } from '../../../../org/objectweb/asm/tree/FieldNode.d.ts'
import type { LabelNode } from '../../../../org/objectweb/asm/tree/LabelNode.d.ts'
import type { MethodNode } from '../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { Bytecode$DelegateInitialiser } from '../../../../org/spongepowered/asm/util/Bytecode$DelegateInitialiser.d.ts'
import type { Bytecode$Visibility } from '../../../../org/spongepowered/asm/util/Bytecode$Visibility.d.ts'
export class Bytecode extends Object {
    static CONSTANTS_ALL: number[];
    static CONSTANTS_DOUBLE: number[];
    static CONSTANTS_FLOAT: number[];
    static CONSTANTS_INT: number[];
    static CONSTANTS_LONG: number[];
    static changeDescriptorReturnType(paramarg0: string, paramarg1: string): string;
    static cloneLabels(paramarg0: AbstractInsnNode[]): Map<LabelNode, LabelNode>;
    static compareBridgeMethods(paramarg0: MethodNode, paramarg1: MethodNode): void;
    static compareFlags(paramarg0: FieldNode, paramarg1: FieldNode, paramarg2: number): boolean;
    static compareFlags(paramarg0: MethodNode, paramarg1: MethodNode, paramarg2: number): boolean;
    static describeNode(paramarg0: AbstractInsnNode): string;
    static describeNode(paramarg0: AbstractInsnNode, paramarg1: boolean): string;
    static dumpClass(paramarg0: number[]): void;
    static dumpClass(paramarg0: ClassNode): void;
    static findDelegateInit(paramarg0: MethodNode, paramarg1: string, paramarg2: string): Bytecode$DelegateInitialiser;
    static findInsn(paramarg0: MethodNode, paramarg1: number): AbstractInsnNode;
    static findMethod(paramarg0: ClassNode, paramarg1: string, paramarg2: string): MethodNode;
    static generateDescriptor(paramarg0: Object, ...paramarg1: Object[]): string;
    static generateDescriptor(paramarg0: Type, ...paramarg1: Type[]): string;
    static getArgsSize(paramarg0: Type[]): number;
    static getArgsSize(paramarg0: Type[], paramarg1: number, paramarg2: number): number;
    static getBoxingType(paramarg0: Type): string;
    static getConstant(paramarg0: AbstractInsnNode): Object;
    static getConstantType(paramarg0: AbstractInsnNode): Type;
    static getDescriptor(paramarg0: Type, ...paramarg1: Type[]): string;
    static getDescriptor(...paramarg0: Type[]): string;
    static getFirstNonArgLocalIndex(paramarg0: Type[], paramarg1: boolean): number;
    static getFirstNonArgLocalIndex(paramarg0: MethodNode): number;
    static getMaxLineNumber(paramarg0: ClassNode, paramarg1: number, paramarg2: number): number;
    static getOpcodeName(paramarg0: number): string;
    static getOpcodeName(paramarg0: AbstractInsnNode): string;
    static getSimpleName(paramarg0: string): string;
    static getSimpleName(paramarg0: Type): string;
    static getTypes(...paramarg0: Class<Object>[]): Type[];
    static getUnboxingMethod(paramarg0: Type): string;
    static getVisibility(paramarg0: FieldNode): Bytecode$Visibility;
    static getVisibility(paramarg0: MethodNode): Bytecode$Visibility;
    static hasFlag(paramarg0: ClassNode, paramarg1: number): boolean;
    static hasFlag(paramarg0: FieldNode, paramarg1: number): boolean;
    static hasFlag(paramarg0: MethodNode, paramarg1: number): boolean;
    static isConstant(paramarg0: AbstractInsnNode): boolean;
    static isEnumConstant(paramarg0: FieldNode, paramarg1: ClassNode): boolean;
    static isEnumValuesArray(paramarg0: FieldNode, paramarg1: ClassNode): boolean;
    static isStatic(paramarg0: FieldNode): boolean;
    static isStatic(paramarg0: MethodNode): boolean;
    static isVirtual(paramarg0: MethodNode): boolean;
    static loadArgs(paramarg0: Type[], paramarg1: AbstractInsnNode[], paramarg2: number): void;
    static loadArgs(paramarg0: Type[], paramarg1: AbstractInsnNode[], paramarg2: number, paramarg3: number): void;
    static loadArgs(paramarg0: Type[], paramarg1: AbstractInsnNode[], paramarg2: number, paramarg3: number, paramarg4: Type[]): void;
    static loadIntConstant(paramarg0: number): AbstractInsnNode;
    static merge(paramarg0: ClassNode, paramarg1: ClassNode): void;
    static methodHasLineNumbers(paramarg0: MethodNode): boolean;
    static parseOpcodeName(paramarg0: string): number;
    static printMethod(paramarg0: MethodNode): void;
    static printMethodWithOpcodeIndices(paramarg0: MethodNode): void;
    static printNode(paramarg0: AbstractInsnNode): void;
    static replace(paramarg0: ClassNode, paramarg1: ClassNode): void;
    static setVisibility(paramarg0: ClassNode, paramarg1: number): void;
    static setVisibility(paramarg0: ClassNode, paramarg1: Bytecode$Visibility): void;
    static setVisibility(paramarg0: FieldNode, paramarg1: number): void;
    static setVisibility(paramarg0: FieldNode, paramarg1: Bytecode$Visibility): void;
    static setVisibility(paramarg0: MethodNode, paramarg1: number): void;
    static setVisibility(paramarg0: MethodNode, paramarg1: Bytecode$Visibility): void;
    static textify(paramarg0: ClassNode, paramarg1: OutputStream): void;
    static textify(paramarg0: MethodNode, paramarg1: OutputStream): void;
    private constructor()
}