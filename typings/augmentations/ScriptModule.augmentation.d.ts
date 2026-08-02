// ScriptModule augmentation - adds event handler interfaces

// Event type imports

// imports for
import type { AccountManagerAdditionResultEvent } from '../types/net/ccbluex/liquidbounce/event/events/AccountManagerAdditionResultEvent.d.ts'
import type { AccountManagerLoginResultEvent } from '../types/net/ccbluex/liquidbounce/event/events/AccountManagerLoginResultEvent.d.ts'
import type { AccountManagerMessageEvent } from '../types/net/ccbluex/liquidbounce/event/events/AccountManagerMessageEvent.d.ts'
import type { AccountManagerRemovalResultEvent } from '../types/net/ccbluex/liquidbounce/event/events/AccountManagerRemovalResultEvent.d.ts'
import type { AllowAutoJumpEvent } from '../types/net/ccbluex/liquidbounce/event/events/AllowAutoJumpEvent.d.ts'
import type { AttackEntityEvent } from '../types/net/ccbluex/liquidbounce/event/events/AttackEntityEvent.d.ts'
import type { BedStateChangeEvent } from '../types/net/ccbluex/liquidbounce/event/events/BedStateChangeEvent.d.ts'
import type { BlockAttackEvent } from '../types/net/ccbluex/liquidbounce/event/events/BlockAttackEvent.d.ts'
import type { BlockBreakingProgressEvent } from '../types/net/ccbluex/liquidbounce/event/events/BlockBreakingProgressEvent.d.ts'
import type { BlockChangeEvent } from '../types/net/ccbluex/liquidbounce/event/events/BlockChangeEvent.d.ts'
import type { BlockCountChangeEvent } from '../types/net/ccbluex/liquidbounce/event/events/BlockCountChangeEvent.d.ts'
import type { BlockShapeEvent } from '../types/net/ccbluex/liquidbounce/event/events/BlockShapeEvent.d.ts'
import type { BlockSlipperinessMultiplierEvent } from '../types/net/ccbluex/liquidbounce/event/events/BlockSlipperinessMultiplierEvent.d.ts'
import type { BlockVelocityMultiplierEvent } from '../types/net/ccbluex/liquidbounce/event/events/BlockVelocityMultiplierEvent.d.ts'
import type { BrowserReadyEvent } from '../types/net/ccbluex/liquidbounce/event/events/BrowserReadyEvent.d.ts'
import type { BrowserUrlChangeEvent } from '../types/net/ccbluex/liquidbounce/event/events/BrowserUrlChangeEvent.d.ts'
import type { CancelBlockBreakingEvent } from '../types/net/ccbluex/liquidbounce/event/events/CancelBlockBreakingEvent.d.ts'
import type { ChatReceiveEvent } from '../types/net/ccbluex/liquidbounce/event/events/ChatReceiveEvent.d.ts'
import type { ChatSendEvent } from '../types/net/ccbluex/liquidbounce/event/events/ChatSendEvent.d.ts'
import type { ChunkDeltaUpdateEvent } from '../types/net/ccbluex/liquidbounce/event/events/ChunkDeltaUpdateEvent.d.ts'
import type { ChunkLoadEvent } from '../types/net/ccbluex/liquidbounce/event/events/ChunkLoadEvent.d.ts'
import type { ChunkUnloadEvent } from '../types/net/ccbluex/liquidbounce/event/events/ChunkUnloadEvent.d.ts'
import type { TitleEvent$Clear } from '../types/net/ccbluex/liquidbounce/event/events/TitleEvent$Clear.d.ts'
import type { ClickGuiScaleChangeEvent } from '../types/net/ccbluex/liquidbounce/event/events/ClickGuiScaleChangeEvent.d.ts'
import type { ClickGuiValueChangeEvent } from '../types/net/ccbluex/liquidbounce/event/events/ClickGuiValueChangeEvent.d.ts'
import type { ClientChatErrorEvent } from '../types/net/ccbluex/liquidbounce/event/events/ClientChatErrorEvent.d.ts'
import type { ClientChatJwtTokenEvent } from '../types/net/ccbluex/liquidbounce/event/events/ClientChatJwtTokenEvent.d.ts'
import type { ClientChatMessageEvent } from '../types/net/ccbluex/liquidbounce/event/events/ClientChatMessageEvent.d.ts'
import type { ClientChatStateChange } from '../types/net/ccbluex/liquidbounce/event/events/ClientChatStateChange.d.ts'
import type { ClientLanguageChangedEvent } from '../types/net/ccbluex/liquidbounce/event/events/ClientLanguageChangedEvent.d.ts'
import type { ClientPlayerDataEvent } from '../types/net/ccbluex/liquidbounce/event/events/ClientPlayerDataEvent.d.ts'
import type { ClientPlayerEffectEvent } from '../types/net/ccbluex/liquidbounce/event/events/ClientPlayerEffectEvent.d.ts'
import type { ClientPlayerInventoryEvent } from '../types/net/ccbluex/liquidbounce/event/events/ClientPlayerInventoryEvent.d.ts'
import type { ClientShutdownEvent } from '../types/net/ccbluex/liquidbounce/event/events/ClientShutdownEvent.d.ts'
import type { ClientStartEvent } from '../types/net/ccbluex/liquidbounce/event/events/ClientStartEvent.d.ts'
import type { ClosedCaptionsEvent } from '../types/net/ccbluex/liquidbounce/event/events/ClosedCaptionsEvent.d.ts'
import type { ComponentsUpdateEvent } from '../types/net/ccbluex/liquidbounce/event/events/ComponentsUpdateEvent.d.ts'
import type { DeathEvent } from '../types/net/ccbluex/liquidbounce/event/events/DeathEvent.d.ts'
import type { DisconnectEvent } from '../types/net/ccbluex/liquidbounce/event/events/DisconnectEvent.d.ts'
import type { DrawOutlinesEvent } from '../types/net/ccbluex/liquidbounce/event/events/DrawOutlinesEvent.d.ts'
import type { EntityEquipmentChangeEvent } from '../types/net/ccbluex/liquidbounce/event/events/EntityEquipmentChangeEvent.d.ts'
import type { EntityHealthUpdateEvent } from '../types/net/ccbluex/liquidbounce/event/events/EntityHealthUpdateEvent.d.ts'
import type { EntityMarginEvent } from '../types/net/ccbluex/liquidbounce/event/events/EntityMarginEvent.d.ts'
import type { FluidPushEvent } from '../types/net/ccbluex/liquidbounce/event/events/FluidPushEvent.d.ts'
import type { FpsChangeEvent } from '../types/net/ccbluex/liquidbounce/event/events/FpsChangeEvent.d.ts'
import type { FpsLimitEvent } from '../types/net/ccbluex/liquidbounce/event/events/FpsLimitEvent.d.ts'
import type { FramebufferResizeEvent } from '../types/net/ccbluex/liquidbounce/event/events/FramebufferResizeEvent.d.ts'
import type { GameModeChangeEvent } from '../types/net/ccbluex/liquidbounce/event/events/GameModeChangeEvent.d.ts'
import type { GameRenderEvent } from '../types/net/ccbluex/liquidbounce/event/events/GameRenderEvent.d.ts'
import type { GameRenderTaskQueueEvent } from '../types/net/ccbluex/liquidbounce/event/events/GameRenderTaskQueueEvent.d.ts'
import type { GameTickEvent } from '../types/net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { HealthUpdateEvent } from '../types/net/ccbluex/liquidbounce/event/events/HealthUpdateEvent.d.ts'
import type { InputHandleEvent } from '../types/net/ccbluex/liquidbounce/event/events/InputHandleEvent.d.ts'
import type { ItemLoreQueryEvent } from '../types/net/ccbluex/liquidbounce/event/events/ItemLoreQueryEvent.d.ts'
import type { KeyEvent } from '../types/net/ccbluex/liquidbounce/event/events/KeyEvent.d.ts'
import type { KeybindChangeEvent } from '../types/net/ccbluex/liquidbounce/event/events/KeybindChangeEvent.d.ts'
import type { KeybindIsPressedEvent } from '../types/net/ccbluex/liquidbounce/event/events/KeybindIsPressedEvent.d.ts'
import type { KeyboardCharEvent } from '../types/net/ccbluex/liquidbounce/event/events/KeyboardCharEvent.d.ts'
import type { KeyboardKeyEvent } from '../types/net/ccbluex/liquidbounce/event/events/KeyboardKeyEvent.d.ts'
import type { ModuleActivationEvent } from '../types/net/ccbluex/liquidbounce/event/events/ModuleActivationEvent.d.ts'
import type { ModuleToggleEvent } from '../types/net/ccbluex/liquidbounce/event/events/ModuleToggleEvent.d.ts'
import type { MouseButtonEvent } from '../types/net/ccbluex/liquidbounce/event/events/MouseButtonEvent.d.ts'
import type { MouseCursorEvent } from '../types/net/ccbluex/liquidbounce/event/events/MouseCursorEvent.d.ts'
import type { MouseRotationEvent } from '../types/net/ccbluex/liquidbounce/event/events/MouseRotationEvent.d.ts'
import type { MouseScrollEvent } from '../types/net/ccbluex/liquidbounce/event/events/MouseScrollEvent.d.ts'
import type { MouseScrollInHotbarEvent } from '../types/net/ccbluex/liquidbounce/event/events/MouseScrollInHotbarEvent.d.ts'
import type { MovementInputEvent } from '../types/net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { NotificationEvent } from '../types/net/ccbluex/liquidbounce/event/events/NotificationEvent.d.ts'
import type { OverlayMessageEvent } from '../types/net/ccbluex/liquidbounce/event/events/OverlayMessageEvent.d.ts'
import type { OverlayRenderEvent } from '../types/net/ccbluex/liquidbounce/event/events/OverlayRenderEvent.d.ts'
import type { PacketEvent } from '../types/net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { PerspectiveEvent } from '../types/net/ccbluex/liquidbounce/event/events/PerspectiveEvent.d.ts'
import type { PipelineEvent } from '../types/net/ccbluex/liquidbounce/event/events/PipelineEvent.d.ts'
import type { PlayerAfterJumpEvent } from '../types/net/ccbluex/liquidbounce/event/events/PlayerAfterJumpEvent.d.ts'
import type { PlayerFluidCollisionCheckEvent } from '../types/net/ccbluex/liquidbounce/event/events/PlayerFluidCollisionCheckEvent.d.ts'
import type { PlayerInteractedItemEvent } from '../types/net/ccbluex/liquidbounce/event/events/PlayerInteractedItemEvent.d.ts'
import type { PlayerInteractItemEvent } from '../types/net/ccbluex/liquidbounce/event/events/PlayerInteractItemEvent.d.ts'
import type { PlayerJumpEvent } from '../types/net/ccbluex/liquidbounce/event/events/PlayerJumpEvent.d.ts'
import type { PlayerMoveEvent } from '../types/net/ccbluex/liquidbounce/event/events/PlayerMoveEvent.d.ts'
import type { PlayerMovementTickEvent } from '../types/net/ccbluex/liquidbounce/event/events/PlayerMovementTickEvent.d.ts'
import type { PlayerNetworkMovementTickEvent } from '../types/net/ccbluex/liquidbounce/event/events/PlayerNetworkMovementTickEvent.d.ts'
import type { PlayerPostTickEvent } from '../types/net/ccbluex/liquidbounce/event/events/PlayerPostTickEvent.d.ts'
import type { PlayerPushOutEvent } from '../types/net/ccbluex/liquidbounce/event/events/PlayerPushOutEvent.d.ts'
import type { PlayerSafeWalkEvent } from '../types/net/ccbluex/liquidbounce/event/events/PlayerSafeWalkEvent.d.ts'
import type { PlayerSneakMultiplier } from '../types/net/ccbluex/liquidbounce/event/events/PlayerSneakMultiplier.d.ts'
import type { PlayerStepEvent } from '../types/net/ccbluex/liquidbounce/event/events/PlayerStepEvent.d.ts'
import type { PlayerStepSuccessEvent } from '../types/net/ccbluex/liquidbounce/event/events/PlayerStepSuccessEvent.d.ts'
import type { PlayerVelocityStrafe } from '../types/net/ccbluex/liquidbounce/event/events/PlayerVelocityStrafe.d.ts'
import type { PlayerStrideEvent } from '../types/net/ccbluex/liquidbounce/event/events/PlayerStrideEvent.d.ts'
import type { PlayerTickEvent } from '../types/net/ccbluex/liquidbounce/event/events/PlayerTickEvent.d.ts'
import type { PlayerUseMultiplier } from '../types/net/ccbluex/liquidbounce/event/events/PlayerUseMultiplier.d.ts'
import type { ProxyCheckResultEvent } from '../types/net/ccbluex/liquidbounce/event/events/ProxyCheckResultEvent.d.ts'
import type { BlinkPacketEvent } from '../types/net/ccbluex/liquidbounce/event/events/BlinkPacketEvent.d.ts'
import type { RefreshArrayListEvent } from '../types/net/ccbluex/liquidbounce/event/events/RefreshArrayListEvent.d.ts'
import type { ResourceReloadEvent } from '../types/net/ccbluex/liquidbounce/event/events/ResourceReloadEvent.d.ts'
import type { RotationUpdateEvent } from '../types/net/ccbluex/liquidbounce/event/events/RotationUpdateEvent.d.ts'
import type { ScaleFactorChangeEvent } from '../types/net/ccbluex/liquidbounce/event/events/ScaleFactorChangeEvent.d.ts'
import type { ScheduleInventoryActionEvent } from '../types/net/ccbluex/liquidbounce/event/events/ScheduleInventoryActionEvent.d.ts'
import type { ScreenEvent } from '../types/net/ccbluex/liquidbounce/event/events/ScreenEvent.d.ts'
import type { ScreenRenderEvent } from '../types/net/ccbluex/liquidbounce/event/events/ScreenRenderEvent.d.ts'
import type { SelectHotbarSlotSilentlyEvent } from '../types/net/ccbluex/liquidbounce/event/events/SelectHotbarSlotSilentlyEvent.d.ts'
import type { ServerConnectEvent } from '../types/net/ccbluex/liquidbounce/event/events/ServerConnectEvent.d.ts'
import type { ServerPingedEvent } from '../types/net/ccbluex/liquidbounce/event/events/ServerPingedEvent.d.ts'
import type { SessionEvent } from '../types/net/ccbluex/liquidbounce/event/events/SessionEvent.d.ts'
import type { SpaceSeperatedNamesChangeEvent } from '../types/net/ccbluex/liquidbounce/event/events/SpaceSeperatedNamesChangeEvent.d.ts'
import type { SprintEvent } from '../types/net/ccbluex/liquidbounce/event/events/SprintEvent.d.ts'
import type { TitleEvent$Subtitle } from '../types/net/ccbluex/liquidbounce/event/events/TitleEvent$Subtitle.d.ts'
import type { TagEntityEvent } from '../types/net/ccbluex/liquidbounce/event/events/TagEntityEvent.d.ts'
import type { TargetChangeEvent } from '../types/net/ccbluex/liquidbounce/event/events/TargetChangeEvent.d.ts'
import type { ThemeColorChangeEvent } from '../types/net/ccbluex/liquidbounce/event/events/ThemeColorChangeEvent.d.ts'
import type { TickPacketProcessEvent } from '../types/net/ccbluex/liquidbounce/event/events/TickPacketProcessEvent.d.ts'
import type { TitleEvent$Title } from '../types/net/ccbluex/liquidbounce/event/events/TitleEvent$Title.d.ts'
import type { TitleEvent$Fade } from '../types/net/ccbluex/liquidbounce/event/events/TitleEvent$Fade.d.ts'
import type { UseCooldownEvent } from '../types/net/ccbluex/liquidbounce/event/events/UseCooldownEvent.d.ts'
import type { UserLoggedInEvent } from '../types/net/ccbluex/liquidbounce/event/events/UserLoggedInEvent.d.ts'
import type { UserLoggedOutEvent } from '../types/net/ccbluex/liquidbounce/event/events/UserLoggedOutEvent.d.ts'
import type { ValueChangedEvent } from '../types/net/ccbluex/liquidbounce/event/events/ValueChangedEvent.d.ts'
import type { VirtualScreenEvent } from '../types/net/ccbluex/liquidbounce/event/events/VirtualScreenEvent.d.ts'
import type { WindowResizeEvent } from '../types/net/ccbluex/liquidbounce/event/events/WindowResizeEvent.d.ts'
import type { WorldChangeEvent } from '../types/net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { WorldEntityRemoveEvent } from '../types/net/ccbluex/liquidbounce/event/events/WorldEntityRemoveEvent.d.ts'
import type { WorldFeatureSubmitEvent } from '../types/net/ccbluex/liquidbounce/event/events/WorldFeatureSubmitEvent.d.ts'
import type { WorldRenderEvent } from '../types/net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'




