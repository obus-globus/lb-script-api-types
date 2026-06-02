import type { Object } from '../../../java/lang/Object.d.ts'
import type { AnnotationVisitor } from '../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { ByteVector } from '../../../org/objectweb/asm/ByteVector.d.ts'
import type { SymbolTable } from '../../../org/objectweb/asm/SymbolTable.d.ts'
export class AnnotationWriter extends AnnotationVisitor {
    constructor(arg0: SymbolTable, arg1: boolean, arg2: ByteVector, arg3: AnnotationWriter)
    // private annotation: ByteVector;
    // private nextAnnotation: AnnotationWriter;
    // private numElementValuePairs: number;
    // private numElementValuePairsOffset: number;
    // private previousAnnotation: AnnotationWriter;
    // private symbolTable: SymbolTable;
    // private useNamedValues: boolean;
    computeAnnotationsSize(arg0: string): number;
    putAnnotations(arg0: number, arg1: ByteVector): void;
    visit(arg0: string, arg1: Object): void;
    visitAnnotation(arg0: string, arg1: string): AnnotationVisitor;
    visitArray(arg0: string): AnnotationVisitor;
    visitEnd(): void;
    visitEnum(arg0: string, arg1: string, arg2: string): void;
}