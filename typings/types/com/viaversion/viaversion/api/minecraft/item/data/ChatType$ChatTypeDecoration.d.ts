import type { Tag } from '../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Copyable } from '../../../../../../../com/viaversion/viaversion/util/Copyable.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ChatType$ChatTypeDecoration extends Record implements Copyable {
    static TYPE: Type<ChatType$ChatTypeDecoration>;
    constructor(translationKey: string, parameters: number[], style: Tag)
    // private parameters: number[];
    // private style: Tag;
    // private translationKey: string;
    copy(): ChatType$ChatTypeDecoration;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    parameters(): number[];
    style(): Tag;
    toString(): string;
    translationKey(): string;
}