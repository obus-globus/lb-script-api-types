import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ComponentRewriter1_20_5$DataConverter } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/rewriter/ComponentRewriter1_20_5$DataConverter.d.ts'
import type { ComponentRewriter1_20_5$TagConverter } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/rewriter/ComponentRewriter1_20_5$TagConverter.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ComponentRewriter1_20_5$ConverterPair<T extends unknown> extends Record {
    constructor(dataConverter: (param0: UserConnection, param1: T) => Tag, tagConverter: (param0: UserConnection, param1: Tag) => T)
    // private dataConverter: (param0: UserConnection, param1: T) => Tag;
    // private tagConverter: (param0: UserConnection, param1: Tag) => T;
    dataConverter(): (param0: UserConnection, param1: T) => Tag;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    tagConverter(): (param0: UserConnection, param1: Tag) => T;
    toString(): string;
}