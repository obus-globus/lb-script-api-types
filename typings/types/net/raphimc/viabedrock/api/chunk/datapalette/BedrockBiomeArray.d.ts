import type { DataPalette } from '../../../../../../com/viaversion/viaversion/api/minecraft/chunks/DataPalette.d.ts'
import type { IntUnaryOperator } from '../../../../../../java/util/function/IntUnaryOperator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../java/lang/Cloneable.d.ts'
export class BedrockBiomeArray extends Object implements DataPalette, Cloneable {
    constructor()
    constructor(arg0: number[])
    // private biomes: number[];
    addId(arg0: number): void;
    clear(): void;
    protected clone(): Object;
    clone(): BedrockBiomeArray;
    idAt(arg0: number, arg1: number, arg2: number): number;
    idAt(arg0: number): number;
    idByIndex(arg0: number): number;
    index(arg0: number, arg1: number, arg2: number): number;
    paletteIndexAt(arg0: number): number;
    replaceId(arg0: number, arg1: number): void;
    replaceIds(arg0: (param0: number) => number): void;
    setIdAt(arg0: number, arg1: number, arg2: number, arg3: number): void;
    setIdAt(arg0: number, arg1: number): void;
    setIdByIndex(arg0: number, arg1: number): void;
    setPaletteIndexAt(arg0: number, arg1: number): void;
    size(): number;
}