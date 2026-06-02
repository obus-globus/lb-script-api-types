import type { ChunkSectionLight } from '../../../../../../com/viaversion/viaversion/api/minecraft/chunks/ChunkSectionLight.d.ts'
import type { DataPalette } from '../../../../../../com/viaversion/viaversion/api/minecraft/chunks/DataPalette.d.ts'
import type { PaletteType } from '../../../../../../com/viaversion/viaversion/api/minecraft/chunks/PaletteType.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ChunkSection extends Object{
    addPalette(arg0: PaletteType, arg1: DataPalette): void;
    getFluidCount(): number;
    getLight(): ChunkSectionLight;
    getNonAirBlocksCount(): number;
    hasLight(): boolean;
    palette(arg0: PaletteType): DataPalette;
    removePalette(arg0: PaletteType): void;
    setFluidCount(arg0: number): void;
    setLight(arg0: ChunkSectionLight): void;
    setNonAirBlocksCount(arg0: number): void;
}