import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { InputTag } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/InputTag.d.ts'
import type { ClassVisitor } from '../../../../../../org/objectweb/asm/ClassVisitor.d.ts'
export interface TinyRemapper$AnalyzeVisitorProvider extends Object{
    insertAnalyzeVisitor(arg0: boolean, arg1: number, arg2: string, arg3: ClassVisitor, arg4: InputTag[]): ClassVisitor;
    insertAnalyzeVisitor(arg0: number, arg1: string, arg2: ClassVisitor): ClassVisitor;
    insertAnalyzeVisitor(arg0: number, arg1: string, arg2: ClassVisitor, arg3: InputTag[]): ClassVisitor;
}