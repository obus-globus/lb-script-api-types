import type { FieldNode } from '../../../../../org/objectweb/asm/tree/FieldNode.d.ts'
import type { Bytecode$Visibility } from '../../../../../org/spongepowered/asm/util/Bytecode$Visibility.d.ts'
import type { FieldHandle } from '../../../../../org/spongepowered/tools/obfuscation/mirror/FieldHandle.d.ts'
import type { TypeHandle } from '../../../../../org/spongepowered/tools/obfuscation/mirror/TypeHandle.d.ts'
export class FieldHandleASM extends FieldHandle {
    constructor(arg0: TypeHandle, arg1: FieldNode)
    // private field: FieldNode;
    getVisibility(): Bytecode$Visibility;
}