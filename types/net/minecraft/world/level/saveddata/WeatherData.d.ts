import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { SavedData } from '../../../../../net/minecraft/world/level/saveddata/SavedData.d.ts'
import type { SavedDataType } from '../../../../../net/minecraft/world/level/saveddata/SavedDataType.d.ts'
export class WeatherData extends SavedData {
    static CODEC: Codec<WeatherData>;
    static TYPE: SavedDataType<WeatherData>;
    constructor()
    constructor(clearWeatherTime: number, rainTime: number, thunderTime: number, raining: boolean, thundering: boolean)
    readonly clearWeatherTime: number;
    readonly rainTime: number;
    readonly raining: boolean;
    readonly thunderTime: number;
    readonly thundering: boolean;
    getClearWeatherTime(): number;
    getRainTime(): number;
    getThunderTime(): number;
    isRaining(): boolean;
    isThundering(): boolean;
    setClearWeatherTime(clearWeatherTime: number): void;
    setRainTime(rainTime: number): void;
    setRaining(raining: boolean): void;
    setThunderTime(thunderTime: number): void;
    setThundering(thundering: boolean): void;
}