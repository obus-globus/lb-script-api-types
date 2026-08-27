import type { ByteArrayTag } from '../../../../../com/viaversion/nbt/tag/ByteArrayTag.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IdRanges extends Object {
    static decode(paramarg0: ByteArrayTag): (Object | null)[];
    static forEachId(paramarg0: ByteArrayTag, paramarg1: (param0: number) => void): void;
    constructor()
}