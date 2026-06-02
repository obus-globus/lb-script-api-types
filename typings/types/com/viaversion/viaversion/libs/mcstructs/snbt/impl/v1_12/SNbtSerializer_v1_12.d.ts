import type { Tag } from '../../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { SNbtSerializer } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/snbt/impl/SNbtSerializer.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class SNbtSerializer_v1_12 extends Object implements SNbtSerializer {
    constructor()
    checkEscape(arg0: string): string;
    escape(arg0: string): string;
    serialize(arg0: Tag): string;
}