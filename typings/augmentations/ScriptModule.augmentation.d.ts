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
import type { Clear } from '../types/net/ccbluex/liquidbounce/event/events/TitleEvent/Clear.d.ts'
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
import type { Subtitle } from '../types/net/ccbluex/liquidbounce/event/events/TitleEvent/Subtitle.d.ts'
import type { TagEntityEvent } from '../types/net/ccbluex/liquidbounce/event/events/TagEntityEvent.d.ts'
import type { TargetChangeEvent } from '../types/net/ccbluex/liquidbounce/event/events/TargetChangeEvent.d.ts'
import type { ThemeColorChangeEvent } from '../types/net/ccbluex/liquidbounce/event/events/ThemeColorChangeEvent.d.ts'
import type { TickPacketProcessEvent } from '../types/net/ccbluex/liquidbounce/event/events/TickPacketProcessEvent.d.ts'
import type { Title } from '../types/net/ccbluex/liquidbounce/event/events/TitleEvent/Title.d.ts'
import type { Fade } from '../types/net/ccbluex/liquidbounce/event/events/TitleEvent/Fade.d.ts'
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
on(eventName: "accountManagerAddition", handler: (accountManagerAdditionEvent: AccountManagerAdditionResultEvent) => void): void;
on(eventName: "accountManagerLogin", handler: (accountManagerLoginEvent: AccountManagerLoginResultEvent) => void): void;
on(eventName: "accountManagerMessage", handler: (accountManagerMessageEvent: AccountManagerMessageEvent) => void): void;
on(eventName: "accountManagerRemoval", handler: (accountManagerRemovalEvent: AccountManagerRemovalResultEvent) => void): void;
on(eventName: "allowAutoJump", handler: (allowAutoJumpEvent: AllowAutoJumpEvent) => void): void;
on(eventName: "attack", handler: (attackEvent: AttackEntityEvent) => void): void;
on(eventName: "bedStateChange", handler: (bedStateChangeEvent: BedStateChangeEvent) => void): void;
on(eventName: "blockAttack", handler: (blockAttackEvent: BlockAttackEvent) => void): void;
on(eventName: "blockBreakingProgress", handler: (blockBreakingProgressEvent: BlockBreakingProgressEvent) => void): void;
on(eventName: "blockChange", handler: (blockChangeEvent: BlockChangeEvent) => void): void;
on(eventName: "blockCountChange", handler: (blockCountChangeEvent: BlockCountChangeEvent) => void): void;
on(eventName: "blockShape", handler: (blockShapeEvent: BlockShapeEvent) => void): void;
on(eventName: "blockSlipperinessMultiplier", handler: (blockSlipperinessMultiplierEvent: BlockSlipperinessMultiplierEvent) => void): void;
on(eventName: "blockVelocityMultiplier", handler: (blockVelocityMultiplierEvent: BlockVelocityMultiplierEvent) => void): void;
on(eventName: "browserReady", handler: (browserReadyEvent: BrowserReadyEvent) => void): void;
on(eventName: "browserUrlChange", handler: (browserUrlChangeEvent: BrowserUrlChangeEvent) => void): void;
on(eventName: "cancelBlockBreaking", handler: (cancelBlockBreakingEvent: CancelBlockBreakingEvent) => void): void;
on(eventName: "chatReceive", handler: (chatReceiveEvent: ChatReceiveEvent) => void): void;
on(eventName: "chatSend", handler: (chatSendEvent: ChatSendEvent) => void): void;
on(eventName: "chunkDeltaUpdate", handler: (chunkDeltaUpdateEvent: ChunkDeltaUpdateEvent) => void): void;
on(eventName: "chunkLoad", handler: (chunkLoadEvent: ChunkLoadEvent) => void): void;
on(eventName: "chunkUnload", handler: (chunkUnloadEvent: ChunkUnloadEvent) => void): void;
on(eventName: "clearTitle", handler: (clearTitleEvent: Clear) => void): void;
on(eventName: "clickGuiScaleChange", handler: (clickGuiScaleChangeEvent: ClickGuiScaleChangeEvent) => void): void;
on(eventName: "clickGuiValueChange", handler: (clickGuiValueChangeEvent: ClickGuiValueChangeEvent) => void): void;
on(eventName: "clientChatError", handler: (clientChatErrorEvent: ClientChatErrorEvent) => void): void;
on(eventName: "clientChatJwtToken", handler: (clientChatJwtTokenEvent: ClientChatJwtTokenEvent) => void): void;
on(eventName: "clientChatMessage", handler: (clientChatMessageEvent: ClientChatMessageEvent) => void): void;
on(eventName: "clientChatStateChange", handler: (clientChatStateChangeEvent: ClientChatStateChange) => void): void;
on(eventName: "clientLanguageChanged", handler: (clientLanguageChangedEvent: ClientLanguageChangedEvent) => void): void;
on(eventName: "clientPlayerData", handler: (clientPlayerDataEvent: ClientPlayerDataEvent) => void): void;
on(eventName: "clientPlayerEffect", handler: (clientPlayerEffectEvent: ClientPlayerEffectEvent) => void): void;
on(eventName: "clientPlayerInventory", handler: (clientPlayerInventoryEvent: ClientPlayerInventoryEvent) => void): void;
on(eventName: "clientShutdown", handler: (clientShutdownEvent: ClientShutdownEvent) => void): void;
on(eventName: "clientStart", handler: (clientStartEvent: ClientStartEvent) => void): void;
on(eventName: "componentsUpdate", handler: (componentsUpdateEvent: ComponentsUpdateEvent) => void): void;
on(eventName: "death", handler: (deathEvent: DeathEvent) => void): void;
on(eventName: "disconnect", handler: (disconnectEvent: DisconnectEvent) => void): void;
on(eventName: "drawOutlines", handler: (drawOutlinesEvent: DrawOutlinesEvent) => void): void;
on(eventName: "entityEquipmentChange", handler: (entityEquipmentChangeEvent: EntityEquipmentChangeEvent) => void): void;
on(eventName: "entityHealthUpdate", handler: (entityHealthUpdateEvent: EntityHealthUpdateEvent) => void): void;
on(eventName: "entityMargin", handler: (entityMarginEvent: EntityMarginEvent) => void): void;
on(eventName: "fluidPush", handler: (fluidPushEvent: FluidPushEvent) => void): void;
on(eventName: "fps", handler: (fpsEvent: FpsChangeEvent) => void): void;
on(eventName: "fpsLimit", handler: (fpsLimitEvent: FpsLimitEvent) => void): void;
on(eventName: "frameBufferResize", handler: (frameBufferResizeEvent: FramebufferResizeEvent) => void): void;
on(eventName: "gameModeChange", handler: (gameModeChangeEvent: GameModeChangeEvent) => void): void;
on(eventName: "gameRender", handler: (gameRenderEvent: GameRenderEvent) => void): void;
on(eventName: "gameRenderTaskQueue", handler: (gameRenderTaskQueueEvent: GameRenderTaskQueueEvent) => void): void;
on(eventName: "gameTick", handler: (gameTickEvent: GameTickEvent) => void): void;
on(eventName: "healthUpdate", handler: (healthUpdateEvent: HealthUpdateEvent) => void): void;
on(eventName: "inputHandle", handler: (inputHandleEvent: InputHandleEvent) => void): void;
on(eventName: "itemLoreQuery", handler: (itemLoreQueryEvent: ItemLoreQueryEvent) => void): void;
on(eventName: "key", handler: (keyEvent: KeyEvent) => void): void;
on(eventName: "keybindChange", handler: (keybindChangeEvent: KeybindChangeEvent) => void): void;
on(eventName: "keybindIsPressed", handler: (keybindIsPressedEvent: KeybindIsPressedEvent) => void): void;
on(eventName: "keyboardChar", handler: (keyboardCharEvent: KeyboardCharEvent) => void): void;
on(eventName: "keyboardKey", handler: (keyboardKeyEvent: KeyboardKeyEvent) => void): void;
on(eventName: "moduleActivation", handler: (moduleActivationEvent: ModuleActivationEvent) => void): void;
on(eventName: "moduleToggle", handler: (moduleToggleEvent: ModuleToggleEvent) => void): void;
on(eventName: "mouseButton", handler: (mouseButtonEvent: MouseButtonEvent) => void): void;
on(eventName: "mouseCursor", handler: (mouseCursorEvent: MouseCursorEvent) => void): void;
on(eventName: "mouseRotation", handler: (mouseRotationEvent: MouseRotationEvent) => void): void;
on(eventName: "mouseScroll", handler: (mouseScrollEvent: MouseScrollEvent) => void): void;
on(eventName: "mouseScrollInHotbar", handler: (mouseScrollInHotbarEvent: MouseScrollInHotbarEvent) => void): void;
on(eventName: "movementInput", handler: (movementInputEvent: MovementInputEvent) => void): void;
on(eventName: "notification", handler: (notificationEvent: NotificationEvent) => void): void;
on(eventName: "overlayMessage", handler: (overlayMessageEvent: OverlayMessageEvent) => void): void;
on(eventName: "overlayRender", handler: (overlayRenderEvent: OverlayRenderEvent) => void): void;
on(eventName: "packet", handler: (packetEvent: PacketEvent) => void): void;
on(eventName: "perspective", handler: (perspectiveEvent: PerspectiveEvent) => void): void;
on(eventName: "pipeline", handler: (pipelineEvent: PipelineEvent) => void): void;
on(eventName: "playerAfterJump", handler: (playerAfterJumpEvent: PlayerAfterJumpEvent) => void): void;
on(eventName: "playerFluidCollisionCheck", handler: (playerFluidCollisionCheckEvent: PlayerFluidCollisionCheckEvent) => void): void;
on(eventName: "playerInteractedItem", handler: (playerInteractedItemEvent: PlayerInteractedItemEvent) => void): void;
on(eventName: "playerInteractItem", handler: (playerInteractItemEvent: PlayerInteractItemEvent) => void): void;
on(eventName: "playerJump", handler: (playerJumpEvent: PlayerJumpEvent) => void): void;
on(eventName: "playerMove", handler: (playerMoveEvent: PlayerMoveEvent) => void): void;
on(eventName: "playerMovementTick", handler: (playerMovementTickEvent: PlayerMovementTickEvent) => void): void;
on(eventName: "playerNetworkMovementTick", handler: (playerNetworkMovementTickEvent: PlayerNetworkMovementTickEvent) => void): void;
on(eventName: "playerPostTick", handler: (playerPostTickEvent: PlayerPostTickEvent) => void): void;
on(eventName: "playerPushOut", handler: (playerPushOutEvent: PlayerPushOutEvent) => void): void;
on(eventName: "playerSafeWalk", handler: (playerSafeWalkEvent: PlayerSafeWalkEvent) => void): void;
on(eventName: "playerSneakMultiplier", handler: (playerSneakMultiplierEvent: PlayerSneakMultiplier) => void): void;
on(eventName: "playerStep", handler: (playerStepEvent: PlayerStepEvent) => void): void;
on(eventName: "playerStepSuccess", handler: (playerStepSuccessEvent: PlayerStepSuccessEvent) => void): void;
on(eventName: "playerStrafe", handler: (playerStrafeEvent: PlayerVelocityStrafe) => void): void;
on(eventName: "playerStride", handler: (playerStrideEvent: PlayerStrideEvent) => void): void;
on(eventName: "playerTick", handler: (playerTickEvent: PlayerTickEvent) => void): void;
on(eventName: "playerUseMultiplier", handler: (playerUseMultiplierEvent: PlayerUseMultiplier) => void): void;
on(eventName: "proxyCheckResult", handler: (proxyCheckResultEvent: ProxyCheckResultEvent) => void): void;
on(eventName: "queuePacket", handler: (queuePacketEvent: BlinkPacketEvent) => void): void;
on(eventName: "refreshArrayList", handler: (refreshArrayListEvent: RefreshArrayListEvent) => void): void;
on(eventName: "resourceReload", handler: (resourceReloadEvent: ResourceReloadEvent) => void): void;
on(eventName: "rotationUpdate", handler: (rotationUpdateEvent: RotationUpdateEvent) => void): void;
on(eventName: "scaleFactorChange", handler: (scaleFactorChangeEvent: ScaleFactorChangeEvent) => void): void;
on(eventName: "scheduleInventoryAction", handler: (scheduleInventoryActionEvent: ScheduleInventoryActionEvent) => void): void;
on(eventName: "screen", handler: (screenEvent: ScreenEvent) => void): void;
on(eventName: "screenRender", handler: (screenRenderEvent: ScreenRenderEvent) => void): void;
on(eventName: "selectHotbarSlotSilently", handler: (selectHotbarSlotSilentlyEvent: SelectHotbarSlotSilentlyEvent) => void): void;
on(eventName: "serverConnect", handler: (serverConnectEvent: ServerConnectEvent) => void): void;
on(eventName: "serverPinged", handler: (serverPingedEvent: ServerPingedEvent) => void): void;
on(eventName: "session", handler: (sessionEvent: SessionEvent) => void): void;
on(eventName: "spaceSeperatedNamesChange", handler: (spaceSeperatedNamesChangeEvent: SpaceSeperatedNamesChangeEvent) => void): void;
on(eventName: "sprint", handler: (sprintEvent: SprintEvent) => void): void;
on(eventName: "subtitle", handler: (subtitleEvent: Subtitle) => void): void;
on(eventName: "tagEntityEvent", handler: (tagEntityEventEvent: TagEntityEvent) => void): void;
on(eventName: "targetChange", handler: (targetChangeEvent: TargetChangeEvent) => void): void;
on(eventName: "themeColorChange", handler: (themeColorChangeEvent: ThemeColorChangeEvent) => void): void;
on(eventName: "tickPacketProcess", handler: (tickPacketProcessEvent: TickPacketProcessEvent) => void): void;
on(eventName: "title", handler: (titleEvent: Title) => void): void;
on(eventName: "titleFade", handler: (titleFadeEvent: Fade) => void): void;
on(eventName: "useCooldown", handler: (useCooldownEvent: UseCooldownEvent) => void): void;
on(eventName: "userLoggedIn", handler: (userLoggedInEvent: UserLoggedInEvent) => void): void;
on(eventName: "userLoggedOut", handler: (userLoggedOutEvent: UserLoggedOutEvent) => void): void;
on(eventName: "valueChanged", handler: (valueChangedEvent: ValueChangedEvent) => void): void;
on(eventName: "virtualScreen", handler: (virtualScreenEvent: VirtualScreenEvent) => void): void;
on(eventName: "windowResize", handler: (windowResizeEvent: WindowResizeEvent) => void): void;
on(eventName: "worldChange", handler: (worldChangeEvent: WorldChangeEvent) => void): void;
on(eventName: "worldEntityRemove", handler: (worldEntityRemoveEvent: WorldEntityRemoveEvent) => void): void;
on(eventName: "worldRender", handler: (worldRenderEvent: WorldRenderEvent) => void): void;



    }
}
