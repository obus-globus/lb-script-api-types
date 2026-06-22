import type { SuggestionsBuilder } from '../../../../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { LocalPlayer } from '../../../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { SharedSuggestionProvider } from '../../../../../../../net/minecraft/commands/SharedSuggestionProvider.d.ts'
import type { SharedSuggestionProvider$ElementSuggestionType } from '../../../../../../../net/minecraft/commands/SharedSuggestionProvider$ElementSuggestionType.d.ts'
import type { SharedSuggestionProvider$TextCoordinates } from '../../../../../../../net/minecraft/commands/SharedSuggestionProvider$TextCoordinates.d.ts'
import type { HolderLookup } from '../../../../../../../net/minecraft/core/HolderLookup.d.ts'
import type { RegistryAccess } from '../../../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { PermissionSet } from '../../../../../../../net/minecraft/server/permissions/PermissionSet.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { FeatureFlagSet } from '../../../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { Vec2 } from '../../../../../../../net/minecraft/world/phys/Vec2.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export interface FabricClientCommandSource extends Object, SharedSuggestionProvider{
    enabledFeatures(): FeatureFlagSet;
    getAbsoluteCoordinates(): SharedSuggestionProvider$TextCoordinates[];
    getClient(): Minecraft;
    getCustomTabSuggestions(): string[];
    getEntity(): Entity;
    getLevel(): ClientLevel;
    getMeta(arg0: string): Object;
    getPlayer(): LocalPlayer;
    getPosition(): Vec3;
    getRelevantCoordinates(): SharedSuggestionProvider$TextCoordinates[];
    getRotation(): Vec2;
    getSelectedEntities(): string[];
    permissions(): PermissionSet;
    registryAccess(): RegistryAccess;
    sendError(arg0: Component): void;
    sendFeedback(arg0: Component): void;
    suggestRegistryElements(registry: HolderLookup<Object>, elements: SharedSuggestionProvider$ElementSuggestionType, builder: SuggestionsBuilder): void;
}