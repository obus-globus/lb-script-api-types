import type { Pair } from '../../../../../com/seedfinding/mccore/util/data/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MultiNoiseLayer17$NoiseSettings extends Object {
    constructor()
    altitudeNoise: Pair<number, number[]>;
    humidityNoise: Pair<number, number[]>;
    temperatureNoise: Pair<number, number[]>;
    weirdnessNoise: Pair<number, number[]>;
    setAltitude(arg0: number, arg1: number[]): MultiNoiseLayer17$NoiseSettings;
    setHumidity(arg0: number, arg1: number[]): MultiNoiseLayer17$NoiseSettings;
    setTemperature(arg0: number, arg1: number[]): MultiNoiseLayer17$NoiseSettings;
    setWeirdness(arg0: number, arg1: number[]): MultiNoiseLayer17$NoiseSettings;
}