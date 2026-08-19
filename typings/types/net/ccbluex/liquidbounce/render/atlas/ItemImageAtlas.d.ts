import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { ResourceReloadEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/ResourceReloadEvent.d.ts'
import type { Atlas } from '../../../../../net/ccbluex/liquidbounce/render/atlas/Atlas.d.ts'
import type { AtlasLookup } from '../../../../../net/ccbluex/liquidbounce/render/atlas/AtlasLookup.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class ItemImageAtlas extends Object implements EventListener {
    static INSTANCE: ItemImageAtlas;
    // private atlas: Atlas | null;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    // private resourceReloadHandler: EventHook<ResourceReloadEvent>;
    readonly running: boolean;
    children(): EventListener[];
    getItemImage(name: Identifier): AtlasLookup;
    parent(): EventListener | null;
    unregister(): void;
}