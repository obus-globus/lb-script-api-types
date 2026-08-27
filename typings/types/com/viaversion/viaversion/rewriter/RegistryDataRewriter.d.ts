import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { StringTag } from '../../../../com/viaversion/nbt/tag/StringTag.d.ts'
import type { Tag } from '../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { FullMappings } from '../../../../com/viaversion/viaversion/api/data/FullMappings.d.ts'
import type { RegistryEntry } from '../../../../com/viaversion/viaversion/api/minecraft/RegistryEntry.d.ts'
import type { Protocol } from '../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { PacketWrapper } from '../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { RegistryDataRewriter as RegistryDataRewriter_2 } from '../../../../com/viaversion/viaversion/api/rewriter/RegistryDataRewriter.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class RegistryDataRewriter extends Object implements RegistryDataRewriter_2 {
    constructor(arg0: Protocol<any, any, any, any>)
    // private enchantmentEffectHandlers: JavaMap<string, (param0: Map$Entry<string, Tag>[]) => void>;
    // private enchantmentEffectsToRemove: string[];
    // private protocol: Protocol<any, any, any, any>;
    // private registryEntryHandlers: JavaMap<string, (param0: string, param1: Map$Entry<string, Tag>[]) => void>;
    // private toAdd: JavaMap<string, RegistryEntry[]>;
    // private toRemove: string[];
    addEnchantmentEffectRewriter(arg0: string, arg1: (param0: Map$Entry<string, Tag>[]) => void): void;
    addEntries(arg0: string, ...arg1: RegistryEntry[]): void;
    addHandler(arg0: string, arg1: (param0: string, param1: Map$Entry<string, Tag>[]) => void): void;
    entriesFromTag(arg0: Map$Entry<string, Tag>[]): RegistryEntry[];
    handle(arg0: UserConnection, arg1: string, arg2: RegistryEntry[]): RegistryEntry[];
    handle(arg0: PacketWrapper): void;
    handleParticleData(arg0: Map$Entry<string, Tag>[]): void;
    hasRegistriesToRemove(): boolean;
    remove(arg0: string): void;
    removeEnchantmentEffects(...arg0: string[]): void;
    // private runEffectRewriters(arg0: Map$Entry<string, Tag>[]): void;
    sendMissingRegistries(arg0: UserConnection): void;
    // private setMappedOrDummyId(arg0: FullMappings, arg1: StringTag): void;
    shouldRemoveRegistry(arg0: string): boolean;
    trackDimensionAndBiomes(arg0: UserConnection, arg1: string, arg2: RegistryEntry[]): void;
    // private updateAttributesFields(arg0: Map$Entry<string, Tag>[]): void;
    updateBiomes(arg0: RegistryEntry[]): void;
    updateDialog(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    updateDialogAction(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    updateDialogBody(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    updateDialogs(arg0: UserConnection, arg1: RegistryEntry[]): void;
    updateDimensionTypes(arg0: RegistryEntry[]): void;
    updateEnchantmentTerm(arg0: Map$Entry<string, Tag>[]): void;
    updateEnchantments(arg0: UserConnection, arg1: RegistryEntry[]): void;
    updateEnvironmentAttributes(arg0: Map$Entry<string, Tag>[]): void;
    // private updateItem(arg0: StringTag): void;
    // private updateItemList(arg0: StringTag[]): void;
    updateJukeboxSongs(arg0: RegistryEntry[]): void;
    // private updateNestedEffect(arg0: Map$Entry<string, Tag>[]): void;
    updateTextComponent(arg0: UserConnection, arg1: Map$Entry<string, Tag>[], arg2: string): void;
    updateTrimMaterials(arg0: RegistryEntry[]): void;
    updateType(arg0: Map$Entry<string, Tag>[], arg1: string, arg2: FullMappings): void;
}