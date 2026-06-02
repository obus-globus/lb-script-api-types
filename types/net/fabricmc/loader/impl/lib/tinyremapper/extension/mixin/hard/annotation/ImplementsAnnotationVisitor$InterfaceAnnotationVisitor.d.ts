import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { SoftInterface } from '../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/hard/data/SoftInterface.d.ts'
import type { AnnotationVisitor } from '../../../../../../../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
export class ImplementsAnnotationVisitor$InterfaceAnnotationVisitor extends AnnotationVisitor {
    constructor(arg0: AnnotationVisitor, arg1: SoftInterface)
    // private _interface: SoftInterface;
    visit(arg0: string, arg1: Object): void;
    visitEnum(arg0: string, arg1: string, arg2: string): void;
}