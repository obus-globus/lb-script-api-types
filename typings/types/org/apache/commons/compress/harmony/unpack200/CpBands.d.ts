import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { BandSet } from '../../../../../../org/apache/commons/compress/harmony/unpack200/BandSet.d.ts'
import type { Segment } from '../../../../../../org/apache/commons/compress/harmony/unpack200/Segment.d.ts'
import type { SegmentConstantPool } from '../../../../../../org/apache/commons/compress/harmony/unpack200/SegmentConstantPool.d.ts'
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
export class CpBands extends BandSet {
    constructor(arg0: Segment)
    // private classOffset: number;
    readonly cpClass: string[];
    // private cpClassInts: number[];
    readonly cpDescriptor: string[];
    readonly cpDescriptorNameInts: number[];
    readonly cpDescriptorTypeInts: number[];
    // private cpDouble: number[];
    readonly cpFieldClass: string[];
    // private cpFieldClassInts: number[];
    // private cpFieldDescriptor: string[];
    // private cpFieldDescriptorInts: number[];
    // private cpFloat: number[];
    readonly cpIMethodClass: string[];
    // private cpIMethodClassInts: number[];
    // private cpIMethodDescriptor: string[];
    // private cpIMethodDescriptorInts: number[];
    readonly cpInt: number[];
    readonly cpLong: number[];
    readonly cpMethodClass: string[];
    // private cpMethodClassInts: number[];
    readonly cpMethodDescriptor: string[];
    // private cpMethodDescriptorInts: number[];
    readonly cpSignature: string[];
    // private cpSignatureInts: number[];
    // private cpString: string[];
    // private cpStringInts: number[];
    readonly cpUTF8: string[];
    // private descrOffset: number;
    // private descriptorsToCPNameAndTypes: JavaMap<string, CPNameAndType>;
    // private doubleOffset: number;
    // private doublesToCPDoubles: JavaMap<number, CPDouble>;
    // private fieldOffset: number;
    // private floatOffset: number;
    // private floatsToCPFloats: JavaMap<number, CPFloat>;
    // private imethodOffset: number;
    // private intOffset: number;
    // private integersToCPIntegers: JavaMap<number, CPInteger>;
    // private longOffset: number;
    // private longsToCPLongs: JavaMap<number, CPLong>;
    // private mapClass: JavaMap<string, number>;
    // private mapDescriptor: JavaMap<string, number>;
    // private mapSignature: JavaMap<string, number>;
    // private mapUTF8: JavaMap<string, number>;
    // private methodOffset: number;
    // private pool: SegmentConstantPool;
    // private signatureOffset: number;
    // private stringOffset: number;
    // private stringsToCPClass: JavaMap<string, CPClass>;
    // private stringsToCPStrings: JavaMap<string, CPString>;
    // private stringsToCPUTF8: JavaMap<string, CPUTF8>;
    cpClassValue(arg0: number): CPClass;
    cpClassValue(arg0: string): CPClass;
    cpDoubleValue(arg0: number): CPDouble;
    cpFieldValue(arg0: number): CPFieldRef;
    cpFloatValue(arg0: number): CPFloat;
    cpIMethodValue(arg0: number): CPInterfaceMethodRef;
    cpIntegerValue(arg0: number): CPInteger;
    cpLongValue(arg0: number): CPLong;
    cpMethodValue(arg0: number): CPMethodRef;
    cpNameAndTypeValue(arg0: number): CPNameAndType;
    cpNameAndTypeValue(arg0: string): CPNameAndType;
    cpSignatureValue(arg0: number): CPUTF8;
    cpStringValue(arg0: number): CPString;
    cpUTF8Value(arg0: number): CPUTF8;
    cpUTF8Value(arg0: string): CPUTF8;
    cpUTF8Value(arg0: string, arg1: boolean): CPUTF8;
    getConstantPool(): SegmentConstantPool;
    getCpClass(): string[];
    getCpDescriptor(): string[];
    getCpDescriptorNameInts(): number[];
    getCpDescriptorTypeInts(): number[];
    getCpFieldClass(): string[];
    getCpIMethodClass(): string[];
    getCpInt(): number[];
    getCpLong(): number[];
    getCpMethodClass(): string[];
    getCpMethodDescriptor(): string[];
    getCpSignature(): string[];
    getCpUTF8(): string[];
    // private parseCpClass(arg0: InputStream): void;
    // private parseCpDescriptor(arg0: InputStream): void;
    // private parseCpDouble(arg0: InputStream): void;
    // private parseCpField(arg0: InputStream): void;
    // private parseCpFloat(arg0: InputStream): void;
    // private parseCpIMethod(arg0: InputStream): void;
    // private parseCpInt(arg0: InputStream): void;
    // private parseCpLong(arg0: InputStream): void;
    // private parseCpMethod(arg0: InputStream): void;
    // private parseCpSignature(arg0: InputStream): void;
    // private parseCpString(arg0: InputStream): void;
    // private parseCpUtf8(arg0: InputStream): void;
    read(arg0: InputStream): void;
    unpack(): void;
    unpack(arg0: InputStream): void;
}