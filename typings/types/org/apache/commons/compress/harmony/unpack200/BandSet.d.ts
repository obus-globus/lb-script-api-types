import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BHSDCodec } from '../../../../../../org/apache/commons/compress/harmony/pack200/BHSDCodec.d.ts'
import type { Segment } from '../../../../../../org/apache/commons/compress/harmony/unpack200/Segment.d.ts'
import type { SegmentHeader } from '../../../../../../org/apache/commons/compress/harmony/unpack200/SegmentHeader.d.ts'
import type { CPClass } from '../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPClass.d.ts'
import type { CPDouble } from '../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPDouble.d.ts'
import type { CPFieldRef } from '../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPFieldRef.d.ts'
import type { CPFloat } from '../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPFloat.d.ts'
import type { CPInteger } from '../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPInteger.d.ts'
import type { CPInterfaceMethodRef } from '../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPInterfaceMethodRef.d.ts'
import type { CPLong } from '../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPLong.d.ts'
import type { CPMethodRef } from '../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPMethodRef.d.ts'
import type { CPNameAndType } from '../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPNameAndType.d.ts'
import type { CPString } from '../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPString.d.ts'
import type { CPUTF8 } from '../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPUTF8.d.ts'
export abstract class BandSet extends Object {
    constructor(arg0: Segment)
    // private header: SegmentHeader;
    // private segment: Segment;
    decodeBandInt(arg0: string, arg1: InputStream, arg2: BHSDCodec, arg3: number): number[];
    decodeBandInt(arg0: string, arg1: InputStream, arg2: BHSDCodec, arg3: number[]): number[][];
    getReferences(arg0: number[][], arg1: string[]): string[][];
    getReferences(arg0: number[], arg1: string[]): string[];
    parseCPClassReferences(arg0: string, arg1: InputStream, arg2: BHSDCodec, arg3: number): CPClass[];
    parseCPDescriptorReferences(arg0: string, arg1: InputStream, arg2: BHSDCodec, arg3: number): CPNameAndType[];
    parseCPDoubleReferences(arg0: string, arg1: InputStream, arg2: BHSDCodec, arg3: number): CPDouble[];
    parseCPFieldRefReferences(arg0: string, arg1: InputStream, arg2: BHSDCodec, arg3: number): CPFieldRef[];
    parseCPFloatReferences(arg0: string, arg1: InputStream, arg2: BHSDCodec, arg3: number): CPFloat[];
    parseCPIntReferences(arg0: string, arg1: InputStream, arg2: BHSDCodec, arg3: number): CPInteger[];
    parseCPInterfaceMethodRefReferences(arg0: string, arg1: InputStream, arg2: BHSDCodec, arg3: number): CPInterfaceMethodRef[];
    parseCPLongReferences(arg0: string, arg1: InputStream, arg2: BHSDCodec, arg3: number): CPLong[];
    parseCPMethodRefReferences(arg0: string, arg1: InputStream, arg2: BHSDCodec, arg3: number): CPMethodRef[];
    parseCPSignatureReferences(arg0: string, arg1: InputStream, arg2: BHSDCodec, arg3: number): CPUTF8[];
    parseCPSignatureReferences(arg0: string, arg1: InputStream, arg2: BHSDCodec, arg3: number[]): CPUTF8[][];
    parseCPStringReferences(arg0: string, arg1: InputStream, arg2: BHSDCodec, arg3: number): CPString[];
    parseCPUTF8References(arg0: string, arg1: InputStream, arg2: BHSDCodec, arg3: number): CPUTF8[];
    parseCPUTF8References(arg0: string, arg1: InputStream, arg2: BHSDCodec, arg3: number[]): CPUTF8[][];
    parseFlags(arg0: string, arg1: InputStream, arg2: number, arg3: BHSDCodec, arg4: boolean): number[];
    parseFlags(arg0: string, arg1: InputStream, arg2: number, arg3: BHSDCodec, arg4: BHSDCodec): number[];
    parseFlags(arg0: string, arg1: InputStream, arg2: number[], arg3: BHSDCodec, arg4: boolean): number[][];
    parseFlags(arg0: string, arg1: InputStream, arg2: number[], arg3: BHSDCodec, arg4: BHSDCodec): number[][];
    parseReferences(arg0: string, arg1: InputStream, arg2: BHSDCodec, arg3: number, arg4: string[]): string[];
    parseReferences(arg0: string, arg1: InputStream, arg2: BHSDCodec, arg3: number[], arg4: string[]): string[][];
    read(arg0: InputStream): void;
    unpack(): void;
    unpack(arg0: InputStream): void;
}