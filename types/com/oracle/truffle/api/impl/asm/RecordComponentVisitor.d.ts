import type { AnnotationVisitor } from '../../../../../../com/oracle/truffle/api/impl/asm/AnnotationVisitor.d.ts'
import type { Attribute } from '../../../../../../com/oracle/truffle/api/impl/asm/Attribute.d.ts'
import type { TypePath } from '../../../../../../com/oracle/truffle/api/impl/asm/TypePath.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class RecordComponentVisitor extends Object {
    constructor(api: number)
    constructor(api: number, recordComponentVisitor: RecordComponentVisitor)
    // private api: number;
    delegate: RecordComponentVisitor;
    getDelegate(): RecordComponentVisitor;
    visitAnnotation(descriptor: string, visible: boolean): AnnotationVisitor;
    visitAttribute(attribute: Attribute): void;
    visitEnd(): void;
    visitTypeAnnotation(typeRef: number, typePath: TypePath, descriptor: string, visible: boolean): AnnotationVisitor;
}