import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { Bytecode$Visibility } from '../../../../../org/spongepowered/asm/util/Bytecode$Visibility.d.ts'
import type { MethodHandle } from '../../../../../org/spongepowered/tools/obfuscation/mirror/MethodHandle.d.ts'
import type { TypeHandle } from '../../../../../org/spongepowered/tools/obfuscation/mirror/TypeHandle.d.ts'
export class MethodHandleASM extends MethodHandle {
    constructor(arg0: TypeHandle, arg1: MethodNode)
    // private method: MethodNode;
    getJavaSignature(): string;
    getVisibility(): Bytecode$Visibility;
}