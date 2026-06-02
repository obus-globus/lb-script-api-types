import type { Tag } from '../../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { SNbtDeserializer } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/snbt/impl/SNbtDeserializer.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class SNbtDeserializer_v1_7 extends Object implements SNbtDeserializer<Tag> {
    constructor()
    // private checkBrackets(arg0: string, arg1: string, arg2: string[]): void;
    deserialize(arg0: string): Tag;
    deserializeValue(arg0: string): Tag;
    // private find(arg0: string, arg1: boolean, arg2: boolean): string;
    // private findPair(arg0: string, arg1: boolean): string;
    // private getCharIndex(arg0: string, arg1: string): number;
    // private getTagCount(arg0: string): number;
    // private parse(arg0: string, arg1: string): Tag;
    // private parsePrimitive(arg0: string): Tag;
    // private quotesToString(arg0: string[]): string;
}