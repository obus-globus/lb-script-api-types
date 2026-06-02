import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../java/util/Iterator.d.ts'
import type { CpBands } from '../../../../../../org/apache/commons/compress/harmony/unpack200/CpBands.d.ts'
import type { AnnotationsAttribute$Annotation } from '../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/AnnotationsAttribute$Annotation.d.ts'
import type { Attribute } from '../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/Attribute.d.ts'
import type { CPDouble } from '../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPDouble.d.ts'
import type { CPFloat } from '../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPFloat.d.ts'
import type { CPInteger } from '../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPInteger.d.ts'
import type { CPLong } from '../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPLong.d.ts'
import type { CPUTF8 } from '../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPUTF8.d.ts'
export class MetadataBandGroup extends Object {
    static setRiaAttributeName(paramarg0: CPUTF8): void;
    static setRipaAttributeName(paramarg0: CPUTF8): void;
    static setRvaAttributeName(paramarg0: CPUTF8): void;
    static setRvpaAttributeName(paramarg0: CPUTF8): void;
    constructor(arg0: string, arg1: CpBands)
    T: number[];
    // private T_index: number;
    anno_N: number[];
    // private anno_N_Index: number;
    readonly attributes: Attribute[];
    caseD_KD: CPDouble[];
    // private caseD_KD_Index: number;
    caseF_KF: CPFloat[];
    // private caseF_KF_Index: number;
    caseI_KI: CPInteger[];
    // private caseI_KI_Index: number;
    caseJ_KJ: CPLong[];
    // private caseJ_KJ_Index: number;
    casearray_N: number[];
    // private casearray_N_Index: number;
    casec_RS: CPUTF8[];
    // private casec_RS_Index: number;
    caseec_RU: string[];
    // private caseec_RU_Index: number;
    caseet_RS: string[];
    // private caseet_RS_Index: number;
    cases_RU: CPUTF8[];
    // private cases_RU_Index: number;
    // private cpBands: CpBands;
    name_RU: CPUTF8[];
    nestname_RU: CPUTF8[];
    // private nestname_RU_Iterator: Iterator<CPUTF8>;
    nestpair_N: number[];
    // private nestpair_N_Index: number;
    nesttype_RS: CPUTF8[];
    // private nesttype_RS_Index: number;
    pair_N: number[][];
    // private pair_N_Index: number;
    param_NB: number[];
    // private type: string;
    type_RS: CPUTF8[][];
    // private getAnnotation(arg0: CPUTF8, arg1: number, arg2: Iterator<CPUTF8>): AnnotationsAttribute$Annotation;
    // private getAttribute(arg0: number, arg1: CPUTF8[], arg2: number[], arg3: Iterator<CPUTF8>): Attribute;
    getAttributes(): Attribute[];
    // private getNextValue(arg0: number): Object;
    // private getParameterAttribute(arg0: number, arg1: Iterator<CPUTF8>): Attribute;
}