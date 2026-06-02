import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { McVersionLookup$Analyzer } from '../../../../../../net/fabricmc/loader/impl/game/minecraft/McVersionLookup$Analyzer.d.ts'
import type { ClassVisitor } from '../../../../../../org/objectweb/asm/ClassVisitor.d.ts'
import type { FieldVisitor } from '../../../../../../org/objectweb/asm/FieldVisitor.d.ts'
import type { MethodVisitor } from '../../../../../../org/objectweb/asm/MethodVisitor.d.ts'
export class McVersionLookup$FieldTypeCaptureVisitor extends ClassVisitor implements McVersionLookup$Analyzer {
    constructor()
    // private type: string;
    getResult(): string;
    visitField(arg0: number, arg1: string, arg2: string, arg3: string, arg4: Object): FieldVisitor;
    visitMethod(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string[]): MethodVisitor;
}