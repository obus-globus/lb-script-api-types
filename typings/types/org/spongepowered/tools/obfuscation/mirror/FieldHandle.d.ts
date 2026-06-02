import type { TypeElement } from '../../../../../javax/lang/model/element/TypeElement.d.ts'
import type { VariableElement } from '../../../../../javax/lang/model/element/VariableElement.d.ts'
import type { MappingField } from '../../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingField.d.ts'
import type { Bytecode$Visibility } from '../../../../../org/spongepowered/asm/util/Bytecode$Visibility.d.ts'
import type { MemberHandle } from '../../../../../org/spongepowered/tools/obfuscation/mirror/MemberHandle.d.ts'
import type { TypeHandle } from '../../../../../org/spongepowered/tools/obfuscation/mirror/TypeHandle.d.ts'
export class FieldHandle extends MemberHandle<MappingField> {
    constructor(arg0: TypeElement, arg1: VariableElement)
    constructor(arg0: TypeElement, arg1: VariableElement, arg2: boolean)
    constructor(arg0: string, arg1: VariableElement)
    constructor(arg0: string, arg1: VariableElement, arg2: boolean)
    private constructor(arg0: string, arg1: VariableElement, arg2: boolean, arg3: string, arg4: string)
    constructor(arg0: string, arg1: string, arg2: string)
    constructor(arg0: TypeHandle, arg1: VariableElement, arg2: boolean, arg3: string, arg4: string)
    constructor(arg0: TypeHandle, arg1: string, arg2: string)
    readonly element: VariableElement;
    readonly rawType: boolean;
    asMapping(arg0: boolean): MappingField;
    getElement(): VariableElement;
    getVisibility(): Bytecode$Visibility;
    isImaginary(): boolean;
    isRawType(): boolean;
    toString(): string;
}