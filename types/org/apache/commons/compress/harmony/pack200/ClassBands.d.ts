import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AttributeDefinitionBands } from '../../../../../../org/apache/commons/compress/harmony/pack200/AttributeDefinitionBands.d.ts'
import type { BandSet } from '../../../../../../org/apache/commons/compress/harmony/pack200/BandSet.d.ts'
import type { CPClass } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPClass.d.ts'
import type { CPConstant } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPConstant.d.ts'
import type { CPNameAndType } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPNameAndType.d.ts'
import type { CPSignature } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPSignature.d.ts'
import type { CPUTF8 } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPUTF8.d.ts'
import type { ClassBands$TempParamAnnotation } from '../../../../../../org/apache/commons/compress/harmony/pack200/ClassBands$TempParamAnnotation.d.ts'
import type { ConstantPoolEntry } from '../../../../../../org/apache/commons/compress/harmony/pack200/ConstantPoolEntry.d.ts'
import type { CpBands } from '../../../../../../org/apache/commons/compress/harmony/pack200/CpBands.d.ts'
import type { IntList } from '../../../../../../org/apache/commons/compress/harmony/pack200/IntList.d.ts'
import type { MetadataBandGroup } from '../../../../../../org/apache/commons/compress/harmony/pack200/MetadataBandGroup.d.ts'
import type { NewAttribute } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttribute.d.ts'
import type { NewAttributeBands } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttributeBands.d.ts'
import type { Segment } from '../../../../../../org/apache/commons/compress/harmony/pack200/Segment.d.ts'
import type { Label } from '../../../../../../org/objectweb/asm/Label.d.ts'
export class ClassBands extends BandSet {
    constructor(arg0: Segment, arg1: number, arg2: number, arg3: boolean)
    readonly anySyntheticClasses: boolean;
    readonly anySyntheticFields: boolean;
    readonly anySyntheticMethods: boolean;
    // private attrBands: AttributeDefinitionBands;
    // private classAttributeBands: NewAttributeBands[];
    // private classEnclosingMethodClass: ConstantPoolEntry[];
    // private classEnclosingMethodDesc: ConstantPoolEntry[];
    // private classFileVersionMajor: IntList;
    // private classFileVersionMinor: IntList;
    // private classInnerClassesNameRUN: CPUTF8[];
    // private classInnerClassesOuterRCN: CPClass[];
    // private classReferencesInnerClass: Map<CPClass, CPClass[]>;
    // private classSignature: CPSignature[];
    // private classSourceFile: CPUTF8[];
    // private class_InnerClasses_F: number[];
    // private class_InnerClasses_N: number[];
    // private class_InnerClasses_RC: CPClass[];
    // private class_RIA_bands: MetadataBandGroup;
    // private class_RVA_bands: MetadataBandGroup;
    // private class_attr_calls: number[];
    // private class_field_count: number[];
    // private class_flags: number[];
    // private class_interface: CPClass[][];
    // private class_interface_count: number[];
    // private class_method_count: number[];
    // private class_super: CPClass[];
    // private class_this: CPClass[];
    // private codeAttributeBands: NewAttributeBands[];
    // private codeFlags: number[];
    // private codeHandlerCatchPO: (Object | null)[];
    // private codeHandlerClass: CPClass[];
    // private codeHandlerCount: IntList;
    // private codeHandlerEndPO: (Object | null)[];
    // private codeHandlerStartP: (Object | null)[];
    // private codeHeaders: number[];
    // private codeLineNumberTableBciP: (Object | null)[];
    // private codeLineNumberTableLine: IntList;
    // private codeLineNumberTableN: IntList;
    // private codeLocalVariableTableBciP: (Object | null)[];
    // private codeLocalVariableTableN: IntList;
    // private codeLocalVariableTableNameRU: ConstantPoolEntry[];
    // private codeLocalVariableTableSlot: IntList;
    // private codeLocalVariableTableSpanO: (Object | null)[];
    // private codeLocalVariableTableTypeRS: ConstantPoolEntry[];
    // private codeLocalVariableTypeTableBciP: (Object | null)[];
    // private codeLocalVariableTypeTableN: IntList;
    // private codeLocalVariableTypeTableNameRU: ConstantPoolEntry[];
    // private codeLocalVariableTypeTableSlot: IntList;
    // private codeLocalVariableTypeTableSpanO: (Object | null)[];
    // private codeLocalVariableTypeTableTypeRS: ConstantPoolEntry[];
    // private codeMaxLocals: IntList;
    // private codeMaxStack: IntList;
    // private code_attr_calls: number[];
    // private cpBands: CpBands;
    // private fieldAttributeBands: NewAttributeBands[];
    // private fieldConstantValueKQ: CPConstant<Object>[];
    // private fieldSignature: CPSignature[];
    // private field_RIA_bands: MetadataBandGroup;
    // private field_RVA_bands: MetadataBandGroup;
    // private field_attr_calls: number[];
    // private field_descr: CPNameAndType[][];
    // private field_flags: number[][];
    // private index: number;
    // private major_versions: number[];
    // private methodAttributeBands: NewAttributeBands[];
    // private methodExceptionClasses: CPClass[];
    // private methodExceptionNumber: IntList;
    // private methodSignature: CPSignature[];
    // private method_AD_bands: MetadataBandGroup;
    // private method_RIA_bands: MetadataBandGroup;
    // private method_RIPA_bands: MetadataBandGroup;
    // private method_RVA_bands: MetadataBandGroup;
    // private method_RVPA_bands: MetadataBandGroup;
    // private method_attr_calls: number[];
    // private method_descr: CPNameAndType[][];
    // private method_flags: number[][];
    // private numMethodArgs: number;
    // private segment: Segment;
    // private stripDebug: boolean;
    // private tempFieldDesc: CPNameAndType[];
    // private tempFieldFlags: number[];
    // private tempMethodDesc: CPNameAndType[];
    // private tempMethodFlags: number[];
    // private tempMethodRIPA: ClassBands$TempParamAnnotation;
    // private tempMethodRVPA: ClassBands$TempParamAnnotation;
    addAnnotation(arg0: number, arg1: string, arg2: boolean, arg3: string[], arg4: string[], arg5: Object[], arg6: number[], arg7: string[], arg8: string[], arg9: number[]): void;
    addAnnotationDefault(arg0: string[], arg1: string[], arg2: Object[], arg3: number[], arg4: string[], arg5: string[], arg6: number[]): void;
    addClass(arg0: number, arg1: number, arg2: string, arg3: string, arg4: string, arg5: string[]): void;
    addClassAttribute(arg0: NewAttribute): void;
    addCode(): void;
    addCodeAttribute(arg0: NewAttribute): void;
    addEnclosingMethod(arg0: string, arg1: string, arg2: string): void;
    addField(arg0: number, arg1: string, arg2: string, arg3: string, arg4: Object): void;
    addFieldAttribute(arg0: NewAttribute): void;
    addHandler(arg0: Label, arg1: Label, arg2: Label, arg3: string): void;
    addLineNumber(arg0: number, arg1: Label): void;
    addLocalVariable(arg0: string, arg1: string, arg2: string, arg3: Label, arg4: Label, arg5: number): void;
    addMaxStack(arg0: number, arg1: number): void;
    addMethod(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string[]): void;
    addMethodAttribute(arg0: NewAttribute): void;
    addParameterAnnotation(arg0: number, arg1: string, arg2: boolean, arg3: string[], arg4: string[], arg5: Object[], arg6: number[], arg7: string[], arg8: string[], arg9: number[]): void;
    addSourceFile(arg0: string): void;
    // private createNewAttributeBands(): void;
    currentClassReferencesInnerClass(arg0: CPClass): void;
    doBciRenumbering(arg0: IntList, arg1: Map<Label, number>): void;
    endOfClass(): void;
    endOfMethod(): void;
    finaliseBands(): void;
    // private getInts(arg0: CPClass[]): number[];
    isAnySyntheticClasses(): boolean;
    isAnySyntheticFields(): boolean;
    isAnySyntheticMethods(): boolean;
    // private isInnerClass(arg0: string): boolean;
    // private isInnerClassOf(arg0: string, arg1: CPClass): boolean;
    numClassesProcessed(): number;
    pack(arg0: OutputStream): void;
    removeCurrentClass(): void;
    // private renumberBci(arg0: number[], arg1: IntList, arg2: Map<Label, number>): void;
    // private renumberDoubleOffsetBci(arg0: number[], arg1: number[], arg2: Object[], arg3: IntList, arg4: Map<Label, number>): void;
    // private renumberOffsetBci(arg0: number[], arg1: number[], arg2: IntList, arg3: Map<Label, number>): void;
    // private sum(arg0: number[]): number;
    // private writeClassAttributeBands(arg0: OutputStream): void;
    // private writeCodeAttributeBands(arg0: OutputStream): void;
    // private writeCodeBands(arg0: OutputStream): void;
    // private writeFieldAttributeBands(arg0: OutputStream): void;
    // private writeMethodAttributeBands(arg0: OutputStream): void;
}