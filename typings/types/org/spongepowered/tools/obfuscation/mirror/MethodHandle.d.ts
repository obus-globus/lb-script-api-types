import type { ExecutableElement } from '../../../../../javax/lang/model/element/ExecutableElement.d.ts'
import type { MappingMethod } from '../../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingMethod.d.ts'
import type { Bytecode$Visibility } from '../../../../../org/spongepowered/asm/util/Bytecode$Visibility.d.ts'
import type { MemberHandle } from '../../../../../org/spongepowered/tools/obfuscation/mirror/MemberHandle.d.ts'
import type { TypeHandle } from '../../../../../org/spongepowered/tools/obfuscation/mirror/TypeHandle.d.ts'
export class MethodHandle extends MemberHandle<MappingMethod> {
    constructor(arg0: TypeHandle, arg1: ExecutableElement)
    private constructor(arg0: TypeHandle, arg1: ExecutableElement, arg2: string, arg3: string)
    constructor(arg0: TypeHandle, arg1: string, arg2: string)
    readonly element: ExecutableElement;
    // private ownerHandle: TypeHandle;
    asMapping(arg0: boolean): MappingMethod;
    getElement(): ExecutableElement;
    getJavaSignature(): string;
    getVisibility(): Bytecode$Visibility;
    isImaginary(): boolean;
    toString(): string;
}