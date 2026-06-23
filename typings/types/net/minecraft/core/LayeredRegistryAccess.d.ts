import type { Object } from '../../../java/lang/Object.d.ts'
import type { RegistryAccess$Frozen } from '../../../net/minecraft/core/RegistryAccess$Frozen.d.ts'
export class LayeredRegistryAccess<T extends unknown> extends Object {
    constructor(keys: T[])
    private constructor(keys: T[], values: RegistryAccess$Frozen[])
    // private composite: RegistryAccess$Frozen;
    // private keys: T[];
    // private values: RegistryAccess$Frozen[];
    compositeAccess(): RegistryAccess$Frozen;
    getAccessForLoading(forLayer: T): RegistryAccess$Frozen;
    getAccessFrom(forLayer: T): RegistryAccess$Frozen;
    // private getCompositeAccessForLayers(from: number, to: number): RegistryAccess$Frozen;
    getLayer(layer: T): RegistryAccess$Frozen;
    // private getLayerIndexOrThrow(layer: T): number;
    replaceFrom(fromLayer: T, layers: RegistryAccess$Frozen[]): LayeredRegistryAccess<T>;
}