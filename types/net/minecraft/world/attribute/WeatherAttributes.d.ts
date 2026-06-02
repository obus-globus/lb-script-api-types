import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EnvironmentAttributeMap } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeMap.d.ts'
import type { EnvironmentAttributeSystem$Builder } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeSystem$Builder.d.ts'
import type { WeatherAttributes$WeatherAccess } from '../../../../net/minecraft/world/attribute/WeatherAttributes$WeatherAccess.d.ts'
export class WeatherAttributes extends Object {
    static RAIN: EnvironmentAttributeMap;
    static THUNDER: EnvironmentAttributeMap;
    static addBuiltinLayers(paramsystem: EnvironmentAttributeSystem$Builder, paramweatherAccess: WeatherAttributes$WeatherAccess): void;
    constructor()
}