import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
export interface ChannelId extends Serializable, Object, Comparable<ChannelId>{
    asLongText(): string;
    asShortText(): string;
}