import type { ChunkSection } from '../../../../../../com/viaversion/viaversion/api/minecraft/chunks/ChunkSection.d.ts'
import type { ChunkSectionLight } from '../../../../../../com/viaversion/viaversion/api/minecraft/chunks/ChunkSectionLight.d.ts'
import type { DataPalette } from '../../../../../../com/viaversion/viaversion/api/minecraft/chunks/DataPalette.d.ts'
import type { PaletteType } from '../../../../../../com/viaversion/viaversion/api/minecraft/chunks/PaletteType.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../java/lang/Cloneable.d.ts'
export interface BedrockChunkSection extends ChunkSection, Object, Cloneable{
    addPendingBlockUpdate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
    applyPendingBlockUpdates(arg0: number): void;
    protected clone(): Object;
    getFluidCount(): number;
    getLight(): ChunkSectionLight;
    getNonAirBlocksCount(): number;
    hasLight(): boolean;
    hasPendingBlockUpdates(): boolean;
    mergeWith(arg0: BedrockChunkSection): void;
    palette(arg0: PaletteType): DataPalette;
    palettes(arg0: PaletteType): DataPalette[];
    palettesCount(arg0: PaletteType): number;
    setFluidCount(arg0: number): void;
    setLight(arg0: ChunkSectionLight): void;
    setNonAirBlocksCount(arg0: number): void;
}