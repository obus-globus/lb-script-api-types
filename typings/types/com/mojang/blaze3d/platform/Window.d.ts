import type { DisplayData } from '../../../../com/mojang/blaze3d/platform/DisplayData.d.ts'
import type { IconSet } from '../../../../com/mojang/blaze3d/platform/IconSet.d.ts'
import type { Monitor } from '../../../../com/mojang/blaze3d/platform/Monitor.d.ts'
import type { MonitorManager } from '../../../../com/mojang/blaze3d/platform/MonitorManager.d.ts'
import type { VideoMode } from '../../../../com/mojang/blaze3d/platform/VideoMode.d.ts'
import type { WindowEventHandler } from '../../../../com/mojang/blaze3d/platform/WindowEventHandler.d.ts'
import type { CursorType } from '../../../../com/mojang/blaze3d/platform/cursor/CursorType.d.ts'
import type { GpuBackend } from '../../../../com/mojang/blaze3d/systems/GpuBackend.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PackResources } from '../../../../net/minecraft/server/packs/PackResources.d.ts'
import type { GLFWErrorCallback } from '../../../../org/lwjgl/glfw/GLFWErrorCallback.d.ts'
export class Window extends Object implements AutoCloseable {
    static BASE_HEIGHT: number;
    static BASE_WIDTH: number;
    static checkGlfwError(paramerrorConsumer: (param0: number, param1: string) => void): void;
    static createGlfwWindow(paramwidth: number, paramheight: number, paramtitle: string, parammonitor: number, parambackend: GpuBackend): number;
    static getPlatform(): string;
    constructor(eventHandler: WindowEventHandler, displayData: DisplayData, fullscreenVideoModeString: string, exclusiveFullscreen: boolean, title: string, monitorManager: MonitorManager, backend: GpuBackend)
    // private actuallyFullscreen: boolean;
    readonly allowCursorChanges: boolean;
    // private backend: GpuBackend;
    // private currentCursor: CursorType;
    // private defaultErrorCallback: GLFWErrorCallback;
    // private dirty: boolean;
    readonly errorSection: string;
    // private eventHandler: WindowEventHandler;
    // private exclusiveFullscreen: boolean;
    readonly focused: boolean;
    // private framebufferHeight: number;
    // private framebufferWidth: number;
    readonly fullscreen: boolean;
    readonly guiScale: number;
    readonly guiScaledHeight: number;
    readonly guiScaledWidth: number;
    // private handle: number;
    readonly height: number;
    readonly iconified: boolean;
    readonly minimized: boolean;
    // private monitorManager: MonitorManager;
    readonly preferredFullscreenVideoMode: Optional<VideoMode>;
    // private vsync: boolean;
    readonly width: number;
    // private windowedHeight: number;
    // private windowedWidth: number;
    // private windowedX: number;
    // private windowedY: number;
    readonly x: number;
    readonly y: number;
    backend(): GpuBackend;
    calculateScale(maxScale: number, enforceUnicode: boolean): number;
    changeFullscreenVideoMode(): void;
    close(): void;
    // private createWindow(backend: GpuBackend, width: number, height: number, title: string, initialMonitor: number): number;
    defaultErrorCallback(errorCode: number, description: number): void;
    findBestMonitor(): Monitor;
    getAppropriateLineWidth(): number;
    getGuiScale(): number;
    getGuiScaledHeight(): number;
    getGuiScaledWidth(): number;
    getHeight(): number;
    getPreferredFullscreenVideoMode(): Optional<VideoMode>;
    getRefreshRate(): number;
    getScreenHeight(): number;
    getScreenWidth(): number;
    getWidth(): number;
    getX(): number;
    getY(): number;
    handle(): number;
    isFocused(): boolean;
    isFullscreen(): boolean;
    isIconified(): boolean;
    isMinimized(): boolean;
    // private isSoftScreen(): boolean;
    // private onEnter(handle: number, entered: boolean): void;
    // private onFocus(handle: number, focused: boolean): void;
    // private onFramebufferResize(handle: number, newWidth: number, newHeight: number): void;
    // private onIconify(handle: number, iconified: boolean): void;
    // private onMove(handle: number, x: number, y: number): void;
    // private onResize(handle: number, newWidth: number, newHeight: number): void;
    // private refreshFramebufferSize(): void;
    selectCursor(cursor: CursorType): void;
    setAllowCursorChanges(value: boolean): void;
    // private setBootErrorCallback(): void;
    setDefaultErrorCallback(): void;
    setErrorSection(string: string): void;
    setGuiScale(guiScale: number): void;
    setHeight(height: number): void;
    setIcon(resources: PackResources, iconSet: IconSet): void;
    // private setMode(): void;
    setPreferredFullscreenVideoMode(preferredFullscreenVideoMode: Optional<VideoMode>): void;
    setTitle(title: string): void;
    setWidth(width: number): void;
    setWindowCloseCallback(task: () => void): void;
    setWindowed(width: number, height: number): void;
    shouldClose(): boolean;
    toggleFullScreen(): void;
    updateFullscreenIfChanged(): void;
    updateRawMouseInput(value: boolean): void;
}