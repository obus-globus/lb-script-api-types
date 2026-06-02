import type { AnnotationVisitor } from '../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { AnnotationWriter } from '../../../org/objectweb/asm/AnnotationWriter.d.ts'
import type { Attribute } from '../../../org/objectweb/asm/Attribute.d.ts'
import type { Attribute$Set } from '../../../org/objectweb/asm/Attribute$Set.d.ts'
import type { ByteVector } from '../../../org/objectweb/asm/ByteVector.d.ts'
import type { RecordComponentVisitor } from '../../../org/objectweb/asm/RecordComponentVisitor.d.ts'
import type { SymbolTable } from '../../../org/objectweb/asm/SymbolTable.d.ts'
import type { TypePath } from '../../../org/objectweb/asm/TypePath.d.ts'
export class RecordComponentWriter extends RecordComponentVisitor {
    constructor(arg0: SymbolTable, arg1: string, arg2: string, arg3: string)
    // private descriptorIndex: number;
    // private firstAttribute: Attribute;
    // private lastRuntimeInvisibleAnnotation: AnnotationWriter;
    // private lastRuntimeInvisibleTypeAnnotation: AnnotationWriter;
    // private lastRuntimeVisibleAnnotation: AnnotationWriter;
    // private lastRuntimeVisibleTypeAnnotation: AnnotationWriter;
    // private nameIndex: number;
    // private signatureIndex: number;
    // private symbolTable: SymbolTable;
    collectAttributePrototypes(arg0: Attribute$Set): void;
    computeRecordComponentInfoSize(): number;
    putRecordComponentInfo(arg0: ByteVector): void;
    visitAnnotation(arg0: string, arg1: boolean): AnnotationVisitor;
    visitAttribute(arg0: Attribute): void;
    visitEnd(): void;
    visitTypeAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): AnnotationVisitor;
}