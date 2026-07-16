import type { ChatType$ChatTypeDecoration } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/ChatType$ChatTypeDecoration.d.ts'
import type { HolderType } from '../../../../../../../com/viaversion/viaversion/api/type/types/misc/HolderType.d.ts'
import type { Copyable } from '../../../../../../../com/viaversion/viaversion/util/Copyable.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ChatType extends Record implements Copyable {
    static TYPE: HolderType<ChatType>;
    static copy<T extends unknown>(paramarg0: T): T;
    constructor(chatDecoration: ChatType$ChatTypeDecoration, narrationDecoration: ChatType$ChatTypeDecoration)
    // private chatDecoration: ChatType$ChatTypeDecoration;
    // private narrationDecoration: ChatType$ChatTypeDecoration;
    chatDecoration(): ChatType$ChatTypeDecoration;
    copy(): ChatType;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    narrationDecoration(): ChatType$ChatTypeDecoration;
    toString(): string;
}