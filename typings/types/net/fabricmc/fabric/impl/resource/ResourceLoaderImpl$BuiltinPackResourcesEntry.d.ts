import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModNioPackResources } from '../../../../../net/fabricmc/fabric/impl/resource/pack/ModNioPackResources.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class ResourceLoaderImpl$BuiltinPackResourcesEntry extends Record {
    private constructor(displayName: Component, packResources: ModNioPackResources)
    // private displayName: Component;
    // private packResources: ModNioPackResources;
    displayName(): Component;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    packResources(): ModNioPackResources;
    toString(): string;
}