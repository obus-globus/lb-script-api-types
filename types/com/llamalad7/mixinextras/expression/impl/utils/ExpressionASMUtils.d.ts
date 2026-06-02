import type { FlowContext } from '../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Handle } from '../../../../../../org/objectweb/asm/Handle.d.ts'
import type { Type } from '../../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { IntInsnNode } from '../../../../../../org/objectweb/asm/tree/IntInsnNode.d.ts'
export class ExpressionASMUtils extends Object {
    static ALT_LMF_HANDLE: Handle;
    static BOTTOM_TYPE: Type;
    static INTLIKE_TYPE: Type;
    static LMF_HANDLE: Handle;
    static OBJECT_TYPE: Type;
    static getBinaryType(paramarg0: AbstractInsnNode, paramarg1: Type): Type;
    static getCastType(paramarg0: AbstractInsnNode): Type;
    static getCommonIntType(paramarg0: FlowContext, paramarg1: Type, paramarg2: Type): Type;
    static getCommonSupertype(paramarg0: FlowContext, paramarg1: Type, paramarg2: Type): Type;
    static getConstant(paramarg0: AbstractInsnNode): Object;
    static getInnerType(paramarg0: Type): Type;
    static getNaryType(paramarg0: AbstractInsnNode): Type;
    static getNewArrayType(paramarg0: IntInsnNode): Type;
    static getNewType(paramarg0: AbstractInsnNode): Type;
    static getUnaryType(paramarg0: AbstractInsnNode): Type;
    static isIntLike(paramarg0: Type): boolean;
    static pushInt(paramarg0: number): AbstractInsnNode;
    constructor()
}