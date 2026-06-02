import type { AnnotationVisitor } from '../../../../../../com/oracle/truffle/api/impl/asm/AnnotationVisitor.d.ts'
import type { ByteVector } from '../../../../../../com/oracle/truffle/api/impl/asm/ByteVector.d.ts'
import type { SymbolTable } from '../../../../../../com/oracle/truffle/api/impl/asm/SymbolTable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AnnotationWriter extends AnnotationVisitor {
    constructor(symbolTable: SymbolTable, useNamedValues: boolean, annotation: ByteVector, previousAnnotation: AnnotationWriter)
    // private annotation: ByteVector;
    // private nextAnnotation: AnnotationWriter;
    // private numElementValuePairs: number;
    // private numElementValuePairsOffset: number;
    // private previousAnnotation: AnnotationWriter;
    // private symbolTable: SymbolTable;
    // private useNamedValues: boolean;
    computeAnnotationsSize(attributeName: string): number;
    putAnnotations(attributeNameIndex: number, output: ByteVector): void;
    visit(name: string, value: Object): void;
    visitAnnotation(name: string, descriptor: string): AnnotationVisitor;
    visitArray(name: string): AnnotationVisitor;
    visitEnd(): void;
    visitEnum(name: string, descriptor: string, value: string): void;
}