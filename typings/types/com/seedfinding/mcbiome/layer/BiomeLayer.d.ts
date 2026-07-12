import type { MCVersion } from '../../../../com/seedfinding/mccore/version/MCVersion.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class BiomeLayer extends Object {
    static getLayerSeed(paramarg0: number, paramarg1: number): number;
    static getLocalSeed(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static getLocalSeed(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static getMidSalt(paramarg0: number): number;
    constructor(arg0: MCVersion)
    constructor(arg0: MCVersion, ...arg1: BiomeLayer[])
    constructor(arg0: MCVersion, arg1: number, arg2: number)
    constructor(arg0: MCVersion, arg1: number, arg2: number, ...arg3: BiomeLayer[])
    hintSize: number;
    layerId: number;
    layerSeed: number;
    localSeed: number;
    readonly parents: BiomeLayer[];
    salt: number;
    scale: number;
    readonly version: MCVersion;
    choose(arg0: number, arg1: number): number;
    choose(arg0: number, arg1: number, arg2: number, arg3: number): number;
    getBiome(arg0: number, arg1: number, arg2: number): number;
    getHintSize(): number;
    getLayerId(): number;
    getParent(): BiomeLayer;
    getParent<T extends BiomeLayer>(arg0: Class<T>): T;
    getParent(arg0: number): BiomeLayer;
    getParent<T extends BiomeLayer>(arg0: number, arg1: Class<T>): T;
    getParents(): BiomeLayer[];
    getScale(): number;
    getVersion(): MCVersion;
    hasParent(): boolean;
    isMergingLayer(): boolean;
    nextInt(arg0: number): number;
    setHintSize(arg0: number): void;
    setHintSize(arg0: number, arg1: boolean): void;
    setLayerId(arg0: number): void;
    setRecursiveHintSize(arg0: BiomeLayer, arg1: number): void;
    setScale(arg0: number): void;
    setSeed(arg0: number, arg1: number): void;
}