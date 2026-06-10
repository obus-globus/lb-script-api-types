import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricPack } from '../../../../../net/fabricmc/fabric/impl/resource/pack/FabricPack.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { PackLocationInfo } from '../../../../../net/minecraft/server/packs/PackLocationInfo.d.ts'
import type { PackResources } from '../../../../../net/minecraft/server/packs/PackResources.d.ts'
import type { PackSelectionConfig } from '../../../../../net/minecraft/server/packs/PackSelectionConfig.d.ts'
import type { PackType } from '../../../../../net/minecraft/server/packs/PackType.d.ts'
import type { PackFormat } from '../../../../../net/minecraft/server/packs/metadata/pack/PackFormat.d.ts'
import type { Pack$Metadata } from '../../../../../net/minecraft/server/packs/repository/Pack$Metadata.d.ts'
import type { Pack$Position } from '../../../../../net/minecraft/server/packs/repository/Pack$Position.d.ts'
import type { Pack$ResourcesSupplier } from '../../../../../net/minecraft/server/packs/repository/Pack$ResourcesSupplier.d.ts'
import type { PackCompatibility } from '../../../../../net/minecraft/server/packs/repository/PackCompatibility.d.ts'
import type { PackSource } from '../../../../../net/minecraft/server/packs/repository/PackSource.d.ts'
import type { FeatureFlagSet } from '../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
export class Pack extends Object implements FabricPack {
    static readMetaAndCreate(paramlocation: PackLocationInfo, paramresources: Pack$ResourcesSupplier, parampackType: PackType, paramselectionConfig: PackSelectionConfig): Pack;
    static readPackMetadata(paramlocation: PackLocationInfo, paramresources: Pack$ResourcesSupplier, paramcurrentPackVersion: PackFormat, paramtype: PackType): Pack$Metadata;
    constructor(location: PackLocationInfo, resources: Pack$ResourcesSupplier, metadata: Pack$Metadata, selectionConfig: PackSelectionConfig)
    // private location: PackLocationInfo;
    // private metadata: Pack$Metadata;
    // private parentsPredicate: (param0: Object) => boolean;
    // private resources: Pack$ResourcesSupplier;
    // private selectionConfig: PackSelectionConfig;
    equals(o: Object | null): boolean;
    fabric$isHidden(): boolean;
    fabric$parentsEnabled(arg0: string[]): boolean;
    fabric$parentsEnabled(arg0: (Object | null)[]): boolean;
    fabric$setParentsPredicate(arg0: (param0: string[]) => boolean): void;
    fabric$setParentsPredicate(arg0: (param0: Object) => boolean): void;
    getChatLink(enabled: boolean): Component;
    getCompatibility(): PackCompatibility;
    getDefaultPosition(): Pack$Position;
    getDescription(): Component;
    getId(): string;
    getPackSource(): PackSource;
    getRequestedFeatures(): FeatureFlagSet;
    getTitle(): Component;
    hashCode(): number;
    isFixedPosition(): boolean;
    isRequired(): boolean;
    location(): PackLocationInfo;
    open(): PackResources;
    selectionConfig(): PackSelectionConfig;
}