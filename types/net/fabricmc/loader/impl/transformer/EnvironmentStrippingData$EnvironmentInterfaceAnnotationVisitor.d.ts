import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AnnotationVisitor } from '../../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { Type } from '../../../../../org/objectweb/asm/Type.d.ts'
export class EnvironmentStrippingData$EnvironmentInterfaceAnnotationVisitor extends AnnotationVisitor {
    private constructor(null_: EnvironmentStrippingData$EnvironmentInterfaceAnnotationVisitor, arg1: number)
    // private envMismatch: boolean;
    // private itf: Type;
    visit(arg0: string, arg1: Object): void;
    visitEnd(): void;
    visitEnum(arg0: string, arg1: string, arg2: string): void;
}