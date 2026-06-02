import type { Pair } from '../../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Packet } from '../../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ItemFrame } from '../../../../../../net/minecraft/world/entity/decoration/ItemFrame.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BlockGetter } from '../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelAccessor } from '../../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { SavedData } from '../../../../../../net/minecraft/world/level/saveddata/SavedData.d.ts'
import type { SavedDataType } from '../../../../../../net/minecraft/world/level/saveddata/SavedDataType.d.ts'
import type { MapBanner } from '../../../../../../net/minecraft/world/level/saveddata/maps/MapBanner.d.ts'
import type { MapDecoration } from '../../../../../../net/minecraft/world/level/saveddata/maps/MapDecoration.d.ts'
import type { MapDecorationType } from '../../../../../../net/minecraft/world/level/saveddata/maps/MapDecorationType.d.ts'
import type { MapFrame } from '../../../../../../net/minecraft/world/level/saveddata/maps/MapFrame.d.ts'
import type { MapId } from '../../../../../../net/minecraft/world/level/saveddata/maps/MapId.d.ts'
import type { MapItemSavedData$HoldingPlayer } from '../../../../../../net/minecraft/world/level/saveddata/maps/MapItemSavedData$HoldingPlayer.d.ts'
import type { MapItemSavedData$MapDecorationLocation } from '../../../../../../net/minecraft/world/level/saveddata/maps/MapItemSavedData$MapDecorationLocation.d.ts'
export class MapItemSavedData extends SavedData {
    static CODEC: Codec<MapItemSavedData>;
    static MAX_SCALE: number;
    static TRACKED_DECORATION_LIMIT: number;
    static addTargetDecoration(paramitemStack: ItemStack, paramposition: BlockPos, paramkey: string, paramdecorationType: Holder<MapDecorationType>): void;
    static createForClient(paramscale: number, paramisLocked: boolean, paramdimension: ResourceKey<Level>): MapItemSavedData;
    static createFresh(paramoriginX: number, paramoriginY: number, paramscale: number, paramtrackingPosition: boolean, paramunlimitedTracking: boolean, paramdimension: ResourceKey<Level>): MapItemSavedData;
    static type(paramid: MapId): SavedDataType<MapItemSavedData>;
    private constructor(centerX: number, centerZ: number, scale: number, trackingPosition: boolean, unlimitedTracking: boolean, locked: boolean, dimension: ResourceKey<Level>)
    private constructor(dimension: ResourceKey<Level>, centerX: number, centerZ: number, scale: number, colors: ByteBuffer, trackingPosition: boolean, unlimitedTracking: boolean, locked: boolean, banners: MapBanner[], frames: MapFrame[])
    // private bannerMarkers: { [key: string]: MapBanner };
    // private carriedBy: MapItemSavedData$HoldingPlayer[];
    // private carriedByPlayers: Map<Player, MapItemSavedData$HoldingPlayer>;
    centerX: number;
    centerZ: number;
    colors: number[];
    readonly decorations: { [key: string]: MapDecoration };
    dimension: ResourceKey<Level>;
    // private frameMarkers: { [key: string]: MapFrame };
    locked: boolean;
    scale: number;
    // private trackedDecorationCount: number;
    // private trackingPosition: boolean;
    // private unlimitedTracking: boolean;
    addClientSideDecorations(decorations: MapDecoration[]): void;
    // private addDecoration(type: Holder<MapDecorationType>, level: LevelAccessor, key: string, xPos: number, zPos: number, yRot: number, name: Component): void;
    // private calculateDecorationLocationAndType(type: Holder<MapDecorationType>, level: LevelAccessor, yRot: number, xDeltaFromCenter: number, yDeltaFromCenter: number): MapItemSavedData$MapDecorationLocation;
    // private calculateRotation(level: LevelAccessor, yRot: number): number;
    checkBanners(level: BlockGetter, x: number, z: number): void;
    // private decorationTypeForPlayerOutsideMap(xDeltaFromCenter: number, yDeltaFromCenter: number): Holder<MapDecorationType>;
    getBanners(): E[];
    getDecorations(): MapDecoration[];
    getHoldingPlayer(player: Player): MapItemSavedData$HoldingPlayer;
    getUpdatePacket(id: MapId, player: Player): Packet<Object>;
    isExplorationMap(): boolean;
    isTrackedCountOverLimit(limit: number): boolean;
    locked(): MapItemSavedData;
    // private playerDecorationTypeAndRotation(type: Holder<MapDecorationType>, level: LevelAccessor, yRot: number, xDeltaFromCenter: number, yDeltaFromCenter: number): Pair<Holder<MapDecorationType>, number>;
    // private removeDecoration(string: string): void;
    removedFromFrame(pos: BlockPos, entityID: number): void;
    scaled(): MapItemSavedData;
    setColor(x: number, y: number, newColor: number): void;
    // private setColorsDirty(x: number, y: number): void;
    // private setDecorationsDirty(): void;
    tickCarriedBy(tickingPlayer: Player, itemStack: ItemStack, placedInFrame: ItemFrame): void;
    toggleBanner(level: LevelAccessor, pos: BlockPos): boolean;
    updateColor(x: number, y: number, newColor: number): boolean;
}