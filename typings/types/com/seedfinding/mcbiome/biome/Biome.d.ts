import type { Biome$Category } from '../../../../com/seedfinding/mcbiome/biome/Biome$Category.d.ts'
import type { Biome$Data } from '../../../../com/seedfinding/mcbiome/biome/Biome$Data.d.ts'
import type { Biome$Precipitation } from '../../../../com/seedfinding/mcbiome/biome/Biome$Precipitation.d.ts'
import type { Biome$Temperature } from '../../../../com/seedfinding/mcbiome/biome/Biome$Temperature.d.ts'
import type { SurfaceConfig } from '../../../../com/seedfinding/mcbiome/biome/surface/SurfaceConfig.d.ts'
import type { SurfaceBuilder } from '../../../../com/seedfinding/mcbiome/biome/surface/builder/SurfaceBuilder.d.ts'
import type { Dimension } from '../../../../com/seedfinding/mccore/state/Dimension.d.ts'
import type { BPos } from '../../../../com/seedfinding/mccore/util/pos/BPos.d.ts'
import type { MCVersion } from '../../../../com/seedfinding/mccore/version/MCVersion.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Biome extends Object {
    static applyAll(paramarg0: (param0: number) => boolean, ...paramarg1: number[]): boolean;
    static areSimilar(paramarg0: number, paramarg1: Biome, paramarg2: MCVersion): boolean;
    static equalsOrDefault(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static isOcean(paramarg0: number): boolean;
    static isRiver(paramarg0: number): boolean;
    static isShallowOcean(paramarg0: number, paramarg1: MCVersion): boolean;
    constructor(arg0: MCVersion, arg1: Dimension, arg2: number, arg3: string, arg4: Biome$Category, arg5: Biome$Precipitation, arg6: number, arg7: number, arg8: number, arg9: Biome, arg10: SurfaceBuilder)
    readonly category: Biome$Category;
    readonly child: Biome;
    readonly depth: number;
    readonly dimension: Dimension;
    readonly id: number;
    readonly name: string;
    readonly parent: Biome;
    readonly precipitation: Biome$Precipitation;
    readonly scale: number;
    readonly surfaceBuilder: SurfaceBuilder;
    readonly temperature: number;
    readonly version: MCVersion;
    at(arg0: number, arg1: number): Biome$Data;
    equals(arg0: Object | null): boolean;
    getCategory(): Biome$Category;
    getChild(): Biome;
    getDepth(): number;
    getDimension(): Dimension;
    getId(): number;
    getName(): string;
    getParent(): Biome;
    getPrecipitation(): Biome$Precipitation;
    getScale(): number;
    getSurfaceBuilder(): SurfaceBuilder;
    getSurfaceConfig(): SurfaceConfig;
    getTemperature(): number;
    // private getTemperature(arg0: number, arg1: number, arg2: number): number;
    getTemperatureAt(arg0: BPos): number;
    getTemperatureAt(arg0: number, arg1: number, arg2: number): number;
    getTemperatureGroup(): Biome$Temperature;
    getVersion(): MCVersion;
    hasChild(): boolean;
    hasParent(): boolean;
    hashCode(): number;
    toString(): string;
}