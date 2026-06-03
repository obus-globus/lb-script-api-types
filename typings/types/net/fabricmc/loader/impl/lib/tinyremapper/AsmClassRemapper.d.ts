import type { Pattern } from '../../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AsmRemapper } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/AsmRemapper.d.ts'
import type { VisitTrackingClassRemapper } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/VisitTrackingClassRemapper.d.ts'
import type { VisitTrackingClassRemapper$VisitKind } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/VisitTrackingClassRemapper$VisitKind.d.ts'
import type { AnnotationVisitor } from '../../../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { ClassVisitor } from '../../../../../../org/objectweb/asm/ClassVisitor.d.ts'
import type { FieldVisitor } from '../../../../../../org/objectweb/asm/FieldVisitor.d.ts'
import type { MethodVisitor } from '../../../../../../org/objectweb/asm/MethodVisitor.d.ts'
import type { RecordComponentVisitor } from '../../../../../../org/objectweb/asm/RecordComponentVisitor.d.ts'
import type { MethodNode } from '../../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
export class AsmClassRemapper extends VisitTrackingClassRemapper {
    constructor(arg0: ClassVisitor, arg1: AsmRemapper, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: Pattern, arg7: boolean)
    // private checkPackageAccess: boolean;
    // private inferNameFromSameLvIndex: boolean;
    // private invalidLvNamePattern: Pattern;
    // private methodNode: MethodNode;
    // private rebuildSourceFilenames: boolean;
    // private renameInvalidLocals: boolean;
    // private skipLocalMapping: boolean;
    // private sourceNameVisited: boolean;
    createAnnotationRemapper(arg0: string, arg1: AnnotationVisitor): AnnotationVisitor;
    createAnnotationRemapper(arg0: AnnotationVisitor): AnnotationVisitor;
    createFieldRemapper(arg0: FieldVisitor): FieldVisitor;
    createMethodRemapper(arg0: MethodVisitor): MethodVisitor;
    createRecordComponentRemapper(arg0: RecordComponentVisitor): RecordComponentVisitor;
    onVisit(arg0: VisitTrackingClassRemapper$VisitKind): void;
    visit(arg0: number, arg1: number, arg2: string, arg3: string, arg4: string, arg5: string[]): void;
    visitEnd(): void;
    visitField(arg0: number, arg1: string, arg2: string, arg3: string, arg4: Object): FieldVisitor;
    visitMethod(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string[]): MethodVisitor;
    visitSource(arg0: string, arg1: string): void;
}