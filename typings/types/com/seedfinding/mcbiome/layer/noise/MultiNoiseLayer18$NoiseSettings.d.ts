import type { Pair } from '../../../../../com/seedfinding/mccore/util/data/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MultiNoiseLayer18$NoiseSettings extends Object {
    constructor()
    altitudeNoise: Pair<number, number[]>;
    erosionNoise: Pair<number, number[]>;
    humidityNoise: Pair<number, number[]>;
    offsetNoise: Pair<number, number[]>;
    temperatureNoise: Pair<number, number[]>;
    weirdnessNoise: Pair<number, number[]>;
    setAltitude(arg0: number, arg1: number[]): MultiNoiseLayer18$NoiseSettings;
    setErosion(arg0: number, arg1: number[]): MultiNoiseLayer18$NoiseSettings;
    setHumidity(arg0: number, arg1: number[]): MultiNoiseLayer18$NoiseSettings;
    setOffset(arg0: number, arg1: number[]): MultiNoiseLayer18$NoiseSettings;
    setTemperature(arg0: number, arg1: number[]): MultiNoiseLayer18$NoiseSettings;
    setWeirdness(arg0: number, arg1: number[]): MultiNoiseLayer18$NoiseSettings;
}