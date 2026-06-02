import type { Object } from '../../../java/lang/Object.d.ts'
import type { AnnotationVisitor } from '../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { AnnotationWriter } from '../../../org/objectweb/asm/AnnotationWriter.d.ts'
import type { Attribute } from '../../../org/objectweb/asm/Attribute.d.ts'
import type { Attribute$Set } from '../../../org/objectweb/asm/Attribute$Set.d.ts'
import type { ByteVector } from '../../../org/objectweb/asm/ByteVector.d.ts'
import type { FieldVisitor } from '../../../org/objectweb/asm/FieldVisitor.d.ts'
import type { SymbolTable } from '../../../org/objectweb/asm/SymbolTable.d.ts'
import type { TypePath } from '../../../org/objectweb/asm/TypePath.d.ts'
export class FieldWriter extends FieldVisitor {
    constructor(arg0: SymbolTable, arg1: number, arg2: string, arg3: string, arg4: string, arg5: Object)
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
    collectAttributePrototypes(arg0: Attribute$Set): void;
    computeFieldInfoSize(): number;
    putFieldInfo(arg0: ByteVector): void;
    visitAnnotation(arg0: string, arg1: boolean): AnnotationVisitor;
    visitAttribute(arg0: Attribute): void;
    visitEnd(): void;
    visitTypeAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): AnnotationVisitor;
}