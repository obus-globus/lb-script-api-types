import type { IntUnaryOperator } from '../../../../../../java/util/function/IntUnaryOperator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface DataPalette extends Object {
    addId(arg0: number): void;
    clear(): void;
    idAt(arg0: number): number;
    idAt(arg0: number, arg1: number, arg2: number): number;
    idByIndex(arg0: number): number;
    index(arg0: number, arg1: number, arg2: number): number;
    paletteIndexAt(arg0: number): number;
    replaceId(arg0: number, arg1: number): void;
    replaceIds(arg0: (param0: number) => kotlin.Int): void;
    setIdAt(arg0: number, arg1: number): void;
    setIdAt(arg0: number, arg1: number, arg2: number, arg3: number): void;
    setIdByIndex(arg0: number, arg1: number): void;
    setPaletteIndexAt(arg0: number, arg1: number): void;
    size(): number;
}