// Augment ScriptModule with specific event handler overloads
declare module '../types/net/ccbluex/liquidbounce/script/bindings/features/ScriptModule' {
    interface ScriptModule {
        on(eventName: "enable" | "disable", handler: () => void): void;

        // on events with specific event types
        
// on events
/**
 * Reports the result of adding an account through the Account Manager, exposing the added username or an error.
 * @see {@link AccountManagerAdditionResultEvent}
 */
on(eventName: "accountManagerAddition", handler: (accountManagerAdditionEvent: AccountManagerAdditionResultEvent) => void): void;
/**
 * Reports the result of an Account Manager login, exposing the logged-in username or an error.
 * @see {@link AccountManagerLoginResultEvent}
 */
on(eventName: "accountManagerLogin", handler: (accountManagerLoginEvent: AccountManagerLoginResultEvent) => void): void;
/**
 * A status message emitted by the Account Manager.
 * @see {@link AccountManagerMessageEvent}
 */
on(eventName: "accountManagerMessage", handler: (accountManagerMessageEvent: AccountManagerMessageEvent) => void): void;
/**
 * Reports the result of removing an account through the Account Manager, exposing the removed username.
 * @see {@link AccountManagerRemovalResultEvent}
 */
on(eventName: "accountManagerRemoval", handler: (accountManagerRemovalEvent: AccountManagerRemovalResultEvent) => void): void;
/**
 * Fires to determine whether auto-jump is allowed, exposing the current flag.
 * @see {@link AllowAutoJumpEvent}
 */
on(eventName: "allowAutoJump", handler: (allowAutoJumpEvent: AllowAutoJumpEvent) => void): void;
/**
 * Fires when the player attacks an entity, exposing the target entity. Cancellable - cancelling prevents the attack.
 * @see {@link AttackEntityEvent}
 */
on(eventName: "attack", handler: (attackEvent: AttackEntityEvent) => void): void;
/**
 * Fires when the tracked bed states change.
 * @see {@link BedStateChangeEvent}
 */
on(eventName: "bedStateChange", handler: (bedStateChangeEvent: BedStateChangeEvent) => void): void;
/**
 * Fires when the player starts breaking a block, exposing its position. Cancellable.
 * @see {@link BlockAttackEvent}
 */
on(eventName: "blockAttack", handler: (blockAttackEvent: BlockAttackEvent) => void): void;
/**
 * Fires as block-breaking progresses, exposing the target block position.
 * @see {@link BlockBreakingProgressEvent}
 */
on(eventName: "blockBreakingProgress", handler: (blockBreakingProgressEvent: BlockBreakingProgressEvent) => void): void;
/**
 * Fires when a block changes, exposing the position and the new block state.
 * @see {@link BlockChangeEvent}
 */
on(eventName: "blockChange", handler: (blockChangeEvent: BlockChangeEvent) => void): void;
/**
 * Fires when the tracked block count changes, exposing the block and the new count.
 * @see {@link BlockCountChangeEvent}
 */
on(eventName: "blockCountChange", handler: (blockCountChangeEvent: BlockCountChangeEvent) => void): void;
/**
 * Fires when a block's collision shape is queried, exposing the block state, position and voxel shape.
 * @see {@link BlockShapeEvent}
 */
on(eventName: "blockShape", handler: (blockShapeEvent: BlockShapeEvent) => void): void;
/**
 * Fires to determine a block's slipperiness/friction multiplier (e.g. ice), exposing the block and the multiplier.
 * @see {@link BlockSlipperinessMultiplierEvent}
 */
on(eventName: "blockSlipperinessMultiplier", handler: (blockSlipperinessMultiplierEvent: BlockSlipperinessMultiplierEvent) => void): void;
/**
 * Fires to determine a block's velocity multiplier (e.g. soul sand, honey), exposing the block and the multiplier.
 * @see {@link BlockVelocityMultiplierEvent}
 */
on(eventName: "blockVelocityMultiplier", handler: (blockVelocityMultiplierEvent: BlockVelocityMultiplierEvent) => void): void;
/**
 * Fires when the integrated browser is ready.
 * @see {@link BrowserReadyEvent}
 */
on(eventName: "browserReady", handler: (browserReadyEvent: BrowserReadyEvent) => void): void;
/**
 * Fires when an integrated browser tab's URL changes, exposing the tab index and the new URL.
 * @see {@link BrowserUrlChangeEvent}
 */
on(eventName: "browserUrlChange", handler: (browserUrlChangeEvent: BrowserUrlChangeEvent) => void): void;
/**
 * Fires to cancel the current block-breaking action. Cancellable.
 * @see {@link CancelBlockBreakingEvent}
 */
on(eventName: "cancelBlockBreaking", handler: (cancelBlockBreakingEvent: CancelBlockBreakingEvent) => void): void;
/**
 * Fires when a chat or system message is received, exposing the raw message string and its component form. Cancellable - cancelling hides the message.
 * @see {@link ChatReceiveEvent}
 */
on(eventName: "chatReceive", handler: (chatReceiveEvent: ChatReceiveEvent) => void): void;
/**
 * Fires when the player sends a chat message, exposing the message text. Cancellable - cancelling stops the message from being sent.
 * @see {@link ChatSendEvent}
 */
on(eventName: "chatSend", handler: (chatSendEvent: ChatSendEvent) => void): void;
/**
 * Fires when multiple blocks in a chunk section change at once (a batched section-blocks-update packet).
 * @see {@link ChunkDeltaUpdateEvent}
 */
on(eventName: "chunkDeltaUpdate", handler: (chunkDeltaUpdateEvent: ChunkDeltaUpdateEvent) => void): void;
/**
 * Fires when a chunk is loaded, exposing its chunk coordinates.
 * @see {@link ChunkLoadEvent}
 */
on(eventName: "chunkLoad", handler: (chunkLoadEvent: ChunkLoadEvent) => void): void;
/**
 * Fires when a chunk is unloaded, exposing its chunk position.
 * @see {@link ChunkUnloadEvent}
 */
on(eventName: "chunkUnload", handler: (chunkUnloadEvent: ChunkUnloadEvent) => void): void;
/**
 * @see {@link TitleEvent$Clear}
 */
on(eventName: "clearTitle", handler: (clearTitleEvent: TitleEvent$Clear) => void): void;
/**
 * Fires when the ClickGUI scale changes, exposing the new scale.
 * @see {@link ClickGuiScaleChangeEvent}
 */
on(eventName: "clickGuiScaleChange", handler: (clickGuiScaleChangeEvent: ClickGuiScaleChangeEvent) => void): void;
/**
 * Fires when a value changes in the ClickGUI, exposing the affected configurable.
 * @see {@link ClickGuiValueChangeEvent}
 */
on(eventName: "clickGuiValueChange", handler: (clickGuiValueChangeEvent: ClickGuiValueChangeEvent) => void): void;
/**
 * Fires when the client chat encounters an error, exposing the error message.
 * @see {@link ClientChatErrorEvent}
 */
on(eventName: "clientChatError", handler: (clientChatErrorEvent: ClientChatErrorEvent) => void): void;
/**
 * Fires when a JWT token is issued for client-chat authentication.
 * @see {@link ClientChatJwtTokenEvent}
 */
on(eventName: "clientChatJwtToken", handler: (clientChatJwtTokenEvent: ClientChatJwtTokenEvent) => void): void;
/**
 * Fires when a message is received in the client chat, exposing the sender, the message and the chat group.
 * @see {@link ClientChatMessageEvent}
 */
on(eventName: "clientChatMessage", handler: (clientChatMessageEvent: ClientChatMessageEvent) => void): void;
/**
 * Fires when the client-chat connection state changes, exposing the new state.
 * @see {@link ClientChatStateChange}
 */
on(eventName: "clientChatStateChange", handler: (clientChatStateChangeEvent: ClientChatStateChange) => void): void;
/**
 * Fires when the client language is changed.
 * @see {@link ClientLanguageChangedEvent}
 */
on(eventName: "clientLanguageChanged", handler: (clientLanguageChangedEvent: ClientLanguageChangedEvent) => void): void;
/**
 * Fires when the client's player data is updated.
 * @see {@link ClientPlayerDataEvent}
 */
on(eventName: "clientPlayerData", handler: (clientPlayerDataEvent: ClientPlayerDataEvent) => void): void;
/**
 * Fires when the client player's active status effects are updated.
 * @see {@link ClientPlayerEffectEvent}
 */
on(eventName: "clientPlayerEffect", handler: (clientPlayerEffectEvent: ClientPlayerEffectEvent) => void): void;
/**
 * Fires when the client player's inventory data is updated.
 * @see {@link ClientPlayerInventoryEvent}
 */
on(eventName: "clientPlayerInventory", handler: (clientPlayerInventoryEvent: ClientPlayerInventoryEvent) => void): void;
/**
 * Fires when the client is shutting down.
 * @see {@link ClientShutdownEvent}
 */
on(eventName: "clientShutdown", handler: (clientShutdownEvent: ClientShutdownEvent) => void): void;
/**
 * Fires once when the client has started.
 * @see {@link ClientStartEvent}
 */
on(eventName: "clientStart", handler: (clientStartEvent: ClientStartEvent) => void): void;
/**
 * @see {@link ClosedCaptionsEvent}
 */
on(eventName: "closedCaptions", handler: (closedCaptionsEvent: ClosedCaptionsEvent) => void): void;
/**
 * Fires when the HUD components are updated, exposing the updated component list.
 * @see {@link ComponentsUpdateEvent}
 */
on(eventName: "componentsUpdate", handler: (componentsUpdateEvent: ComponentsUpdateEvent) => void): void;
/**
 * Fires when the local player dies.
 * @see {@link DeathEvent}
 */
on(eventName: "death", handler: (deathEvent: DeathEvent) => void): void;
/**
 * Fires when the client disconnects from a server.
 * @see {@link DisconnectEvent}
 */
on(eventName: "disconnect", handler: (disconnectEvent: DisconnectEvent) => void): void;
/**
 * Sometimes, modules might want to contribute something to the glow framebuffer. They can hook this event
 * @see {@link DrawOutlinesEvent}
 */
on(eventName: "drawOutlines", handler: (drawOutlinesEvent: DrawOutlinesEvent) => void): void;
/**
 * Fires when an entity's equipment changes in a slot, exposing the entity, the equipment slot and the item.
 * @see {@link EntityEquipmentChangeEvent}
 */
on(eventName: "entityEquipmentChange", handler: (entityEquipmentChangeEvent: EntityEquipmentChangeEvent) => void): void;
/**
 * Fires when a living entity's health changes, exposing the entity and its old, new and max health.
 * @see {@link EntityHealthUpdateEvent}
 */
on(eventName: "entityHealthUpdate", handler: (entityHealthUpdateEvent: EntityHealthUpdateEvent) => void): void;
/**
 * Fires when an entity's hitbox margin (used for hit detection) is adjusted, exposing the entity and the margin.
 * @see {@link EntityMarginEvent}
 */
on(eventName: "entityMargin", handler: (entityMarginEvent: EntityMarginEvent) => void): void;
/**
 * Fires when the player is pushed by a fluid current. Cancellable.
 * @see {@link FluidPushEvent}
 */
on(eventName: "fluidPush", handler: (fluidPushEvent: FluidPushEvent) => void): void;
/**
 * Fires when the measured frame rate changes, exposing the new FPS.
 * @see {@link FpsChangeEvent}
 */
on(eventName: "fps", handler: (fpsEvent: FpsChangeEvent) => void): void;
/**
 * Fires when the frame-rate limit is applied, exposing the limit.
 * @see {@link FpsLimitEvent}
 */
on(eventName: "fpsLimit", handler: (fpsLimitEvent: FpsLimitEvent) => void): void;
/**
 * Fires when the render framebuffer is resized, exposing the new width and height.
 * @see {@link FramebufferResizeEvent}
 */
on(eventName: "frameBufferResize", handler: (frameBufferResizeEvent: FramebufferResizeEvent) => void): void;
/**
 * Fires when the player's game mode changes, exposing the new game mode.
 * @see {@link GameModeChangeEvent}
 */
on(eventName: "gameModeChange", handler: (gameModeChangeEvent: GameModeChangeEvent) => void): void;
/**
 * Fires at the start of the main render frame.
 * @see {@link GameRenderEvent}
 */
on(eventName: "gameRender", handler: (gameRenderEvent: GameRenderEvent) => void): void;
/**
 * We can use this event to populate the render task queue with tasks that should be
 * @see {@link GameRenderTaskQueueEvent}
 */
on(eventName: "gameRenderTaskQueue", handler: (gameRenderTaskQueueEvent: GameRenderTaskQueueEvent) => void): void;
/**
 * Fires on every client game tick.
 * @see {@link GameTickEvent}
 */
on(eventName: "gameTick", handler: (gameTickEvent: GameTickEvent) => void): void;
/**
 * Fires when the player's health, hunger or saturation changes, exposing the new and previous values.
 * @see {@link HealthUpdateEvent}
 */
on(eventName: "healthUpdate", handler: (healthUpdateEvent: HealthUpdateEvent) => void): void;
/**
 * Fires while the client's input is handled each tick.
 * @see {@link InputHandleEvent}
 */
on(eventName: "inputHandle", handler: (inputHandleEvent: InputHandleEvent) => void): void;
/**
 * Fires when an item's lore (tooltip lines) is queried, exposing the item stack and the mutable lore list.
 * @see {@link ItemLoreQueryEvent}
 */
on(eventName: "itemLoreQuery", handler: (itemLoreQueryEvent: ItemLoreQueryEvent) => void): void;
/**
 * A raw keyboard key press or release, reported with the key and the action code.
 * @see {@link KeyEvent}
 */
on(eventName: "key", handler: (keyEvent: KeyEvent) => void): void;
/**
 * Fires when the client's keybind configuration changes.
 * @see {@link KeybindChangeEvent}
 */
on(eventName: "keybindChange", handler: (keybindChangeEvent: KeybindChangeEvent) => void): void;
/**
 * Reports whether a given key binding is currently pressed, exposing the key binding and the pressed state.
 * @see {@link KeybindIsPressedEvent}
 */
on(eventName: "keybindIsPressed", handler: (keybindIsPressedEvent: KeybindIsPressedEvent) => void): void;
/**
 * A translated character (Unicode code point) input event, e.g. for typing into text fields.
 * @see {@link KeyboardCharEvent}
 */
on(eventName: "keyboardChar", handler: (keyboardCharEvent: KeyboardCharEvent) => void): void;
/**
 * A keyboard key event carrying the key, key/scan codes, GLFW action, modifier flags and the active screen (if any).
 * @see {@link KeyboardKeyEvent}
 */
on(eventName: "keyboardKey", handler: (keyboardKeyEvent: KeyboardKeyEvent) => void): void;
/**
 * Fires when a module is activated, exposing the module name.
 * @see {@link ModuleActivationEvent}
 */
on(eventName: "moduleActivation", handler: (moduleActivationEvent: ModuleActivationEvent) => void): void;
/**
 * Fires when a module is enabled or disabled, exposing the module name and its new enabled state.
 * @see {@link ModuleToggleEvent}
 */
on(eventName: "moduleToggle", handler: (moduleToggleEvent: ModuleToggleEvent) => void): void;
/**
 * A mouse button press or release, with the button, GLFW action, modifier flags and the active screen (if any).
 * @see {@link MouseButtonEvent}
 */
on(eventName: "mouseButton", handler: (mouseButtonEvent: MouseButtonEvent) => void): void;
/**
 * The current mouse cursor position, exposing its x and y coordinates.
 * @see {@link MouseCursorEvent}
 */
on(eventName: "mouseCursor", handler: (mouseCursorEvent: MouseCursorEvent) => void): void;
/**
 * Camera rotation derived from raw mouse-movement deltas. Cancellable - cancelling suppresses the look rotation.
 * @see {@link MouseRotationEvent}
 */
on(eventName: "mouseRotation", handler: (mouseRotationEvent: MouseRotationEvent) => void): void;
/**
 * A mouse wheel scroll, reported as horizontal and vertical deltas.
 * @see {@link MouseScrollEvent}
 */
on(eventName: "mouseScroll", handler: (mouseScrollEvent: MouseScrollEvent) => void): void;
/**
 * A mouse scroll routed to hotbar slot selection, exposing the scroll speed. Cancellable.
 * @see {@link MouseScrollInHotbarEvent}
 */
on(eventName: "mouseScrollInHotbar", handler: (mouseScrollInHotbarEvent: MouseScrollInHotbarEvent) => void): void;
/**
 * Exposes the player's per-tick movement input (directional input plus the jump and sneak flags).
 * @see {@link MovementInputEvent}
 */
on(eventName: "movementInput", handler: (movementInputEvent: MovementInputEvent) => void): void;
/**
 * Fires when the client shows a notification, exposing its title, message and severity.
 * @see {@link NotificationEvent}
 */
on(eventName: "notification", handler: (notificationEvent: NotificationEvent) => void): void;
/**
 * Fires when an action-bar/overlay message is displayed, exposing the text and whether it is tinted.
 * @see {@link OverlayMessageEvent}
 */
on(eventName: "overlayMessage", handler: (overlayMessageEvent: OverlayMessageEvent) => void): void;
/**
 * Fires while the in-game overlay/HUD is rendered (after the world, before screens), exposing the draw context and tick delta.
 * @see {@link OverlayRenderEvent}
 */
on(eventName: "overlayRender", handler: (overlayRenderEvent: OverlayRenderEvent) => void): void;
/**
 * Fires for every packet sent or received, exposing the transfer origin and the packet. Cancellable - cancelling drops the packet.
 * @see {@link PacketEvent}
 */
on(eventName: "packet", handler: (packetEvent: PacketEvent) => void): void;
/**
 * Fires while the camera perspective is updated.
 * @see {@link PerspectiveEvent}
 */
on(eventName: "perspective", handler: (perspectiveEvent: PerspectiveEvent) => void): void;
/**
 * Fires when a network channel pipeline is initialized, exposing the pipeline and whether the connection is local.
 * @see {@link PipelineEvent}
 */
on(eventName: "pipeline", handler: (pipelineEvent: PipelineEvent) => void): void;
/**
 * Fires immediately after a jump's motion has been applied.
 * @see {@link PlayerAfterJumpEvent}
 */
on(eventName: "playerAfterJump", handler: (playerAfterJumpEvent: PlayerAfterJumpEvent) => void): void;
/**
 * Fires during a player fluid-collision check, exposing the fluid tag. Cancellable.
 * @see {@link PlayerFluidCollisionCheckEvent}
 */
on(eventName: "playerFluidCollisionCheck", handler: (playerFluidCollisionCheckEvent: PlayerFluidCollisionCheckEvent) => void): void;
/**
 * Fires after an item interaction completes, exposing the hand used and the interaction result.
 * @see {@link PlayerInteractedItemEvent}
 */
on(eventName: "playerInteractedItem", handler: (playerInteractedItemEvent: PlayerInteractedItemEvent) => void): void;
/**
 * Warning: UseHotbarSlotOrOffHand won't stimulate this event
 * @see {@link PlayerInteractItemEvent}
 */
on(eventName: "playerInteractItem", handler: (playerInteractItemEvent: PlayerInteractItemEvent) => void): void;
/**
 * Fires when the player initiates a jump, exposing the (mutable) jump motion and yaw. Cancellable - cancelling prevents the jump.
 * @see {@link PlayerJumpEvent}
 */
on(eventName: "playerJump", handler: (playerJumpEvent: PlayerJumpEvent) => void): void;
/**
 * Fires as the player's motion is applied, exposing the mover type and the (mutable) movement vector, so handlers can alter movement.
 * @see {@link PlayerMoveEvent}
 */
on(eventName: "playerMove", handler: (playerMoveEvent: PlayerMoveEvent) => void): void;
/**
 * Fires during the player's movement-tick phase, as movement is applied.
 * @see {@link PlayerMovementTickEvent}
 */
on(eventName: "playerMovementTick", handler: (playerMovementTickEvent: PlayerMovementTickEvent) => void): void;
/**
 * Fires around the movement-packet sync (PRE/POST phase), exposing the position and on-ground flag reported to the server. Cancellable.
 * @see {@link PlayerNetworkMovementTickEvent}
 */
on(eventName: "playerNetworkMovementTick", handler: (playerNetworkMovementTickEvent: PlayerNetworkMovementTickEvent) => void): void;
/**
 * Fires each client player tick, after movement has been processed.
 * @see {@link PlayerPostTickEvent}
 */
on(eventName: "playerPostTick", handler: (playerPostTickEvent: PlayerPostTickEvent) => void): void;
/**
 * Fires when the player is being pushed out of a block collision. Cancellable.
 * @see {@link PlayerPushOutEvent}
 */
on(eventName: "playerPushOut", handler: (playerPushOutEvent: PlayerPushOutEvent) => void): void;
/**
 * Fires to determine whether safe-walk (ledge edge protection) is active.
 * @see {@link PlayerSafeWalkEvent}
 */
on(eventName: "playerSafeWalk", handler: (playerSafeWalkEvent: PlayerSafeWalkEvent) => void): void;
/**
 * Fires when the player's sneak movement multiplier is adjusted, exposing the multiplier.
 * @see {@link PlayerSneakMultiplier}
 */
on(eventName: "playerSneakMultiplier", handler: (playerSneakMultiplierEvent: PlayerSneakMultiplier) => void): void;
/**
 * Fires when the player's auto-step height is calculated, exposing the step height.
 * @see {@link PlayerStepEvent}
 */
on(eventName: "playerStep", handler: (playerStepEvent: PlayerStepEvent) => void): void;
/**
 * Fires after a successful step-up, exposing the attempted and adjusted movement vectors.
 * @see {@link PlayerStepSuccessEvent}
 */
on(eventName: "playerStepSuccess", handler: (playerStepSuccessEvent: PlayerStepSuccessEvent) => void): void;
/**
 * Fires during strafe velocity calculation, exposing the movement input, speed, yaw and the resulting velocity.
 * @see {@link PlayerVelocityStrafe}
 */
on(eventName: "playerStrafe", handler: (playerStrafeEvent: PlayerVelocityStrafe) => void): void;
/**
 * Fires during stride-force adjustment, exposing the stride force.
 * @see {@link PlayerStrideEvent}
 */
on(eventName: "playerStride", handler: (playerStrideEvent: PlayerStrideEvent) => void): void;
/**
 * Fires each client player tick, before movement is processed. Cancellable - cancelling skips the player's tick.
 * @see {@link PlayerTickEvent}
 */
on(eventName: "playerTick", handler: (playerTickEvent: PlayerTickEvent) => void): void;
/**
 * Fires when the player's movement multiplier while using an item is adjusted, exposing the forward and sideways factors.
 * @see {@link PlayerUseMultiplier}
 */
on(eventName: "playerUseMultiplier", handler: (playerUseMultiplierEvent: PlayerUseMultiplier) => void): void;
/**
 * Reports the result of a proxy check, exposing the proxy or an error.
 * @see {@link ProxyCheckResultEvent}
 */
on(eventName: "proxyCheckResult", handler: (proxyCheckResultEvent: ProxyCheckResultEvent) => void): void;
/**
 * Fires when a packet is queued or released by the Blink module, exposing the packet and its transfer origin.
 * @see {@link BlinkPacketEvent}
 */
on(eventName: "queuePacket", handler: (queuePacketEvent: BlinkPacketEvent) => void): void;
/**
 * Fires to request a refresh of the ArrayList HUD element.
 * @see {@link RefreshArrayListEvent}
 */
on(eventName: "refreshArrayList", handler: (refreshArrayListEvent: RefreshArrayListEvent) => void): void;
/**
 * Fires when the game's resources have been reloaded.
 * @see {@link ResourceReloadEvent}
 */
on(eventName: "resourceReload", handler: (resourceReloadEvent: ResourceReloadEvent) => void): void;
/**
 * Fires when the player's rotation is updated.
 * @see {@link RotationUpdateEvent}
 */
on(eventName: "rotationUpdate", handler: (rotationUpdateEvent: RotationUpdateEvent) => void): void;
/**
 * Fires when the GUI scale factor changes, exposing the new scale factor.
 * @see {@link ScaleFactorChangeEvent}
 */
on(eventName: "scaleFactorChange", handler: (scaleFactorChangeEvent: ScaleFactorChangeEvent) => void): void;
/**
 * Fires to schedule inventory actions, exposing the action chain list.
 * @see {@link ScheduleInventoryActionEvent}
 */
on(eventName: "scheduleInventoryAction", handler: (scheduleInventoryActionEvent: ScheduleInventoryActionEvent) => void): void;
/**
 * Fires when a GUI screen is opened or closed, exposing the screen (null when closing). Cancellable.
 * @see {@link ScreenEvent}
 */
on(eventName: "screen", handler: (screenEvent: ScreenEvent) => void): void;
/**
 * Fires while the current GUI screen is rendered (the topmost layer), exposing the draw context and partial-tick fraction.
 * @see {@link ScreenRenderEvent}
 */
on(eventName: "screenRender", handler: (screenRenderEvent: ScreenRenderEvent) => void): void;
/**
 * Fires when a hotbar slot is selected silently, exposing the requester and the target slot. Cancellable.
 * @see {@link SelectHotbarSlotSilentlyEvent}
 */
on(eventName: "selectHotbarSlotSilently", handler: (selectHotbarSlotSilentlyEvent: SelectHotbarSlotSilentlyEvent) => void): void;
/**
 * Fires when the client is connecting to a server, exposing the connect screen, address and server info. Cancellable.
 * @see {@link ServerConnectEvent}
 */
on(eventName: "serverConnect", handler: (serverConnectEvent: ServerConnectEvent) => void): void;
/**
 * Fires when a server is pinged in the multiplayer list, exposing the server data.
 * @see {@link ServerPingedEvent}
 */
on(eventName: "serverPinged", handler: (serverPingedEvent: ServerPingedEvent) => void): void;
/**
 * All events which are related to the minecraft client
 * @see {@link SessionEvent}
 */
on(eventName: "session", handler: (sessionEvent: SessionEvent) => void): void;
/**
 * Fires when the space-separated-names setting changes, exposing the new value.
 * @see {@link SpaceSeperatedNamesChangeEvent}
 */
on(eventName: "spaceSeperatedNamesChange", handler: (spaceSeperatedNamesChangeEvent: SpaceSeperatedNamesChangeEvent) => void): void;
/**
 * Fires when the player's sprint state is updated, exposing the directional input, the sprint flag and the source of the update.
 * @see {@link SprintEvent}
 */
on(eventName: "sprint", handler: (sprintEvent: SprintEvent) => void): void;
/**
 * @see {@link TitleEvent$Subtitle}
 */
on(eventName: "subtitle", handler: (subtitleEvent: TitleEvent$Subtitle) => void): void;
/**
 * Fires to classify an entity for targeting (target / friend / ignored, etc.), exposing the entity and its mutable targeting info.
 * @see {@link TagEntityEvent}
 */
on(eventName: "tagEntityEvent", handler: (tagEntityEventEvent: TagEntityEvent) => void): void;
/**
 * Fires when the current combat target changes, exposing the new target (null when cleared).
 * @see {@link TargetChangeEvent}
 */
on(eventName: "targetChange", handler: (targetChangeEvent: TargetChangeEvent) => void): void;
/**
 * Fires when a theme color changes, exposing the theme id, the color name and the new value.
 * @see {@link ThemeColorChangeEvent}
 */
on(eventName: "themeColorChange", handler: (themeColorChangeEvent: ThemeColorChangeEvent) => void): void;
/**
 * Fires during the packet-processing phase of the client tick.
 * @see {@link TickPacketProcessEvent}
 */
on(eventName: "tickPacketProcess", handler: (tickPacketProcessEvent: TickPacketProcessEvent) => void): void;
/**
 * @see {@link TitleEvent$Title}
 */
on(eventName: "title", handler: (titleEvent: TitleEvent$Title) => void): void;
/**
 * @see {@link TitleEvent$Fade}
 */
on(eventName: "titleFade", handler: (titleFadeEvent: TitleEvent$Fade) => void): void;
/**
 * Fires when the item-use cooldown is updated, exposing the cooldown in ticks.
 * @see {@link UseCooldownEvent}
 */
on(eventName: "useCooldown", handler: (useCooldownEvent: UseCooldownEvent) => void): void;
/**
 * Fires when the user logs in to their account.
 * @see {@link UserLoggedInEvent}
 */
on(eventName: "userLoggedIn", handler: (userLoggedInEvent: UserLoggedInEvent) => void): void;
/**
 * Fires when the user logs out of their account.
 * @see {@link UserLoggedOutEvent}
 */
on(eventName: "userLoggedOut", handler: (userLoggedOutEvent: UserLoggedOutEvent) => void): void;
/**
 * Fires when a configuration value changes, exposing the changed value.
 * @see {@link ValueChangedEvent}
 */
on(eventName: "valueChanged", handler: (valueChangedEvent: ValueChangedEvent) => void): void;
/**
 * Fires when a virtual (custom) screen is opened or closed, exposing the screen type, name and action.
 * @see {@link VirtualScreenEvent}
 */
on(eventName: "virtualScreen", handler: (virtualScreenEvent: VirtualScreenEvent) => void): void;
/**
 * Fires when the game window is resized, exposing the new width and height.
 * @see {@link WindowResizeEvent}
 */
on(eventName: "windowResize", handler: (windowResizeEvent: WindowResizeEvent) => void): void;
/**
 * Fires when the client world is loaded or unloaded; the world is null when leaving a world.
 * @see {@link WorldChangeEvent}
 */
on(eventName: "worldChange", handler: (worldChangeEvent: WorldChangeEvent) => void): void;
/**
 * Fires when an entity is removed from the world, exposing the entity and the removal reason.
 * @see {@link WorldEntityRemoveEvent}
 */
on(eventName: "worldEntityRemove", handler: (worldEntityRemoveEvent: WorldEntityRemoveEvent) => void): void;
/**
 * Fired before vanilla collects level features into its [SubmitNodeStorage].
 * @see {@link WorldFeatureSubmitEvent}
 */
on(eventName: "worldFeatureSubmit", handler: (worldFeatureSubmitEvent: WorldFeatureSubmitEvent) => void): void;
/**
 * Fires while the world is rendered, exposing the pose stack, camera and partial-tick fraction - for depth-correct 3D rendering.
 * @see {@link WorldRenderEvent}
 */
on(eventName: "worldRender", handler: (worldRenderEvent: WorldRenderEvent) => void): void;



    }
}
