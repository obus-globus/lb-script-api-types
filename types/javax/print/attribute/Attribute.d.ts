import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Attribute extends Serializable, Object{
    getCategory(): Class<Attribute>;
    getName(): string;
}