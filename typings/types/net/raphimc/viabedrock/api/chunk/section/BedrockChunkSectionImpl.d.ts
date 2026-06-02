import type { ChunkSectionLight } from '../../../../../../com/viaversion/viaversion/api/minecraft/chunks/ChunkSectionLight.d.ts'
import type { DataPalette } from '../../../../../../com/viaversion/viaversion/api/minecraft/chunks/DataPalette.d.ts'
import type { PaletteType } from '../../../../../../com/viaversion/viaversion/api/minecraft/chunks/PaletteType.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BedrockChunkSection } from '../../../../../../net/raphimc/viabedrock/api/chunk/section/BedrockChunkSection.d.ts'
export class BedrockChunkSectionImpl extends Object implements BedrockChunkSection {
    static BIOME_SIZE: number;
    static SIZE: number;
    constructor()
    constructor(arg0: boolean)
    // private biomePalette: DataPalette;
    // private blockPalettes: DataPalette[];
    // private pendingBlockUpdates: number[][];
    addPalette(arg0: PaletteType, arg1: DataPalette): void;
    addPendingBlockUpdate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
    applyPendingBlockUpdates(arg0: number): void;
    getFluidCount(): number;
    getLight(): ChunkSectionLight;
    getNonAirBlocksCount(): number;
    hasPendingBlockUpdates(): boolean;
    mergeWith(arg0: BedrockChunkSection): void;
    palette(arg0: PaletteType): DataPalette;
    palettes(arg0: PaletteType): DataPalette[];
    palettesCount(arg0: PaletteType): number;
    removePalette(arg0: PaletteType): void;
    setFluidCount(arg0: number): void;
    setLight(arg0: ChunkSectionLight): void;
    setNonAirBlocksCount(arg0: number): void;
}