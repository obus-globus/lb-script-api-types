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
import type { WorldRenderEvent } from '../types/net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'




// Augment ScriptModule with specific event handler overloads
declare module '../types/net/ccbluex/liquidbounce/script/bindings/features/ScriptModule' {
    interface ScriptModule {
        on(eventName: "enable" | "disable", handler: () => void): void;

        // on events with specific event types
        
// on events
/**
 * @see {@link AccountManagerAdditionResultEvent}
 */
on(eventName: "accountManagerAddition", handler: (accountManagerAdditionEvent: AccountManagerAdditionResultEvent) => void): void;
/**
 * @see {@link AccountManagerLoginResultEvent}
 */
on(eventName: "accountManagerLogin", handler: (accountManagerLoginEvent: AccountManagerLoginResultEvent) => void): void;
/**
 * @see {@link AccountManagerMessageEvent}
 */
on(eventName: "accountManagerMessage", handler: (accountManagerMessageEvent: AccountManagerMessageEvent) => void): void;
/**
 * @see {@link AccountManagerRemovalResultEvent}
 */
on(eventName: "accountManagerRemoval", handler: (accountManagerRemovalEvent: AccountManagerRemovalResultEvent) => void): void;
/**
 * @see {@link AllowAutoJumpEvent}
 */
on(eventName: "allowAutoJump", handler: (allowAutoJumpEvent: AllowAutoJumpEvent) => void): void;
/**
 * @see {@link AttackEntityEvent}
 */
on(eventName: "attack", handler: (attackEvent: AttackEntityEvent) => void): void;
/**
 * @see {@link BedStateChangeEvent}
 */
on(eventName: "bedStateChange", handler: (bedStateChangeEvent: BedStateChangeEvent) => void): void;
/**
 * @see {@link BlockAttackEvent}
 */
on(eventName: "blockAttack", handler: (blockAttackEvent: BlockAttackEvent) => void): void;
/**
 * @see {@link BlockBreakingProgressEvent}
 */
on(eventName: "blockBreakingProgress", handler: (blockBreakingProgressEvent: BlockBreakingProgressEvent) => void): void;
/**
 * @see {@link BlockChangeEvent}
 */
on(eventName: "blockChange", handler: (blockChangeEvent: BlockChangeEvent) => void): void;
/**
 * @see {@link BlockCountChangeEvent}
 */
on(eventName: "blockCountChange", handler: (blockCountChangeEvent: BlockCountChangeEvent) => void): void;
/**
 * @see {@link BlockShapeEvent}
 */
on(eventName: "blockShape", handler: (blockShapeEvent: BlockShapeEvent) => void): void;
/**
 * @see {@link BlockSlipperinessMultiplierEvent}
 */
on(eventName: "blockSlipperinessMultiplier", handler: (blockSlipperinessMultiplierEvent: BlockSlipperinessMultiplierEvent) => void): void;
/**
 * @see {@link BlockVelocityMultiplierEvent}
 */
on(eventName: "blockVelocityMultiplier", handler: (blockVelocityMultiplierEvent: BlockVelocityMultiplierEvent) => void): void;
/**
 * @see {@link BrowserReadyEvent}
 */
on(eventName: "browserReady", handler: (browserReadyEvent: BrowserReadyEvent) => void): void;
/**
 * @see {@link BrowserUrlChangeEvent}
 */
on(eventName: "browserUrlChange", handler: (browserUrlChangeEvent: BrowserUrlChangeEvent) => void): void;
/**
 * @see {@link CancelBlockBreakingEvent}
 */
on(eventName: "cancelBlockBreaking", handler: (cancelBlockBreakingEvent: CancelBlockBreakingEvent) => void): void;
/**
 * @see {@link ChatReceiveEvent}
 */
on(eventName: "chatReceive", handler: (chatReceiveEvent: ChatReceiveEvent) => void): void;
/**
 * @see {@link ChatSendEvent}
 */
on(eventName: "chatSend", handler: (chatSendEvent: ChatSendEvent) => void): void;
/**
 * @see {@link ChunkDeltaUpdateEvent}
 */
on(eventName: "chunkDeltaUpdate", handler: (chunkDeltaUpdateEvent: ChunkDeltaUpdateEvent) => void): void;
/**
 * @see {@link ChunkLoadEvent}
 */
on(eventName: "chunkLoad", handler: (chunkLoadEvent: ChunkLoadEvent) => void): void;
/**
 * @see {@link ChunkUnloadEvent}
 */
on(eventName: "chunkUnload", handler: (chunkUnloadEvent: ChunkUnloadEvent) => void): void;
/**
 * @see {@link TitleEvent$Clear}
 */
on(eventName: "clearTitle", handler: (clearTitleEvent: TitleEvent$Clear) => void): void;
/**
 * @see {@link ClickGuiScaleChangeEvent}
 */
on(eventName: "clickGuiScaleChange", handler: (clickGuiScaleChangeEvent: ClickGuiScaleChangeEvent) => void): void;
/**
 * @see {@link ClickGuiValueChangeEvent}
 */
on(eventName: "clickGuiValueChange", handler: (clickGuiValueChangeEvent: ClickGuiValueChangeEvent) => void): void;
/**
 * @see {@link ClientChatErrorEvent}
 */
on(eventName: "clientChatError", handler: (clientChatErrorEvent: ClientChatErrorEvent) => void): void;
/**
 * @see {@link ClientChatJwtTokenEvent}
 */
on(eventName: "clientChatJwtToken", handler: (clientChatJwtTokenEvent: ClientChatJwtTokenEvent) => void): void;
/**
 * @see {@link ClientChatMessageEvent}
 */
on(eventName: "clientChatMessage", handler: (clientChatMessageEvent: ClientChatMessageEvent) => void): void;
/**
 * @see {@link ClientChatStateChange}
 */
on(eventName: "clientChatStateChange", handler: (clientChatStateChangeEvent: ClientChatStateChange) => void): void;
/**
 * @see {@link ClientLanguageChangedEvent}
 */
on(eventName: "clientLanguageChanged", handler: (clientLanguageChangedEvent: ClientLanguageChangedEvent) => void): void;
/**
 * @see {@link ClientPlayerDataEvent}
 */
on(eventName: "clientPlayerData", handler: (clientPlayerDataEvent: ClientPlayerDataEvent) => void): void;
/**
 * @see {@link ClientPlayerEffectEvent}
 */
on(eventName: "clientPlayerEffect", handler: (clientPlayerEffectEvent: ClientPlayerEffectEvent) => void): void;
/**
 * @see {@link ClientPlayerInventoryEvent}
 */
on(eventName: "clientPlayerInventory", handler: (clientPlayerInventoryEvent: ClientPlayerInventoryEvent) => void): void;
/**
 * @see {@link ClientShutdownEvent}
 */
on(eventName: "clientShutdown", handler: (clientShutdownEvent: ClientShutdownEvent) => void): void;
/**
 * @see {@link ClientStartEvent}
 */
on(eventName: "clientStart", handler: (clientStartEvent: ClientStartEvent) => void): void;
/**
 * @see {@link ComponentsUpdateEvent}
 */
on(eventName: "componentsUpdate", handler: (componentsUpdateEvent: ComponentsUpdateEvent) => void): void;
/**
 * @see {@link DeathEvent}
 */
on(eventName: "death", handler: (deathEvent: DeathEvent) => void): void;
/**
 * @see {@link DisconnectEvent}
 */
on(eventName: "disconnect", handler: (disconnectEvent: DisconnectEvent) => void): void;
/**
 * Sometimes, modules might want to contribute something to the glow framebuffer. They can hook this event
 * @see {@link DrawOutlinesEvent}
 */
on(eventName: "drawOutlines", handler: (drawOutlinesEvent: DrawOutlinesEvent) => void): void;
/**
 * @see {@link EntityEquipmentChangeEvent}
 */
on(eventName: "entityEquipmentChange", handler: (entityEquipmentChangeEvent: EntityEquipmentChangeEvent) => void): void;
/**
 * @see {@link EntityHealthUpdateEvent}
 */
on(eventName: "entityHealthUpdate", handler: (entityHealthUpdateEvent: EntityHealthUpdateEvent) => void): void;
/**
 * @see {@link EntityMarginEvent}
 */
on(eventName: "entityMargin", handler: (entityMarginEvent: EntityMarginEvent) => void): void;
/**
 * @see {@link FluidPushEvent}
 */
on(eventName: "fluidPush", handler: (fluidPushEvent: FluidPushEvent) => void): void;
/**
 * @see {@link FpsChangeEvent}
 */
on(eventName: "fps", handler: (fpsEvent: FpsChangeEvent) => void): void;
/**
 * @see {@link FpsLimitEvent}
 */
on(eventName: "fpsLimit", handler: (fpsLimitEvent: FpsLimitEvent) => void): void;
/**
 * @see {@link FramebufferResizeEvent}
 */
on(eventName: "frameBufferResize", handler: (frameBufferResizeEvent: FramebufferResizeEvent) => void): void;
/**
 * @see {@link GameModeChangeEvent}
 */
on(eventName: "gameModeChange", handler: (gameModeChangeEvent: GameModeChangeEvent) => void): void;
/**
 * @see {@link GameRenderEvent}
 */
on(eventName: "gameRender", handler: (gameRenderEvent: GameRenderEvent) => void): void;
/**
 * We can use this event to populate the render task queue with tasks that should be
 * @see {@link GameRenderTaskQueueEvent}
 */
on(eventName: "gameRenderTaskQueue", handler: (gameRenderTaskQueueEvent: GameRenderTaskQueueEvent) => void): void;
/**
 * @see {@link GameTickEvent}
 */
on(eventName: "gameTick", handler: (gameTickEvent: GameTickEvent) => void): void;
/**
 * @see {@link HealthUpdateEvent}
 */
on(eventName: "healthUpdate", handler: (healthUpdateEvent: HealthUpdateEvent) => void): void;
/**
 * @see {@link InputHandleEvent}
 */
on(eventName: "inputHandle", handler: (inputHandleEvent: InputHandleEvent) => void): void;
/**
 * @see {@link ItemLoreQueryEvent}
 */
on(eventName: "itemLoreQuery", handler: (itemLoreQueryEvent: ItemLoreQueryEvent) => void): void;
/**
 * @see {@link KeyEvent}
 */
on(eventName: "key", handler: (keyEvent: KeyEvent) => void): void;
/**
 * @see {@link KeybindChangeEvent}
 */
on(eventName: "keybindChange", handler: (keybindChangeEvent: KeybindChangeEvent) => void): void;
/**
 * @see {@link KeybindIsPressedEvent}
 */
on(eventName: "keybindIsPressed", handler: (keybindIsPressedEvent: KeybindIsPressedEvent) => void): void;
/**
 * @see {@link KeyboardCharEvent}
 */
on(eventName: "keyboardChar", handler: (keyboardCharEvent: KeyboardCharEvent) => void): void;
/**
 * @see {@link KeyboardKeyEvent}
 */
on(eventName: "keyboardKey", handler: (keyboardKeyEvent: KeyboardKeyEvent) => void): void;
/**
 * @see {@link ModuleActivationEvent}
 */
on(eventName: "moduleActivation", handler: (moduleActivationEvent: ModuleActivationEvent) => void): void;
/**
 * @see {@link ModuleToggleEvent}
 */
on(eventName: "moduleToggle", handler: (moduleToggleEvent: ModuleToggleEvent) => void): void;
/**
 * @see {@link MouseButtonEvent}
 */
on(eventName: "mouseButton", handler: (mouseButtonEvent: MouseButtonEvent) => void): void;
/**
 * @see {@link MouseCursorEvent}
 */
on(eventName: "mouseCursor", handler: (mouseCursorEvent: MouseCursorEvent) => void): void;
/**
 * @see {@link MouseRotationEvent}
 */
on(eventName: "mouseRotation", handler: (mouseRotationEvent: MouseRotationEvent) => void): void;
/**
 * @see {@link MouseScrollEvent}
 */
on(eventName: "mouseScroll", handler: (mouseScrollEvent: MouseScrollEvent) => void): void;
/**
 * @see {@link MouseScrollInHotbarEvent}
 */
on(eventName: "mouseScrollInHotbar", handler: (mouseScrollInHotbarEvent: MouseScrollInHotbarEvent) => void): void;
/**
 * @see {@link MovementInputEvent}
 */
on(eventName: "movementInput", handler: (movementInputEvent: MovementInputEvent) => void): void;
/**
 * @see {@link NotificationEvent}
 */
on(eventName: "notification", handler: (notificationEvent: NotificationEvent) => void): void;
/**
 * @see {@link OverlayMessageEvent}
 */
on(eventName: "overlayMessage", handler: (overlayMessageEvent: OverlayMessageEvent) => void): void;
/**
 * @see {@link OverlayRenderEvent}
 */
on(eventName: "overlayRender", handler: (overlayRenderEvent: OverlayRenderEvent) => void): void;
/**
 * @see {@link PacketEvent}
 */
on(eventName: "packet", handler: (packetEvent: PacketEvent) => void): void;
/**
 * @see {@link PerspectiveEvent}
 */
on(eventName: "perspective", handler: (perspectiveEvent: PerspectiveEvent) => void): void;
/**
 * @see {@link PipelineEvent}
 */
on(eventName: "pipeline", handler: (pipelineEvent: PipelineEvent) => void): void;
/**
 * @see {@link PlayerAfterJumpEvent}
 */
on(eventName: "playerAfterJump", handler: (playerAfterJumpEvent: PlayerAfterJumpEvent) => void): void;
/**
 * @see {@link PlayerFluidCollisionCheckEvent}
 */
on(eventName: "playerFluidCollisionCheck", handler: (playerFluidCollisionCheckEvent: PlayerFluidCollisionCheckEvent) => void): void;
/**
 * @see {@link PlayerInteractedItemEvent}
 */
on(eventName: "playerInteractedItem", handler: (playerInteractedItemEvent: PlayerInteractedItemEvent) => void): void;
/**
 * Warning: UseHotbarSlotOrOffHand won't stimulate this event
 * @see {@link PlayerInteractItemEvent}
 */
on(eventName: "playerInteractItem", handler: (playerInteractItemEvent: PlayerInteractItemEvent) => void): void;
/**
 * @see {@link PlayerJumpEvent}
 */
on(eventName: "playerJump", handler: (playerJumpEvent: PlayerJumpEvent) => void): void;
/**
 * @see {@link PlayerMoveEvent}
 */
on(eventName: "playerMove", handler: (playerMoveEvent: PlayerMoveEvent) => void): void;
/**
 * @see {@link PlayerMovementTickEvent}
 */
on(eventName: "playerMovementTick", handler: (playerMovementTickEvent: PlayerMovementTickEvent) => void): void;
/**
 * @see {@link PlayerNetworkMovementTickEvent}
 */
on(eventName: "playerNetworkMovementTick", handler: (playerNetworkMovementTickEvent: PlayerNetworkMovementTickEvent) => void): void;
/**
 * @see {@link PlayerPostTickEvent}
 */
on(eventName: "playerPostTick", handler: (playerPostTickEvent: PlayerPostTickEvent) => void): void;
/**
 * @see {@link PlayerPushOutEvent}
 */
on(eventName: "playerPushOut", handler: (playerPushOutEvent: PlayerPushOutEvent) => void): void;
/**
 * @see {@link PlayerSafeWalkEvent}
 */
on(eventName: "playerSafeWalk", handler: (playerSafeWalkEvent: PlayerSafeWalkEvent) => void): void;
/**
 * @see {@link PlayerSneakMultiplier}
 */
on(eventName: "playerSneakMultiplier", handler: (playerSneakMultiplierEvent: PlayerSneakMultiplier) => void): void;
/**
 * @see {@link PlayerStepEvent}
 */
on(eventName: "playerStep", handler: (playerStepEvent: PlayerStepEvent) => void): void;
/**
 * @see {@link PlayerStepSuccessEvent}
 */
on(eventName: "playerStepSuccess", handler: (playerStepSuccessEvent: PlayerStepSuccessEvent) => void): void;
/**
 * @see {@link PlayerVelocityStrafe}
 */
on(eventName: "playerStrafe", handler: (playerStrafeEvent: PlayerVelocityStrafe) => void): void;
/**
 * @see {@link PlayerStrideEvent}
 */
on(eventName: "playerStride", handler: (playerStrideEvent: PlayerStrideEvent) => void): void;
/**
 * @see {@link PlayerTickEvent}
 */
on(eventName: "playerTick", handler: (playerTickEvent: PlayerTickEvent) => void): void;
/**
 * @see {@link PlayerUseMultiplier}
 */
on(eventName: "playerUseMultiplier", handler: (playerUseMultiplierEvent: PlayerUseMultiplier) => void): void;
/**
 * @see {@link ProxyCheckResultEvent}
 */
on(eventName: "proxyCheckResult", handler: (proxyCheckResultEvent: ProxyCheckResultEvent) => void): void;
/**
 * @see {@link BlinkPacketEvent}
 */
on(eventName: "queuePacket", handler: (queuePacketEvent: BlinkPacketEvent) => void): void;
/**
 * @see {@link RefreshArrayListEvent}
 */
on(eventName: "refreshArrayList", handler: (refreshArrayListEvent: RefreshArrayListEvent) => void): void;
/**
 * @see {@link ResourceReloadEvent}
 */
on(eventName: "resourceReload", handler: (resourceReloadEvent: ResourceReloadEvent) => void): void;
/**
 * @see {@link RotationUpdateEvent}
 */
on(eventName: "rotationUpdate", handler: (rotationUpdateEvent: RotationUpdateEvent) => void): void;
/**
 * @see {@link ScaleFactorChangeEvent}
 */
on(eventName: "scaleFactorChange", handler: (scaleFactorChangeEvent: ScaleFactorChangeEvent) => void): void;
/**
 * @see {@link ScheduleInventoryActionEvent}
 */
on(eventName: "scheduleInventoryAction", handler: (scheduleInventoryActionEvent: ScheduleInventoryActionEvent) => void): void;
/**
 * @see {@link ScreenEvent}
 */
on(eventName: "screen", handler: (screenEvent: ScreenEvent) => void): void;
/**
 * @see {@link ScreenRenderEvent}
 */
on(eventName: "screenRender", handler: (screenRenderEvent: ScreenRenderEvent) => void): void;
/**
 * @see {@link SelectHotbarSlotSilentlyEvent}
 */
on(eventName: "selectHotbarSlotSilently", handler: (selectHotbarSlotSilentlyEvent: SelectHotbarSlotSilentlyEvent) => void): void;
/**
 * @see {@link ServerConnectEvent}
 */
on(eventName: "serverConnect", handler: (serverConnectEvent: ServerConnectEvent) => void): void;
/**
 * @see {@link ServerPingedEvent}
 */
on(eventName: "serverPinged", handler: (serverPingedEvent: ServerPingedEvent) => void): void;
/**
 * All events which are related to the minecraft client
 * @see {@link SessionEvent}
 */
on(eventName: "session", handler: (sessionEvent: SessionEvent) => void): void;
/**
 * @see {@link SpaceSeperatedNamesChangeEvent}
 */
on(eventName: "spaceSeperatedNamesChange", handler: (spaceSeperatedNamesChangeEvent: SpaceSeperatedNamesChangeEvent) => void): void;
/**
 * @see {@link SprintEvent}
 */
on(eventName: "sprint", handler: (sprintEvent: SprintEvent) => void): void;
/**
 * @see {@link TitleEvent$Subtitle}
 */
on(eventName: "subtitle", handler: (subtitleEvent: TitleEvent$Subtitle) => void): void;
/**
 * @see {@link TagEntityEvent}
 */
on(eventName: "tagEntityEvent", handler: (tagEntityEventEvent: TagEntityEvent) => void): void;
/**
 * @see {@link TargetChangeEvent}
 */
on(eventName: "targetChange", handler: (targetChangeEvent: TargetChangeEvent) => void): void;
/**
 * @see {@link ThemeColorChangeEvent}
 */
on(eventName: "themeColorChange", handler: (themeColorChangeEvent: ThemeColorChangeEvent) => void): void;
/**
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
 * @see {@link UseCooldownEvent}
 */
on(eventName: "useCooldown", handler: (useCooldownEvent: UseCooldownEvent) => void): void;
/**
 * @see {@link UserLoggedInEvent}
 */
on(eventName: "userLoggedIn", handler: (userLoggedInEvent: UserLoggedInEvent) => void): void;
/**
 * @see {@link UserLoggedOutEvent}
 */
on(eventName: "userLoggedOut", handler: (userLoggedOutEvent: UserLoggedOutEvent) => void): void;
/**
 * @see {@link ValueChangedEvent}
 */
on(eventName: "valueChanged", handler: (valueChangedEvent: ValueChangedEvent) => void): void;
/**
 * @see {@link VirtualScreenEvent}
 */
on(eventName: "virtualScreen", handler: (virtualScreenEvent: VirtualScreenEvent) => void): void;
/**
 * @see {@link WindowResizeEvent}
 */
on(eventName: "windowResize", handler: (windowResizeEvent: WindowResizeEvent) => void): void;
/**
 * @see {@link WorldChangeEvent}
 */
on(eventName: "worldChange", handler: (worldChangeEvent: WorldChangeEvent) => void): void;
/**
 * @see {@link WorldEntityRemoveEvent}
 */
on(eventName: "worldEntityRemove", handler: (worldEntityRemoveEvent: WorldEntityRemoveEvent) => void): void;
/**
 * @see {@link WorldRenderEvent}
 */
on(eventName: "worldRender", handler: (worldRenderEvent: WorldRenderEvent) => void): void;



    }
}
