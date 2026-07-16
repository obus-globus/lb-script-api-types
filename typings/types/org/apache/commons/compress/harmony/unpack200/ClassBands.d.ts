import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { AttributeLayoutMap } from '../../../../../../org/apache/commons/compress/harmony/unpack200/AttributeLayoutMap.d.ts'
import type { BandSet } from '../../../../../../org/apache/commons/compress/harmony/unpack200/BandSet.d.ts'
import type { CpBands } from '../../../../../../org/apache/commons/compress/harmony/unpack200/CpBands.d.ts'
import type { IcTuple } from '../../../../../../org/apache/commons/compress/harmony/unpack200/IcTuple.d.ts'
import type { MetadataBandGroup } from '../../../../../../org/apache/commons/compress/harmony/unpack200/MetadataBandGroup.d.ts'
import type { Segment } from '../../../../../../org/apache/commons/compress/harmony/unpack200/Segment.d.ts'
import type { SegmentOptions } from '../../../../../../org/apache/commons/compress/harmony/unpack200/SegmentOptions.d.ts'
import type { Attribute } from '../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/Attribute.d.ts'
export class ClassBands extends BandSet {
    constructor(arg0: Segment)
    // private attrMap: AttributeLayoutMap;
    // private classAccessFlags: number[];
    readonly classAttributes: Attribute[][];
    // private classCount: number;
    readonly classFieldCount: number[];
    readonly classFlags: number[];
    readonly classInterfacesInts: number[][];
    readonly classMethodCount: number[];
    readonly classSuperInts: number[];
    // private classThis: string[];
    readonly classThisInts: number[];
    readonly classVersionMajor: number[];
    readonly classVersionMinor: number[];
    // private codeAttributes: Attribute[][];
    readonly codeHandlerCatchPO: number[][];
    readonly codeHandlerClassRCN: number[][];
    readonly codeHandlerCount: number[];
    readonly codeHandlerEndPO: number[][];
    readonly codeHandlerStartP: number[][];
    readonly codeHasAttributes: boolean[];
    readonly codeMaxNALocals: number[];
    readonly codeMaxStack: number[];
    // private cpBands: CpBands;
    // private fieldAccessFlags: number[][];
    readonly fieldAttributes: Attribute[][][];
    // private fieldDescr: string[][];
    readonly fieldDescrInts: number[][];
    readonly fieldFlags: number[][];
    readonly icLocal: IcTuple[][];
    // private methodAccessFlags: number[][];
    // private methodAttrCalls: number[];
    readonly methodAttributes: Attribute[][][];
    readonly methodDescr: string[][];
    readonly methodDescrInts: number[][];
    readonly methodFlags: number[][];
    // private options: SegmentOptions;
    // private getCallCount(arg0: number[][], arg1: number[][], arg2: number): number;
    getClassAttributes(): Attribute[][];
    getClassFieldCount(): number[];
    getClassFlags(): number[];
    getClassInterfacesInts(): number[][];
    getClassMethodCount(): number[];
    getClassSuperInts(): number[];
    getClassThisInts(): number[];
    getClassVersionMajor(): number[];
    getClassVersionMinor(): number[];
    getCodeHandlerCatchPO(): number[][];
    getCodeHandlerClassRCN(): number[][];
    getCodeHandlerCount(): number[];
    getCodeHandlerEndPO(): number[][];
    getCodeHandlerStartP(): number[][];
    getCodeHasAttributes(): boolean[];
    getCodeMaxNALocals(): number[];
    getCodeMaxStack(): number[];
    getFieldAttributes(): Attribute[][][];
    getFieldDescrInts(): number[][];
    getFieldFlags(): number[][];
    getIcLocal(): IcTuple[][];
    getMethodAttributes(): Attribute[][][];
    getMethodDescr(): string[][];
    getMethodDescrInts(): number[][];
    getMethodFlags(): number[][];
    getOrderedCodeAttributes(): Attribute[][];
    getRawClassFlags(): number[];
    // private parseClassAttrBands(arg0: InputStream): void;
    // private parseClassMetadataBands(arg0: InputStream, arg1: number[]): number;
    // private parseCodeAttrBands(arg0: InputStream, arg1: number): void;
    // private parseCodeBands(arg0: InputStream): void;
    // private parseFieldAttrBands(arg0: InputStream): void;
    // private parseFieldBands(arg0: InputStream): void;
    // private parseFieldMetadataBands(arg0: InputStream, arg1: number[]): number;
    // private parseMetadata(arg0: InputStream, arg1: string[], arg2: number[], arg3: number[], arg4: string): MetadataBandGroup[];
    // private parseMethodAttrBands(arg0: InputStream): void;
    // private parseMethodBands(arg0: InputStream): void;
    // private parseMethodMetadataBands(arg0: InputStream, arg1: number[]): number;
    read(arg0: InputStream): void;
    unpack(): void;
    unpack(arg0: InputStream): void;
}