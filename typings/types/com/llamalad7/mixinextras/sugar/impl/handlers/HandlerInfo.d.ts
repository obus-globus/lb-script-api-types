import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { SugarParameter } from '../../../../../../com/llamalad7/mixinextras/sugar/impl/SugarParameter.d.ts'
import type { HandlerInfo$ParameterWrapper } from '../../../../../../com/llamalad7/mixinextras/sugar/impl/handlers/HandlerInfo$ParameterWrapper.d.ts'
import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { BiConsumer } from '../../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { ClassNode } from '../../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { MethodNode } from '../../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
export class HandlerInfo extends Object {
    constructor()
    // private wrappers: JavaMap<number, HandlerInfo$ParameterWrapper>;
    transformGenerics(arg0: Type[]): void;
    transformHandler(arg0: ClassNode, arg1: MethodNode): void;
    wrapParameter(arg0: SugarParameter, arg1: Type, arg2: Type, arg3: (param0: AbstractInsnNode[], param1: () => void) => void): void;
}