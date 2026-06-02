import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { DataPalette } from '../../../../../../com/viaversion/viaversion/api/minecraft/chunks/DataPalette.d.ts'
import type { Object2IntFunction } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/Object2IntFunction.d.ts'
import type { IntUnaryOperator } from '../../../../../../java/util/function/IntUnaryOperator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../java/lang/Cloneable.d.ts'
import type { BitArray } from '../../../../../../net/raphimc/viabedrock/api/chunk/bitarray/BitArray.d.ts'
import type { BitArrayVersion } from '../../../../../../net/raphimc/viabedrock/api/chunk/bitarray/BitArrayVersion.d.ts'
export class BedrockDataPalette extends Object implements DataPalette, Cloneable {
    constructor()
    constructor(arg0: (Object | null)[], arg1: BitArray)
    constructor(arg0: Tag[], arg1: BitArray)
    constructor(arg0: BitArrayVersion)
    readonly bitArray: BitArray;
    // private palette: (Object | null)[];
    readonly persistentPalette: Tag[];
}