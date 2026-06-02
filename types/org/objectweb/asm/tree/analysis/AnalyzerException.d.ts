import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { AbstractInsnNode } from '../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { Value } from '../../../../../org/objectweb/asm/tree/analysis/Value.d.ts'
export class AnalyzerException extends Exception {
    constructor(arg0: AbstractInsnNode, arg1: string)
    constructor(arg0: AbstractInsnNode, arg1: string, arg2: Object, arg3: Value)
    constructor(arg0: AbstractInsnNode, arg1: string, arg2: Throwable)
    node: AbstractInsnNode;
}