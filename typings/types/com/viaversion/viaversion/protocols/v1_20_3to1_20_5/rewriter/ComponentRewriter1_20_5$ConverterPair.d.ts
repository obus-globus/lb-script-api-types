import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ComponentRewriter1_20_5$DataConverter } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/rewriter/ComponentRewriter1_20_5$DataConverter.d.ts'
import type { ComponentRewriter1_20_5$TagConverter } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/rewriter/ComponentRewriter1_20_5$TagConverter.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ComponentRewriter1_20_5$ConverterPair<T extends Object | number | string | boolean> extends Record {
    constructor(dataConverter: (param0: T, param1: UserConnection) => com.viaversion.nbt.tag.Tag, tagConverter: (param0: T, param1: UserConnection) => unknown)
    // private dataConverter: (param0: T, param1: UserConnection) => com.viaversion.nbt.tag.Tag;
    // private tagConverter: (param0: T, param1: UserConnection) => unknown;
    dataConverter(): (param0: T, param1: UserConnection) => com.viaversion.nbt.tag.Tag;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    tagConverter(): (param0: T, param1: UserConnection) => unknown;
    toString(): string;
}