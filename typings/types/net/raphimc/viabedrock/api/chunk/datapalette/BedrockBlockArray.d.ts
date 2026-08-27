import type { NibbleArray } from '../../../../../../com/viaversion/viaversion/api/minecraft/chunks/NibbleArray.d.ts'
import type { IntConsumer } from '../../../../../../java/util/function/IntConsumer.d.ts'
import type { IntPredicate } from '../../../../../../java/util/function/IntPredicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../java/lang/Cloneable.d.ts'
import type { DefaultedDataPalette } from '../../../../../../net/raphimc/viabedrock/api/chunk/datapalette/DefaultedDataPalette.d.ts'
export class BedrockBlockArray extends Object implements Cloneable, DefaultedDataPalette {
    constructor()
    constructor(arg0: number[], arg1: NibbleArray)
    readonly blocks: number[];
    readonly data: NibbleArray;
    addId(arg0: number): void;
    clear(): void;
    clone(): BedrockBlockArray;
    forEachMatchingCoordinate(arg0: (param0: number) => boolean, arg1: (param0: number) => void): void;
    getBlocks(): number[];
    getData(): NibbleArray;
    idAt(arg0: number): number;
    idAt(arg0: number, arg1: number, arg2: number): number;
    idByIndex(arg0: number): number;
    index(arg0: number, arg1: number, arg2: number): number;
    paletteIndexAt(arg0: number): number;
    setIdAt(arg0: number, arg1: number): void;
    setIdAt(arg0: number, arg1: number, arg2: number, arg3: number): void;
    setIdByIndex(arg0: number, arg1: number): void;
    setPaletteIndexAt(arg0: number, arg1: number): void;
    size(): number;
}