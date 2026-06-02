import type { AnnotationVisitor } from '../../../../../../com/oracle/truffle/api/impl/asm/AnnotationVisitor.d.ts'
import type { AnnotationWriter } from '../../../../../../com/oracle/truffle/api/impl/asm/AnnotationWriter.d.ts'
import type { Attribute } from '../../../../../../com/oracle/truffle/api/impl/asm/Attribute.d.ts'
import type { Attribute$Set } from '../../../../../../com/oracle/truffle/api/impl/asm/Attribute$Set.d.ts'
import type { ByteVector } from '../../../../../../com/oracle/truffle/api/impl/asm/ByteVector.d.ts'
import type { RecordComponentVisitor } from '../../../../../../com/oracle/truffle/api/impl/asm/RecordComponentVisitor.d.ts'
import type { SymbolTable } from '../../../../../../com/oracle/truffle/api/impl/asm/SymbolTable.d.ts'
import type { TypePath } from '../../../../../../com/oracle/truffle/api/impl/asm/TypePath.d.ts'
export class RecordComponentWriter extends RecordComponentVisitor {
    constructor(symbolTable: SymbolTable, name: string, descriptor: string, signature: string)
    // private descriptorIndex: number;
    // private firstAttribute: Attribute;
    // private lastRuntimeInvisibleAnnotation: AnnotationWriter;
    // private lastRuntimeInvisibleTypeAnnotation: AnnotationWriter;
    // private lastRuntimeVisibleAnnotation: AnnotationWriter;
    // private lastRuntimeVisibleTypeAnnotation: AnnotationWriter;
    // private nameIndex: number;
    // private signatureIndex: number;
    // private symbolTable: SymbolTable;
    collectAttributePrototypes(attributePrototypes: Attribute$Set): void;
    computeRecordComponentInfoSize(): number;
    putRecordComponentInfo(output: ByteVector): void;
    visitAnnotation(descriptor: string, visible: boolean): AnnotationVisitor;
    visitAttribute(attribute: Attribute): void;
    visitEnd(): void;
    visitTypeAnnotation(typeRef: number, typePath: TypePath, descriptor: string, visible: boolean): AnnotationVisitor;
}