import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BandSet } from '../../../../../../org/apache/commons/compress/harmony/pack200/BandSet.d.ts'
import type { CPClass } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPClass.d.ts'
import type { CPConstant } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPConstant.d.ts'
import type { CPDouble } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPDouble.d.ts'
import type { CPFloat } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPFloat.d.ts'
import type { CPInt } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPInt.d.ts'
import type { CPLong } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPLong.d.ts'
import type { CPMethodOrField } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPMethodOrField.d.ts'
import type { CPNameAndType } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPNameAndType.d.ts'
import type { CPSignature } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPSignature.d.ts'
import type { CPString } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPString.d.ts'
import type { CPUTF8 } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPUTF8.d.ts'
import type { Segment } from '../../../../../../org/apache/commons/compress/harmony/pack200/Segment.d.ts'
export class CpBands extends BandSet {
    constructor(arg0: Segment, arg1: number)
    // private cp_Class: CPClass[];
    // private cp_Descr: CPNameAndType[];
    // private cp_Double: CPDouble[];
    // private cp_Field: CPMethodOrField[];
    // private cp_Float: CPFloat[];
    // private cp_Imethod: CPMethodOrField[];
    // private cp_Int: CPInt[];
    // private cp_Long: CPLong[];
    // private cp_Method: CPMethodOrField[];
    // private cp_Signature: CPSignature[];
    // private cp_String: CPString[];
    // private cp_Utf8: CPUTF8[];
    // private defaultAttributeNames: string[];
    // private objectsToCPConstant: Map<Object, CPConstant<any>>;
    // private segment: Segment;
    // private stringsToCpClass: { [key: string]: CPClass };
    // private stringsToCpField: { [key: string]: CPMethodOrField };
    // private stringsToCpIMethod: { [key: string]: CPMethodOrField };
    // private stringsToCpMethod: { [key: string]: CPMethodOrField };
    // private stringsToCpNameAndType: { [key: string]: CPNameAndType };
    // private stringsToCpSignature: { [key: string]: CPSignature };
    // private stringsToCpUtf8: { [key: string]: CPUTF8 };
    addCPClass(arg0: string): void;
    addCPUtf8(arg0: string): void;
    // private addCharacters(arg0: string[], arg1: string[]): void;
    // private addIndices(): void;
    existsCpClass(arg0: string): boolean;
    finaliseBands(): void;
    getCPClass(arg0: string): CPClass;
    getCPField(arg0: string, arg1: string, arg2: string): CPMethodOrField;
    getCPField(arg0: CPClass, arg1: string, arg2: string): CPMethodOrField;
    getCPIMethod(arg0: string, arg1: string, arg2: string): CPMethodOrField;
    getCPIMethod(arg0: CPClass, arg1: string, arg2: string): CPMethodOrField;
    getCPMethod(arg0: string, arg1: string, arg2: string): CPMethodOrField;
    getCPMethod(arg0: CPClass, arg1: string, arg2: string): CPMethodOrField;
    getCPNameAndType(arg0: string, arg1: string): CPNameAndType;
    getCPSignature(arg0: string): CPSignature;
    getCPUtf8(arg0: string): CPUTF8;
    getConstant(arg0: Object): CPConstant<any>;
    pack(arg0: OutputStream): void;
    // private removeCpUtf8(arg0: string): void;
    // private removeSignaturesFromCpUTF8(): void;
    // private writeCpClass(arg0: OutputStream): void;
    // private writeCpDescr(arg0: OutputStream): void;
    // private writeCpDouble(arg0: OutputStream): void;
    // private writeCpFloat(arg0: OutputStream): void;
    // private writeCpInt(arg0: OutputStream): void;
    // private writeCpLong(arg0: OutputStream): void;
    // private writeCpMethodOrField(arg0: CPMethodOrField[], arg1: OutputStream, arg2: string): void;
    // private writeCpSignature(arg0: OutputStream): void;
    // private writeCpString(arg0: OutputStream): void;
    // private writeCpUtf8(arg0: OutputStream): void;
}