import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { StringReader } from '../../../../../../java/io/StringReader.d.ts'
import type { AttributeDefinitionBands$AttributeDefinition } from '../../../../../../org/apache/commons/compress/harmony/pack200/AttributeDefinitionBands$AttributeDefinition.d.ts'
import type { BHSDCodec } from '../../../../../../org/apache/commons/compress/harmony/pack200/BHSDCodec.d.ts'
import type { BandSet } from '../../../../../../org/apache/commons/compress/harmony/pack200/BandSet.d.ts'
import type { CpBands } from '../../../../../../org/apache/commons/compress/harmony/pack200/CpBands.d.ts'
import type { IntList } from '../../../../../../org/apache/commons/compress/harmony/pack200/IntList.d.ts'
import type { NewAttribute } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttribute.d.ts'
import type { NewAttributeBands$AttributeLayoutElement } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttributeBands$AttributeLayoutElement.d.ts'
import type { NewAttributeBands$Callable } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttributeBands$Callable.d.ts'
import type { NewAttributeBands$Integral } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttributeBands$Integral.d.ts'
import type { NewAttributeBands$LayoutElement } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttributeBands$LayoutElement.d.ts'
import type { NewAttributeBands$UnionCase } from '../../../../../../org/apache/commons/compress/harmony/pack200/NewAttributeBands$UnionCase.d.ts'
import type { SegmentHeader } from '../../../../../../org/apache/commons/compress/harmony/pack200/SegmentHeader.d.ts'
import type { Label } from '../../../../../../org/objectweb/asm/Label.d.ts'
export class NewAttributeBands extends BandSet {
    constructor(arg0: number, arg1: CpBands, arg2: SegmentHeader, arg3: AttributeDefinitionBands$AttributeDefinition)
    // private attributeLayoutElements: NewAttributeBands$AttributeLayoutElement[];
    // private backwardsCallCounts: number[];
    // private cpBands: CpBands;
    // private def: AttributeDefinitionBands$AttributeDefinition;
    // private lastPIntegral: NewAttributeBands$Integral;
    readonly usedAtLeastOnce: boolean;
    addAttribute(arg0: NewAttribute): void;
    getAttributeName(): string;
    // private getCodec(arg0: string): BHSDCodec;
    getFlagIndex(): number;
    // private getStreamUpToMatchingBracket(arg0: StringReader): StringReader;
    isUsedAtLeastOnce(): boolean;
    numBackwardsCalls(): number[];
    pack(arg0: OutputStream): void;
    // private parseLayout(): void;
    // private readBody(arg0: StringReader): NewAttributeBands$LayoutElement[];
    // private readInteger(arg0: number, arg1: InputStream): number;
    // private readNextAttributeElement(arg0: StringReader): NewAttributeBands$AttributeLayoutElement;
    // private readNextLayoutElement(arg0: StringReader): NewAttributeBands$LayoutElement;
    // private readNextUnionCase(arg0: StringReader): NewAttributeBands$UnionCase;
    // private readNumber(arg0: StringReader): number;
    // private readUpToMatchingBracket(arg0: StringReader): string;
    renumberBci(arg0: IntList, arg1: Map<Label, number>): void;
    // private resolveCalls(): void;
    // private resolveCallsForElement(arg0: number, arg1: NewAttributeBands$Callable, arg2: NewAttributeBands$LayoutElement): void;
}