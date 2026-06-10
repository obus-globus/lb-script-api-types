import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MixinGuiAccessor } from '../../../../net/ccbluex/liquidbounce/injection/mixins/minecraft/gui/MixinGuiAccessor.d.ts'
import type { HudComponent } from '../../../../net/ccbluex/liquidbounce/integration/theme/component/HudComponent.d.ts'
import type { GuiAccessor } from '../../../../net/fabricmc/fabric/mixin/client/rendering/GuiAccessor.d.ts'
import type { DeltaTracker } from '../../../../net/minecraft/client/DeltaTracker.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { Font } from '../../../../net/minecraft/client/gui/Font.d.ts'
import type { Gui$ContextualInfo } from '../../../../net/minecraft/client/gui/Gui$ContextualInfo.d.ts'
import type { Gui$HeartType } from '../../../../net/minecraft/client/gui/Gui$HeartType.d.ts'
import type { GuiGraphicsExtractor } from '../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { BossHealthOverlay } from '../../../../net/minecraft/client/gui/components/BossHealthOverlay.d.ts'
import type { ChatComponent } from '../../../../net/minecraft/client/gui/components/ChatComponent.d.ts'
import type { DebugScreenOverlay } from '../../../../net/minecraft/client/gui/components/DebugScreenOverlay.d.ts'
import type { PlayerTabOverlay } from '../../../../net/minecraft/client/gui/components/PlayerTabOverlay.d.ts'
import type { SubtitleOverlay } from '../../../../net/minecraft/client/gui/components/SubtitleOverlay.d.ts'
import type { SpectatorGui } from '../../../../net/minecraft/client/gui/components/spectator/SpectatorGui.d.ts'
import type { ContextualBarRenderer } from '../../../../net/minecraft/client/gui/contextualbar/ContextualBarRenderer.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { MobEffect } from '../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { HitResult } from '../../../../net/minecraft/world/phys/HitResult.d.ts'
import type { Objective } from '../../../../net/minecraft/world/scores/Objective.d.ts'
import type { Pair } from '../../../../org/apache/commons/lang3/tuple/Pair.d.ts'
export class Gui extends Object implements MixinGuiAccessor, GuiAccessor {
    static NAUSEA_LOCATION: Identifier;
    static getHotbarSelectionTexture(): Identifier;
    static getMobEffectSprite(parameffect: Holder<MobEffect>): Identifier;
    static getScoreboardEntryComparator(): (param0: Object) => boolean;
    constructor(minecraft: Minecraft)
    // private animateOverlayMessageColor: boolean;
    // private autosaveIndicatorValue: number;
    readonly bossOverlay: BossHealthOverlay;
    readonly chat: ChatComponent;
    // private contextualInfoBar: Pair<Gui$ContextualInfo, ContextualBarRenderer>;
    // private contextualInfoBarRenderers: { [key in Gui$ContextualInfo]: () => ContextualBarRenderer };
    readonly debugOverlay: DebugScreenOverlay;
    // private deferredSubtitles: () => void;
    // private displayHealth: number;
    // private healthBlinkTime: number;
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
    subtitle: Component;
    // private subtitleOverlay: SubtitleOverlay;
    readonly tabList: PlayerTabOverlay;
    // private tickCount: number;
    title: Component;
    // private titleFadeInTime: number;
    // private titleFadeOutTime: number;
    // private titleStayTime: number;
    // private titleTime: number;
    // private toolHighlightTimer: number;
    vignetteBrightness: number;
    // private canRenderCrosshairForSpectator(hitResult: HitResult): boolean;
    clearCache(): void;
    clearTitles(): void;
    // private displayScoreboardSidebar(graphics: GuiGraphicsExtractor, objective: Objective): void;
    // private drawHotbar(arg0: GuiGraphicsExtractor, arg1: DeltaTracker, arg2: HudComponent): void;
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
    // private extractHeart(graphics: GuiGraphicsExtractor, type: Gui$HeartType, xo: number, yo: number, isHardcore: boolean, blinks: boolean, half: boolean): void;
    // private extractHearts(graphics: GuiGraphicsExtractor, player: Player, xLeft: number, yLineBase: number, healthRowHeight: number, heartOffsetIndex: number, maxHealth: number, currentHealth: number, oldHealth: number, absorption: number, blink: boolean): void;
    // private extractHotbarAndDecorations(graphics: GuiGraphicsExtractor, deltaTracker: DeltaTracker): void;
    // private extractItemHotbar(graphics: GuiGraphicsExtractor, deltaTracker: DeltaTracker): void;
    // private extractOverlayMessage(graphics: GuiGraphicsExtractor, deltaTracker: DeltaTracker): void;
    // private extractPlayerHealth(graphics: GuiGraphicsExtractor): void;
    // private extractPortalOverlay(graphics: GuiGraphicsExtractor, alpha: number): void;
    extractRenderState(graphics: GuiGraphicsExtractor, deltaTracker: DeltaTracker): void;
    // private extractRenderState$mixinextras$wrapped$190(arg0: GuiGraphicsExtractor, arg1: DeltaTracker): void;
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
    // private nextContextualInfoState(): Gui$ContextualInfo;
    onDisconnected(): void;
    // private playAirBubblePoppedSound(bubble: number, player: Player, emptyAirBubbles: number): void;
    resetTitleTimes(): void;
    setNowPlaying(string: Component): void;
    setOverlayMessage(string: Component, animate: boolean): void;
    setSubtitle(subtitle: Component): void;
    setTimes(fadeInTime: number, stayTime: number, fadeOutTime: number): void;
    setTitle(title: Component): void;
    // private tick(): void;
    tick(pause: boolean): void;
    // private tickAutosaveIndicator(): void;
    // private updateVignetteBrightness(camera: Entity): void;
    // private willPrioritizeExperienceInfo(): boolean;
    // private willPrioritizeJumpInfo(): boolean;
}