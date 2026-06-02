import type { Window } from '../../../com/mojang/blaze3d/platform/Window.d.ts'
import type { IMouseKeyboardHandlers } from '../../../com/viaversion/viafabricplus/injection/access/execute_inputs_sync/IMouseKeyboardHandlers.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MouseHandlerAddition } from '../../../net/ccbluex/liquidbounce/additions/MouseHandlerAddition.d.ts'
import type { MixinMouseHandlerAccessor } from '../../../net/ccbluex/liquidbounce/injection/mixins/minecraft/client/MixinMouseHandlerAccessor.d.ts'
import type { CrashReportCategory } from '../../../net/minecraft/CrashReportCategory.d.ts'
import type { Minecraft } from '../../../net/minecraft/client/Minecraft.d.ts'
import type { MouseHandler$LastClick } from '../../../net/minecraft/client/MouseHandler$LastClick.d.ts'
import type { ScrollWheelHandler } from '../../../net/minecraft/client/ScrollWheelHandler.d.ts'
import type { Font } from '../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { MouseButtonInfo } from '../../../net/minecraft/client/input/MouseButtonInfo.d.ts'
import type { SmoothDouble } from '../../../net/minecraft/util/SmoothDouble.d.ts'
export class MouseHandler extends Object implements IMouseKeyboardHandlers, MouseHandlerAddition, MixinMouseHandlerAccessor {
    static DOUBLE_CLICK_THRESHOLD_MS: number;
    static getScaledXPos(paramwindow: Window, paramx: number): number;
    static getScaledYPos(paramwindow: Window, paramy: number): number;
    constructor(minecraft: Minecraft)
    // private accumulatedDX: number;
    // private accumulatedDY: number;
    // private activeButton: MouseButtonInfo;
    // private clickDepth: number;
    // private fakeRightMouse: number;
    // private ignoreFirstMove: boolean;
    // private isLeftPressed: boolean;
    // private isMiddlePressed: boolean;
    // private isRightPressed: boolean;
    readonly lastClick: MouseHandler$LastClick;
    lastClickButton: number;
    // private lastHandleMovementTime: number;
    // private minecraft: Minecraft;
    readonly mouseGrabbed: boolean;
    // private mousePressedTime: number;
    // private scrollWheelHandler: ScrollWheelHandler;
    // private smoothTurnX: SmoothDouble;
    // private smoothTurnY: SmoothDouble;
    // private viaFabricPlus$pendingScreenEvents: Object[];
    // private xpos: number;
    // private ypos: number;
    cursorEntered(): void;
    drawDebugMouseInfo(font: Font, graphics: GuiGraphicsExtractor): void;
    fillMousePositionDetails(category: CrashReportCategory, window: Window): void;
    getScaledXPos(window: Window): number;
    getScaledYPos(window: Window): number;
    grabMouse(): void;
    handleAccumulatedMovement(): void;
    isLeftPressed(): boolean;
    isMiddlePressed(): boolean;
    isMouseGrabbed(): boolean;
    isRightPressed(): boolean;
    liquidbounce$setPosition(arg0: number, arg1: number): void;
    // private onButton(handle: number, rawButtonInfo: MouseButtonInfo, action: number): void;
    // private onDrop(handle: number, files: Path[][], failedCount: number): void;
    // private onMove(handle: number, xpos: number, ypos: number): void;
    // private onScroll(handle: number, xoffset: number, yoffset: number): void;
    releaseMouse(): void;
    setIgnoreFirstMove(): void;
    setup(window: Window): void;
    // private simulateRightClick(info: MouseButtonInfo, pressed: boolean): MouseButtonInfo;
    // private turnPlayer(mousea: number): void;
    viaFabricPlus$getPendingScreenEvents(): Object[];
    xpos(): number;
    ypos(): number;
}