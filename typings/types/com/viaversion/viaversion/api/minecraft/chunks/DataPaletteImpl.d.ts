import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { DataPalette } from '../../../../../../com/viaversion/viaversion/api/minecraft/chunks/DataPalette.d.ts'
import type { DataPaletteImpl$ChunkData } from '../../../../../../com/viaversion/viaversion/api/minecraft/chunks/DataPaletteImpl$ChunkData.d.ts'
import type { IntConsumer } from '../../../../../../java/util/function/IntConsumer.d.ts'
import type { IntPredicate } from '../../../../../../java/util/function/IntPredicate.d.ts'
import type { IntUnaryOperator } from '../../../../../../java/util/function/IntUnaryOperator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DataPaletteImpl extends Object implements DataPalette {
    constructor(arg0: number)
    constructor(arg0: number, arg1: number)
    // private inversePalette: JavaMap<any, any>;
    // private palette: (Object | null)[];
    // private sizeBits: number;
    // private values: DataPaletteImpl$ChunkData;
    addId(arg0: number): void;
    clear(): void;
    createPackedValues(arg0: number, arg1: number, arg2: boolean): number[];
    // private emptyInversePalette(): JavaMap<any, any>;
    forEachMatchingCoordinate(arg0: (param0: number) => boolean, arg1: (param0: number) => void): void;
    idAt(arg0: number, arg1: number, arg2: number): number;
    idAt(arg0: number): number;
    idByIndex(arg0: number): number;
    index(arg0: number, arg1: number, arg2: number): number;
    // private inversePalette(): JavaMap<any, any>;
    paletteIndexAt(arg0: number): number;
    replaceId(arg0: number, arg1: number): void;
    replaceIds(arg0: (param0: number) => number): void;
    setIdAt(arg0: number, arg1: number, arg2: number, arg3: number): void;
    setIdAt(arg0: number, arg1: number): void;
    setIdByIndex(arg0: number, arg1: number): void;
    setPaletteIndexAt(arg0: number, arg1: number): void;
    setPaletteIndexes(arg0: number[], arg1: number, arg2: number): void;
    size(): number;
}