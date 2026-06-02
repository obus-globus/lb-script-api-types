import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { AttributeDefinitionBands$AttributeDefinition } from '../../../../../../org/apache/commons/compress/harmony/pack200/AttributeDefinitionBands$AttributeDefinition.d.ts'
import type { BandSet } from '../../../../../../org/apache/commons/compress/harmony/pack200/BandSet.d.ts'
import type { CpBands } from '../../../../../../org/apache/commons/compress/harmony/pack200/CpBands.d.ts'
import type { Segment } from '../../../../../../org/apache/commons/compress/harmony/pack200/Segment.d.ts'
import type { Attribute } from '../../../../../../org/objectweb/asm/Attribute.d.ts'
export class AttributeDefinitionBands extends BandSet {
    static CONTEXT_CLASS: number;
    static CONTEXT_CODE: number;
    static CONTEXT_FIELD: number;
    static CONTEXT_METHOD: number;
    constructor(arg0: Segment, arg1: number, arg2: Attribute[])
    // private attributeDefinitions: AttributeDefinitionBands$AttributeDefinition[];
    readonly classAttributeLayouts: AttributeDefinitionBands$AttributeDefinition[];
    readonly codeAttributeLayouts: AttributeDefinitionBands$AttributeDefinition[];
    // private cpBands: CpBands;
    readonly fieldAttributeLayouts: AttributeDefinitionBands$AttributeDefinition[];
    readonly methodAttributeLayouts: AttributeDefinitionBands$AttributeDefinition[];
    // private segment: Segment;
    // private addAttributeDefinitions(arg0: { [key: string]: string }, arg1: number[], arg2: number): void;
    // private addHighIndices(arg0: number[]): number[];
    // private addSyntheticDefinitions(): void;
    finaliseBands(): void;
    getClassAttributeLayouts(): AttributeDefinitionBands$AttributeDefinition[];
    getCodeAttributeLayouts(): AttributeDefinitionBands$AttributeDefinition[];
    getFieldAttributeLayouts(): AttributeDefinitionBands$AttributeDefinition[];
    getMethodAttributeLayouts(): AttributeDefinitionBands$AttributeDefinition[];
    pack(arg0: OutputStream): void;
}