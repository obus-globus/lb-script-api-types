import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricDataGenerator } from '../../../../../../net/fabricmc/fabric/api/datagen/v1/FabricDataGenerator.d.ts'
import type { JsonKeySortOrderCallback } from '../../../../../../net/fabricmc/fabric/api/datagen/v1/JsonKeySortOrderCallback.d.ts'
import type { RegistrySetBuilder } from '../../../../../../net/minecraft/core/RegistrySetBuilder.d.ts'
export interface DataGeneratorEntrypoint extends Object{
    addJsonKeySortOrders(arg0: (param0: string, param1: number) => void): void;
    buildRegistry(arg0: RegistrySetBuilder): void;
    getEffectiveModId(): string;
    onInitializeDataGenerator(arg0: FabricDataGenerator): void;
}