import type { McVersionLookup$Analyzer } from '../../../../../../net/fabricmc/loader/impl/game/minecraft/McVersionLookup$Analyzer.d.ts'
import type { ClassVisitor } from '../../../../../../org/objectweb/asm/ClassVisitor.d.ts'
import type { MethodVisitor } from '../../../../../../org/objectweb/asm/MethodVisitor.d.ts'
export class McVersionLookup$MethodStringConstantContainsVisitor extends ClassVisitor implements McVersionLookup$Analyzer {
    constructor(arg0: string, arg1: string)
    // private methodName: string;
    // private methodOwner: string;
    readonly result: string;
    getResult(): string;
    visitMethod(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string[]): MethodVisitor;
}