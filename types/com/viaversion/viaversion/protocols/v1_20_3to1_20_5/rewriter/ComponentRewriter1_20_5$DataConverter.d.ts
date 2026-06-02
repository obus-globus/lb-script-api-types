import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ComponentRewriter1_20_5$DataConverter<T extends Object | number | string | boolean> extends Object{
    convert(arg0: UserConnection, arg1: T): Tag;
}