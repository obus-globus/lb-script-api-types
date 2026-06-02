import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../java/util/Iterator.d.ts'
import type { BandSet } from '../../../../../../org/apache/commons/compress/harmony/pack200/BandSet.d.ts'
import type { CPConstant } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPConstant.d.ts'
import type { CPSignature } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPSignature.d.ts'
import type { CPUTF8 } from '../../../../../../org/apache/commons/compress/harmony/pack200/CPUTF8.d.ts'
import type { CpBands } from '../../../../../../org/apache/commons/compress/harmony/pack200/CpBands.d.ts'
import type { IntList } from '../../../../../../org/apache/commons/compress/harmony/pack200/IntList.d.ts'
import type { SegmentHeader } from '../../../../../../org/apache/commons/compress/harmony/pack200/SegmentHeader.d.ts'
export class MetadataBandGroup extends BandSet {
    static CONTEXT_CLASS: number;
    static CONTEXT_FIELD: number;
    static CONTEXT_METHOD: number;
    constructor(arg0: string, arg1: number, arg2: CpBands, arg3: SegmentHeader, arg4: number)
    T: string[];
    anno_N: IntList;
    caseD_KD: CPConstant<Object>[];
    caseF_KF: CPConstant<Object>[];
    caseI_KI: CPConstant<Object>[];
    caseJ_KJ: CPConstant<Object>[];
    casearray_N: IntList;
    casec_RS: CPSignature[];
    caseec_RU: CPUTF8[];
    caseet_RS: CPSignature[];
    cases_RU: CPUTF8[];
    // private context: number;
    // private cpBands: CpBands;
    name_RU: CPUTF8[];
    nestname_RU: CPUTF8[];
    nestpair_N: IntList;
    nesttype_RS: CPSignature[];
    // private numBackwardsCalls: number;
    pair_N: IntList;
    param_NB: IntList;
    // private type: string;
    type_RS: CPSignature[];
    addAnnotation(arg0: string, arg1: string[], arg2: string[], arg3: Object[], arg4: number[], arg5: string[], arg6: string[], arg7: number[]): void;
    addParameterAnnotation(arg0: number, arg1: number[], arg2: IntList, arg3: string[], arg4: string[], arg5: string[], arg6: Object[], arg7: number[], arg8: string[], arg9: string[], arg10: number[]): void;
    hasContent(): boolean;
    incrementAnnoN(): void;
    newEntryInAnnoN(): void;
    // private nextString(arg0: Iterator<Object>): string;
    numBackwardsCalls(): number;
    pack(arg0: OutputStream): void;
    removeLatest(): void;
    // private removeOnePair(): void;
    // private tagListToArray(arg0: string[]): number[];
}