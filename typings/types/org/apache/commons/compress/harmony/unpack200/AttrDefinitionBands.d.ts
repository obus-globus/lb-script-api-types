import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { AttributeLayoutMap } from '../../../../../../org/apache/commons/compress/harmony/unpack200/AttributeLayoutMap.d.ts'
import type { BandSet } from '../../../../../../org/apache/commons/compress/harmony/unpack200/BandSet.d.ts'
import type { Segment } from '../../../../../../org/apache/commons/compress/harmony/unpack200/Segment.d.ts'
export class AttrDefinitionBands extends BandSet {
    constructor(arg0: Segment)
    // private attributeDefinitionHeader: number[];
    // private attributeDefinitionLayout: string[];
    readonly attributeDefinitionMap: AttributeLayoutMap;
    // private attributeDefinitionName: string[];
    // private cpUTF8: string[];
    getAttributeDefinitionMap(): AttributeLayoutMap;
    read(arg0: InputStream): void;
    // private setupDefaultAttributeNames(): void;
    unpack(): void;
    unpack(arg0: InputStream): void;
}