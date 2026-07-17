import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { ChunkSection } from '../../../../../../com/viaversion/viaversion/api/minecraft/chunks/ChunkSection.d.ts'
import type { ChunkSectionLight } from '../../../../../../com/viaversion/viaversion/api/minecraft/chunks/ChunkSectionLight.d.ts'
import type { DataPalette } from '../../../../../../com/viaversion/viaversion/api/minecraft/chunks/DataPalette.d.ts'
import type { PaletteType } from '../../../../../../com/viaversion/viaversion/api/minecraft/chunks/PaletteType.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ChunkSectionImpl extends Object implements ChunkSection {
    static BIOME_SIZE: number;
    static SIZE: number;
    constructor()
    constructor(arg0: boolean)
    constructor(arg0: boolean, arg1: number)
    readonly fluidCount: number;
    readonly light: ChunkSectionLight;
    readonly nonAirBlocksCount: number;
    // private palettes: JavaMap<PaletteType, DataPalette>;
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