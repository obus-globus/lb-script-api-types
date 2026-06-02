import type { Tag } from '../../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { SNbtDeserializer } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/snbt/impl/SNbtDeserializer.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../../../java/util/Map$Entry.d.ts'
export class SNbtDeserializer_v1_8 extends Object implements SNbtDeserializer<Map$Entry<string, Tag>[]> {
    constructor()
    // private checkBrackets(arg0: string, arg1: string, arg2: string[]): void;
    deserialize(arg0: string): Map$Entry<string, Tag>[];
    deserializeValue(arg0: string): Tag;
    // private find(arg0: string, arg1: boolean, arg2: boolean): string;
    // private findPair(arg0: string, arg1: boolean): string;
    // private getCharIndex(arg0: string, arg1: string): number;
    // private getTagCount(arg0: string): number;
    // private isEscaped(arg0: string, arg1: number): boolean;
    // private parsePrimitive(arg0: string): Tag;
    // private parseTag(arg0: string): Tag;
    // private quotesToString(arg0: string[]): string;
    // private trimSplit(arg0: string): string[];
}