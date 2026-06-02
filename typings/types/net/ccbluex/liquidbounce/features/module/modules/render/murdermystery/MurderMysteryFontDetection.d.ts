import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MapItemSavedData } from '../../../../../../../../net/minecraft/world/level/saveddata/maps/MapItemSavedData.d.ts'
export class MurderMysteryFontDetection extends Object {
    static INSTANCE: MurderMysteryFontDetection;
    // private FILE_NAME: string;
    // private LETTER_MAP: { [key: string]: (Object | null)[] };
    // private extractBitmapFromMap(mapData: MapItemSavedData): number[];
    // private filterContractLine(rgb: number[]): number[];
    readContractLine(mapData: MapItemSavedData): string;
}