import type { AnnotationVisitor } from '../../../../../../com/oracle/truffle/api/impl/asm/AnnotationVisitor.d.ts'
import type { AnnotationWriter } from '../../../../../../com/oracle/truffle/api/impl/asm/AnnotationWriter.d.ts'
import type { Attribute } from '../../../../../../com/oracle/truffle/api/impl/asm/Attribute.d.ts'
import type { Attribute$Set } from '../../../../../../com/oracle/truffle/api/impl/asm/Attribute$Set.d.ts'
import type { ByteVector } from '../../../../../../com/oracle/truffle/api/impl/asm/ByteVector.d.ts'
import type { FieldVisitor } from '../../../../../../com/oracle/truffle/api/impl/asm/FieldVisitor.d.ts'
import type { SymbolTable } from '../../../../../../com/oracle/truffle/api/impl/asm/SymbolTable.d.ts'
import type { TypePath } from '../../../../../../com/oracle/truffle/api/impl/asm/TypePath.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FieldWriter extends FieldVisitor {
    constructor(symbolTable: SymbolTable, access: number, name: string, descriptor: string, signature: string, constantValue: Object)
    // private accessFlags: number;
    // private constantValueIndex: number;
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
    computeFieldInfoSize(): number;
    putFieldInfo(output: ByteVector): void;
    visitAnnotation(descriptor: string, visible: boolean): AnnotationVisitor;
    visitAttribute(attribute: Attribute): void;
    visitEnd(): void;
    visitTypeAnnotation(typeRef: number, typePath: TypePath, descriptor: string, visible: boolean): AnnotationVisitor;
}