import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { LocalVariableNode } from '../../../../../../org/objectweb/asm/tree/LocalVariableNode.d.ts'
import type { LocalVariableDiscriminator$Context$Local } from '../../../../../../org/spongepowered/asm/mixin/injection/modify/LocalVariableDiscriminator$Context$Local.d.ts'
import type { InjectionInfo } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { PrettyPrinter } from '../../../../../../org/spongepowered/asm/util/PrettyPrinter.d.ts'
import type { PrettyPrinter$IPrettyPrintable } from '../../../../../../org/spongepowered/asm/util/PrettyPrinter$IPrettyPrintable.d.ts'
export class LocalVariableDiscriminator$Context extends Object implements PrettyPrinter$IPrettyPrintable {
    constructor(arg0: InjectionInfo, arg1: Type, arg2: boolean, arg3: AbstractInsnNode[], arg4: AbstractInsnNode)
    // private baseArgIndex: number;
    // private info: InjectionInfo;
    // private isStatic: boolean;
    // private locals: LocalVariableDiscriminator$Context$Local[];
    // private node: AbstractInsnNode;
    // private returnType: Type;
    // private target: AbstractInsnNode[];
    getCandidateCount(): number;
    // private getLocals(arg0: LocalVariableNode[]): LocalVariableDiscriminator$Context$Local[];
    // private initLocals(arg0: AbstractInsnNode[], arg1: boolean, arg2: AbstractInsnNode): LocalVariableDiscriminator$Context$Local[];
    // private initOrdinals(): void;
    print(arg0: PrettyPrinter): void;
}