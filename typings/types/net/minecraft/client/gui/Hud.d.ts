import type { Pair } from '../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MixinHudAccessor } from '../../../../net/ccbluex/liquidbounce/injection/mixins/minecraft/gui/MixinHudAccessor.d.ts'
import type { HudComponent } from '../../../../net/ccbluex/liquidbounce/integration/theme/component/HudComponent.d.ts'
import type { HudAccessor } from '../../../../net/fabricmc/fabric/mixin/client/rendering/HudAccessor.d.ts'
import type { DeltaTracker } from '../../../../net/minecraft/client/DeltaTracker.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { Font } from '../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Hud$ContextualInfo } from '../../../../net/minecraft/client/gui/Hud$ContextualInfo.d.ts'
import type { Hud$HeartType } from '../../../../net/minecraft/client/gui/Hud$HeartType.d.ts'
import type { BossHealthOverlay } from '../../../../net/minecraft/client/gui/components/BossHealthOverlay.d.ts'
import type { ChatComponent } from '../../../../net/minecraft/client/gui/components/ChatComponent.d.ts'
import type { DebugScreenOverlay } from '../../../../net/minecraft/client/gui/components/DebugScreenOverlay.d.ts'
import type { PlayerTabOverlay } from '../../../../net/minecraft/client/gui/components/PlayerTabOverlay.d.ts'
import type { SubtitleOverlay } from '../../../../net/minecraft/client/gui/components/SubtitleOverlay.d.ts'
import type { SpectatorGui } from '../../../../net/minecraft/client/gui/components/spectator/SpectatorGui.d.ts'
import type { ContextualBar } from '../../../../net/minecraft/client/gui/contextualbar/ContextualBar.d.ts'
import type { WaypointStyleManager } from '../../../../net/minecraft/client/resources/WaypointStyleManager.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ReloadableResourceManager } from '../../../../net/minecraft/server/packs/resources/ReloadableResourceManager.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { MobEffect } from '../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { HitResult } from '../../../../net/minecraft/world/phys/HitResult.d.ts'
import type { Objective } from '../../../../net/minecraft/world/scores/Objective.d.ts'
import type { PlayerScoreEntry } from '../../../../net/minecraft/world/scores/PlayerScoreEntry.d.ts'
export class Hud extends Object implements MixinHudAccessor, HudAccessor {
    static NAUSEA_LOCATION: Identifier;
    static getHotbarSelectionTexture(): Identifier;
    static getMobEffectSprite(parameffect: Holder<MobEffect>): Identifier;
    static getScoreboardEntryComparator(): (param0: PlayerScoreEntry, param1: PlayerScoreEntry) => number;
    constructor(minecraft: Minecraft)
    // private animateOverlayMessageColor: boolean;
    // private autosaveIndicatorValue: number;
    readonly bossOverlay: BossHealthOverlay;
    readonly chat: ChatComponent;
    // private contextualInfoBar: Pair<Hud$ContextualInfo, ContextualBar>;
    // private contextualInfoBars: Map<Hud$ContextualInfo, () => ContextualBar>;
    readonly debugOverlay: DebugScreenOverlay;
    // private deferredSubtitles: () => void;
    // private displayHealth: number;
    // private healthBlinkTime: number;
    // private isHidden: boolean;
    // private lastAutosaveIndicatorValue: number;
    // private lastBubblePopSoundPlayed: number;
    // private lastHealth: number;
    // private lastHealthTime: number;
    // private lastToolHighlight: ItemStack;
    // private minecraft: Minecraft;
    // private overlayMessageString: Component;
    // private overlayMessageTime: number;
    // private random: RandomSource;
    // private scopeScale: number;
    readonly spectatorGui: SpectatorGui;
    readonly subtitle: Component;
    // private subtitleOverlay: SubtitleOverlay;
    readonly tabList: PlayerTabOverlay;
    // private tickCount: number;
    readonly title: Component;
    // private titleFadeInTime: number;
    // private titleFadeOutTime: number;
    // private titleStayTime: number;
    // private titleTime: number;
    // private toolHighlightTimer: number;
    vignetteBrightness: number;
    readonly waypointStyles: WaypointStyleManager;
    // private canRenderCrosshairForSpectator(hitResult: HitResult): boolean;
    clearCache(): void;
    clearTitles(): void;
    // private displayScoreboardSidebar(graphics: GuiGraphicsExtractor, objective: Objective): void;
    // private extractAirBubbles(graphics: GuiGraphicsExtractor, player: Player, vehicleHearts: number, yLineAir: number, xRight: number): void;
    // private extractBossOverlay(graphics: GuiGraphicsExtractor, deltaTracker: DeltaTracker): void;
    // private extractCameraOverlays(graphics: GuiGraphicsExtractor, deltaTracker: DeltaTracker): void;
    // private extractChat(graphics: GuiGraphicsExtractor, deltaTracker: DeltaTracker): void;
    // private extractConfusionOverlay(graphics: GuiGraphicsExtractor, strength: number): void;
    // private extractCrosshair(graphics: GuiGraphicsExtractor, deltaTracker: DeltaTracker): void;
    extractDebugOverlay(graphics: GuiGraphicsExtractor): void;
    extractDeferredSubtitles(): void;
    // private extractDemoOverlay(graphics: GuiGraphicsExtractor, deltaTracker: DeltaTracker): void;
    // private extractEffects(graphics: GuiGraphicsExtractor, deltaTracker: DeltaTracker): void;
    // private extractFood(graphics: GuiGraphicsExtractor, player: Player, yLineBase: number, xRight: number): void;
    // private extractHeart(graphics: GuiGraphicsExtractor, type: Hud$HeartType, xo: number, yo: number, isHardcore: boolean, blinks: boolean, half: boolean): void;
    // private extractHearts(graphics: GuiGraphicsExtractor, player: Player, xLeft: number, yLineBase: number, healthRowHeight: number, heartOffsetIndex: number, maxHealth: number, currentHealth: number, oldHealth: number, absorption: number, blink: boolean): void;
    // private extractHotbarAndDecorations(graphics: GuiGraphicsExtractor, deltaTracker: DeltaTracker): void;
    // private extractHotbarForHud(arg0: GuiGraphicsExtractor, arg1: DeltaTracker, arg2: HudComponent): void;
    // private extractItemHotbar(graphics: GuiGraphicsExtractor, deltaTracker: DeltaTracker): void;
    // private extractOverlayMessage(graphics: GuiGraphicsExtractor, deltaTracker: DeltaTracker): void;
    // private extractPlayerHealth(graphics: GuiGraphicsExtractor): void;
    // private extractPortalOverlay(graphics: GuiGraphicsExtractor, alpha: number): void;
    extractRenderState(graphics: GuiGraphicsExtractor, deltaTracker: DeltaTracker): void;
    // private extractRenderState$mixinextras$wrapped$194(arg0: GuiGraphicsExtractor, arg1: DeltaTracker): void;
    extractSavingIndicator(graphics: GuiGraphicsExtractor, deltaTracker: DeltaTracker): void;
    // private extractScoreboardSidebar(graphics: GuiGraphicsExtractor, deltaTracker: DeltaTracker): void;
    // private extractSelectedItemName(graphics: GuiGraphicsExtractor): void;
    // private extractSleepOverlay(graphics: GuiGraphicsExtractor, deltaTracker: DeltaTracker): void;
    // private extractSlot(graphics: GuiGraphicsExtractor, x: number, y: number, deltaTracker: DeltaTracker, player: Player, itemStack: ItemStack, seed: number): void;
    // private extractSpyglassOverlay(graphics: GuiGraphicsExtractor, scale: number): void;
    // private extractSubtitleOverlay(graphics: GuiGraphicsExtractor, deferRendering: boolean): void;
    // private extractTabList(graphics: GuiGraphicsExtractor, deltaTracker: DeltaTracker): void;
    // private extractTextureOverlay(graphics: GuiGraphicsExtractor, texture: Identifier, alpha: number): void;
    // private extractTitle(graphics: GuiGraphicsExtractor, deltaTracker: DeltaTracker): void;
    // private extractVehicleHealth(graphics: GuiGraphicsExtractor): void;
    // private extractVignette(graphics: GuiGraphicsExtractor, camera: Entity): void;
    fabric$callGetCameraPlayer(): Player;
    fabric$callGetHeartCount(arg0: LivingEntity): number;
    fabric$callGetHeartRows(arg0: number): number;
    fabric$callGetRiddenEntity(): LivingEntity;
    fabric$getRenderHealthValue(): number;
    // private getAirBubbleYLine(vehicleHearts: number, yLineAir: number): number;
    getBossOverlay(): BossHealthOverlay;
    // private getCameraPlayer(): Player;
    getChat(): ChatComponent;
    getDebugOverlay(): DebugScreenOverlay;
    getFont(): Font;
    getGuiTicks(): number;
    // private getPlayerVehicleWithHealth(): LivingEntity;
    getSpectatorGui(): SpectatorGui;
    getTabList(): PlayerTabOverlay;
    // private getVehicleMaxHearts(vehicle: LivingEntity): number;
    // private getVisibleVehicleHeartRows(hearts: number): number;
    getWaypointStyles(): WaypointStyleManager;
    isHidden(): boolean;
    // private nextContextualInfoState(): Hud$ContextualInfo;
    onDisconnected(): void;
    // private playAirBubblePoppedSound(bubble: number, player: Player, emptyAirBubbles: number): void;
    registerReloadListeners(resourceManager: ReloadableResourceManager): void;
    resetTitleTimes(): void;
    setNowPlaying(string: Component): void;
    setOverlayMessage(string: Component, animate: boolean): void;
    setSubtitle(subtitle: Component): void;
    setTimes(fadeInTime: number, stayTime: number, fadeOutTime: number): void;
    setTitle(title: Component): void;
    // private tick(): void;
    tick(pause: boolean): void;
    // private tickAutosaveIndicator(): void;
    toggle(): void;
    // private updateVignetteBrightness(camera: Entity): void;
    // private willPrioritizeExperienceInfo(): boolean;
    // private willPrioritizeJumpInfo(): boolean;
}