import type { Tag } from '../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { TextComponent } from '../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class ChatUtil extends Object {
    static fixStyle(paramarg0: Tag): Tag;
    static fromLegacy(paramarg0: string, paramarg1: string, paramarg2: number): string;
    static fromLegacy(paramarg0: string, paramarg1: string, paramarg2: number, paramarg3: boolean): string;
    static fromLegacyPrefix(paramarg0: string, paramarg1: string, paramarg2: number): string;
    static legacyToJsonString(paramarg0: string, paramarg1: string, paramarg2: boolean): string;
    static legacyToJsonString(paramarg0: string, paramarg1: (param0: TextComponent) => void, paramarg2: boolean): string;
    static removeUnusedColor(paramarg0: string, paramarg1: string): string;
    static removeUnusedColor(paramarg0: string, paramarg1: string, paramarg2: boolean): string;
    static split(paramarg0: Tag, paramarg1: string): Tag[];
    static translate(paramarg0: string): Map$Entry<string, Tag>[];
    static translate(paramarg0: string, ...paramarg1: Tag[]): Tag;
    static translate(paramarg0: string, ...paramarg1: Object[]): Tag;
    constructor()
}