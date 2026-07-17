import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { JsonElement } from '../../../../com/google/gson/JsonElement.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CachedOutput } from '../../../../net/minecraft/data/CachedOutput.d.ts'
import type { DataProvider } from '../../../../net/minecraft/data/DataProvider.d.ts'
import type { PackOutput } from '../../../../net/minecraft/data/PackOutput.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { MetadataSectionType } from '../../../../net/minecraft/server/packs/metadata/MetadataSectionType.d.ts'
import type { FeatureFlagSet } from '../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class PackMetadataGenerator extends Object implements DataProvider {
    static FIXED_ORDER_FIELDS: (param0: string) => number;
    static KEY_COMPARATOR: (param0: string, param1: string) => number;
    static LOGGER: Logger;
    static forFeaturePack(paramoutput: PackOutput, paramdescription: Component): PackMetadataGenerator;
    static forFeaturePack(paramoutput: PackOutput, paramdescription: Component, paramflags: FeatureFlagSet): PackMetadataGenerator;
    constructor(output: PackOutput)
    // private elements: JavaMap<string, () => JsonElement>;
    // private output: PackOutput;
    add<T extends unknown>(type: MetadataSectionType<T>, value: T): PackMetadataGenerator;
    getName(): string;
    run(cache: CachedOutput): CompletableFuture<Object>;
}