import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { StringReader } from '../../../../../../java/io/StringReader.d.ts'
import type { BHSDCodec } from '../../../../../../org/apache/commons/compress/harmony/pack200/BHSDCodec.d.ts'
import type { AttributeLayout } from '../../../../../../org/apache/commons/compress/harmony/unpack200/AttributeLayout.d.ts'
import type { BandSet } from '../../../../../../org/apache/commons/compress/harmony/unpack200/BandSet.d.ts'
import type { NewAttributeBands$AttributeLayoutElement } from '../../../../../../org/apache/commons/compress/harmony/unpack200/NewAttributeBands$AttributeLayoutElement.d.ts'
import type { NewAttributeBands$Callable } from '../../../../../../org/apache/commons/compress/harmony/unpack200/NewAttributeBands$Callable.d.ts'
import type { NewAttributeBands$LayoutElement } from '../../../../../../org/apache/commons/compress/harmony/unpack200/NewAttributeBands$LayoutElement.d.ts'
import type { NewAttributeBands$UnionCase } from '../../../../../../org/apache/commons/compress/harmony/unpack200/NewAttributeBands$UnionCase.d.ts'
import type { Segment } from '../../../../../../org/apache/commons/compress/harmony/unpack200/Segment.d.ts'
import type { Attribute } from '../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/Attribute.d.ts'
export class NewAttributeBands extends BandSet {
    constructor(arg0: Segment, arg1: AttributeLayout)
    // private attributeLayout: AttributeLayout;
    // private attributeLayoutElements: NewAttributeBands$AttributeLayoutElement[];
    readonly backwardsCallCount: number;
    getBackwardsCallCount(): number;
    getCodec(arg0: string): BHSDCodec;
    // private getOneAttribute(arg0: number, arg1: NewAttributeBands$AttributeLayoutElement[]): Attribute;
    // private getStreamUpToMatchingBracket(arg0: StringReader): StringReader;
    parseAttributes(arg0: InputStream, arg1: number): Attribute[];
    // private parseLayout(): void;
    read(arg0: InputStream): void;
    // private readBody(arg0: StringReader): NewAttributeBands$LayoutElement[];
    // private readNextAttributeElement(arg0: StringReader): NewAttributeBands$AttributeLayoutElement;
    // private readNextLayoutElement(arg0: StringReader): NewAttributeBands$LayoutElement;
    // private readNextUnionCase(arg0: StringReader): NewAttributeBands$UnionCase;
    // private readNumber(arg0: StringReader): number;
    // private readUpToMatchingBracket(arg0: StringReader): string;
    // private resolveCalls(): void;
    // private resolveCallsForElement(arg0: number, arg1: NewAttributeBands$Callable, arg2: NewAttributeBands$LayoutElement): number;
    setBackwardsCalls(arg0: number[]): void;
    unpack(): void;
}