import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class MapColor$Brightness extends Enum<MapColor$Brightness> {
    static HIGH: MapColor$Brightness;
    static LOW: MapColor$Brightness;
    static LOWEST: MapColor$Brightness;
    static NORMAL: MapColor$Brightness;
    static byId(paramid: number): MapColor$Brightness;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): MapColor$Brightness;
    static values(): MapColor$Brightness[];
    private constructor(id: number, modifier: number)
    id: number;
    modifier: number;
    name(): "LOW" | "NORMAL" | "HIGH" | "LOWEST";
}