import type { InputConstants$Key } from '../../../../../com/mojang/blaze3d/platform/InputConstants$Key.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClosedFloatingPointRange } from '../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { ClientModule } from '../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { Color4b } from '../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { HumanInputDeserializer$StringDeserializer } from '../../../../../net/ccbluex/liquidbounce/utils/input/HumanInputDeserializer$StringDeserializer.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
export class HumanInputDeserializer extends Object {
    static INSTANCE: HumanInputDeserializer;
    readonly booleanDeserializer: HumanInputDeserializer$StringDeserializer<Object>;
    readonly clientModuleDeserializer: HumanInputDeserializer$StringDeserializer<ClientModule>;
    readonly colorDeserializer: HumanInputDeserializer$StringDeserializer<Color4b>;
    readonly fileDeserializer: HumanInputDeserializer$StringDeserializer<File>;
    readonly floatDeserializer: HumanInputDeserializer$StringDeserializer<number>;
    readonly floatRangeDeserializer: HumanInputDeserializer$StringDeserializer<ClosedFloatingPointRange<number>>;
    readonly intDeserializer: HumanInputDeserializer$StringDeserializer<number>;
    readonly intRangeDeserializer: HumanInputDeserializer$StringDeserializer<{ start: number; endInclusive: number; step: number }>;
    readonly keyDeserializer: HumanInputDeserializer$StringDeserializer<InputConstants$Key>;
    readonly textArrayDeserializer: HumanInputDeserializer$StringDeserializer<string[]>;
    readonly textDeserializer: HumanInputDeserializer$StringDeserializer<string>;
    parseArray<T extends Object | number | string | boolean>(str: string, componentDeserializer: HumanInputDeserializer$StringDeserializer<T>): T[];
    // private parseRange<R extends Object | number | string | boolean, N extends Object | number | string | boolean>(str: string, numberParser: HumanInputDeserializer$StringDeserializer<N>, rangeSupplier: (param0: N, param1: N) => R): R;
    registryItemDeserializer<T extends Object | number | string | boolean>(registry: T[]): HumanInputDeserializer$StringDeserializer<T>;
    registryItemDeserializer<T extends Object | number | string | boolean>(key: ResourceKey<T[]>): HumanInputDeserializer$StringDeserializer<T>;
}