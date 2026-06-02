import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Archive$SegmentUnit } from '../../../../../../org/apache/commons/compress/harmony/pack200/Archive$SegmentUnit.d.ts'
import type { AttributeDefinitionBands } from '../../../../../../org/apache/commons/compress/harmony/pack200/AttributeDefinitionBands.d.ts'
import type { BcBands } from '../../../../../../org/apache/commons/compress/harmony/pack200/BcBands.d.ts'
import type { ClassBands } from '../../../../../../org/apache/commons/compress/harmony/pack200/ClassBands.d.ts'
import type { CpBands } from '../../../../../../org/apache/commons/compress/harmony/pack200/CpBands.d.ts'
import type { FileBands } from '../../../../../../org/apache/commons/compress/harmony/pack200/FileBands.d.ts'
import type { IcBands } from '../../../../../../org/apache/commons/compress/harmony/pack200/IcBands.d.ts'
import type { Pack200ClassReader } from '../../../../../../org/apache/commons/compress/harmony/pack200/Pack200ClassReader.d.ts'
import type { PackingOptions } from '../../../../../../org/apache/commons/compress/harmony/pack200/PackingOptions.d.ts'
import type { Segment$SegmentFieldVisitor } from '../../../../../../org/apache/commons/compress/harmony/pack200/Segment$SegmentFieldVisitor.d.ts'
import type { Segment$SegmentMethodVisitor } from '../../../../../../org/apache/commons/compress/harmony/pack200/Segment$SegmentMethodVisitor.d.ts'
import type { SegmentHeader } from '../../../../../../org/apache/commons/compress/harmony/pack200/SegmentHeader.d.ts'
import type { AnnotationVisitor } from '../../../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { Attribute } from '../../../../../../org/objectweb/asm/Attribute.d.ts'
import type { ClassVisitor } from '../../../../../../org/objectweb/asm/ClassVisitor.d.ts'
import type { FieldVisitor } from '../../../../../../org/objectweb/asm/FieldVisitor.d.ts'
import type { MethodVisitor } from '../../../../../../org/objectweb/asm/MethodVisitor.d.ts'
export class Segment extends ClassVisitor {
    static ASM_API: number;
    constructor()
    // private attributeDefinitionBands: AttributeDefinitionBands;
    // private bcBands: BcBands;
    readonly classBands: ClassBands;
    readonly cpBands: CpBands;
    readonly currentClassReader: Pack200ClassReader;
    // private fieldVisitor: Segment$SegmentFieldVisitor;
    // private fileBands: FileBands;
    readonly icBands: IcBands;
    // private methodVisitor: Segment$SegmentMethodVisitor;
    // private nonStandardAttributePrototypes: Attribute[];
    // private options: PackingOptions;
    readonly segmentHeader: SegmentHeader;
    // private stripDebug: boolean;
    // private addValueAndTag(arg0: Object, arg1: string[], arg2: Object[]): void;
    getAttrBands(): AttributeDefinitionBands;
    getClassBands(): ClassBands;
    getCpBands(): CpBands;
    getCurrentClassReader(): Pack200ClassReader;
    getIcBands(): IcBands;
    getSegmentHeader(): SegmentHeader;
    lastConstantHadWideIndex(): boolean;
    pack(arg0: Archive$SegmentUnit, arg1: OutputStream, arg2: PackingOptions): void;
    // private passCurrentClass(): void;
    // private processClasses(arg0: Archive$SegmentUnit, arg1: Attribute[]): void;
    visit(arg0: number, arg1: number, arg2: string, arg3: string, arg4: string, arg5: string[]): void;
    visitAnnotation(arg0: string, arg1: boolean): AnnotationVisitor;
    visitAttribute(arg0: Attribute): void;
    visitEnd(): void;
    visitField(arg0: number, arg1: string, arg2: string, arg3: string, arg4: Object): FieldVisitor;
    visitInnerClass(arg0: string, arg1: string, arg2: string, arg3: number): void;
    visitMethod(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string[]): MethodVisitor;
    visitOuterClass(arg0: string, arg1: string, arg2: string): void;
    visitSource(arg0: string, arg1: string): void;
}