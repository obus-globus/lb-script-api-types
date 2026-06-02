import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../org/objectweb/asm/Type.d.ts'
import type { LocalVariableNode } from '../../../../org/objectweb/asm/tree/LocalVariableNode.d.ts'
import type { MethodNode } from '../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { ITargetSelectorByName } from '../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelectorByName.d.ts'
export class SignaturePrinter extends Object {
    static getTypeName(paramarg0: Type): string;
    static getTypeName(paramarg0: Type, paramarg1: boolean): string;
    static getTypeName(paramarg0: Type, paramarg1: boolean, paramarg2: boolean): string;
    constructor(arg0: Type[])
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: Type, arg2: Type[])
    constructor(arg0: string, arg1: Type, arg2: Type[], arg3: string[])
    constructor(arg0: string, arg1: Type, arg2: LocalVariableNode[])
    constructor(arg0: Type, arg1: Type[])
    constructor(arg0: MethodNode)
    constructor(arg0: MethodNode, arg1: string[])
    constructor(arg0: ITargetSelectorByName)
    // private argNames: string[];
    // private argTypes: Type[];
    readonly fullyQualified: boolean;
    readonly modifiers: string;
    // private name: string;
    readonly returnType: Type;
    // private appendArgs(arg0: StringBuilder, arg1: boolean, arg2: boolean): StringBuilder;
    // private appendType(arg0: StringBuilder, arg1: string, arg2: string): StringBuilder;
    // private appendType(arg0: StringBuilder, arg1: Type, arg2: string): StringBuilder;
    getFormattedArgs(): string;
    getReturnType(): string;
    isFullyQualified(): boolean;
    setFullyQualified(arg0: boolean): SignaturePrinter;
    setModifiers(arg0: string): SignaturePrinter;
    setModifiers(arg0: MethodNode): void;
    toDescriptor(): string;
    toString(): string;
}