import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BandSet } from '../../../../../../org/apache/commons/compress/harmony/pack200/BandSet.d.ts'
import type { CPClass } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPClass.d.ts'
import type { CPDouble } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPDouble.d.ts'
import type { CPFloat } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPFloat.d.ts'
import type { CPInt } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPInt.d.ts'
import type { CPLong } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPLong.d.ts'
import type { CPMethodOrField } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPMethodOrField.d.ts'
import type { CPString } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPString.d.ts'
import type { CpBands } from '../../../../../../org/apache/commons/compress/harmony/pack200/CpBands.d.ts'
import type { IntList } from '../../../../../../org/apache/commons/compress/harmony/pack200/IntList.d.ts'
import type { Segment } from '../../../../../../org/apache/commons/compress/harmony/pack200/Segment.d.ts'
import type { Label } from '../../../../../../org/objectweb/asm/Label.d.ts'
export class BcBands extends BandSet {
    constructor(arg0: CpBands, arg1: Segment, arg2: number)
    // private bcByte: IntList;
    // private bcCaseCount: IntList;
    // private bcCaseValue: IntList;
    // private bcClassRef: CPClass[];
    // private bcCodes: IntList;
    // private bcDoubleRef: CPDouble[];
    // private bcFieldRef: CPMethodOrField[];
    // private bcFloatRef: CPFloat[];
    // private bcIMethodRef: CPMethodOrField[];
    // private bcInitRef: (Object | null)[];
    // private bcIntref: CPInt[];
    // private bcLabel: (Object | null)[];
    // private bcLabelRelativeOffsets: IntList;
    // private bcLocal: IntList;
    // private bcLongRef: CPLong[];
    // private bcMethodRef: CPMethodOrField[];
    // private bcShort: IntList;
    // private bcStringRef: CPString[];
    // private bcSuperField: (Object | null)[];
    // private bcSuperMethod: (Object | null)[];
    // private bcThisField: (Object | null)[];
    // private bcThisMethod: (Object | null)[];
    // private bciRenumbering: IntList;
    // private byteCodeOffset: number;
    // private cpBands: CpBands;
    // private currentClass: string;
    // private currentNewClass: string;
    // private labelsToOffsets: JavaMap<Label, number>;
    // private renumberedOffset: number;
    // private segment: Segment;
    // private superClass: string;
    finaliseBands(): void;
    // private getIndexInClass(arg0: CPMethodOrField[]): number[];
    // private getIndexInClassForConstructor(arg0: CPMethodOrField[]): number[];
    pack(arg0: OutputStream): void;
    setCurrentClass(arg0: string, arg1: string): void;
    // private updateRenumbering(): void;
    visitEnd(): void;
    visitFieldInsn(arg0: number, arg1: string, arg2: string, arg3: string): void;
    visitIincInsn(arg0: number, arg1: number): void;
    visitInsn(arg0: number): void;
    visitIntInsn(arg0: number, arg1: number): void;
    visitJumpInsn(arg0: number, arg1: Label): void;
    visitLabel(arg0: Label): void;
    visitLdcInsn(arg0: Object): void;
    visitLookupSwitchInsn(arg0: Label, arg1: number[], arg2: Label[]): void;
    visitMethodInsn(arg0: number, arg1: string, arg2: string, arg3: string): void;
    visitMultiANewArrayInsn(arg0: string, arg1: number): void;
    visitTableSwitchInsn(arg0: number, arg1: number, arg2: Label, ...arg3: Label[]): void;
    visitTypeInsn(arg0: number, arg1: string): void;
    visitVarInsn(arg0: number, arg1: number): void;
}