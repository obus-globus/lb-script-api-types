import type { BufferedImage } from '../../../../../java/awt/image/BufferedImage.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { ResourceReloadEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/ResourceReloadEvent.d.ts'
import type { Atlas } from '../../../../../net/ccbluex/liquidbounce/render/gui/Atlas.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
export class ItemImageAtlas extends Object implements EventListener {
    static INSTANCE: ItemImageAtlas;
    // private atlas: Atlas | null;
    /*not mapped: */ isAtlasAvailable(): boolean;
    // private resourceReloadHandler: EventHook<ResourceReloadEvent>;
    children(): EventListener[];
    getItemImage(item: Item): BufferedImage | null;
    parent(): EventListener | null;
    resolveAliasIfPresent(name: Identifier): Identifier;
    unregister(): void;
}