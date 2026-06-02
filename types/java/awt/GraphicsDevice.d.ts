import type { DisplayMode } from '../../java/awt/DisplayMode.d.ts'
import type { GraphicsConfigTemplate } from '../../java/awt/GraphicsConfigTemplate.d.ts'
import type { GraphicsConfiguration } from '../../java/awt/GraphicsConfiguration.d.ts'
import type { GraphicsDevice$WindowTranslucency } from '../../java/awt/GraphicsDevice$WindowTranslucency.d.ts'
import type { Rectangle } from '../../java/awt/Rectangle.d.ts'
import type { Window } from '../../java/awt/Window.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { AppContext } from '../../sun/awt/AppContext.d.ts'
export abstract class GraphicsDevice extends Object {
    static TYPE_IMAGE_BUFFER: number;
    static TYPE_PRINTER: number;
    static TYPE_RASTER_SCREEN: number;
    constructor()
    // private fsAppContextLock: Object;
    // private fullScreenAppContext: AppContext;
    readonly fullScreenWindow: Window;
    // private windowedModeBounds: Rectangle;
    getAvailableAcceleratedMemory(): number;
    getBestConfiguration(arg0: GraphicsConfigTemplate): GraphicsConfiguration;
    getConfigurations(): GraphicsConfiguration[];
    getDefaultConfiguration(): GraphicsConfiguration;
    getDisplayMode(): DisplayMode;
    getDisplayModes(): DisplayMode[];
    getFullScreenWindow(): Window;
    getIDstring(): string;
    getTranslucencyCapableGC(): GraphicsConfiguration;
    getType(): number;
    isDisplayChangeSupported(): boolean;
    isFullScreenSupported(): boolean;
    isWindowPerpixelTranslucencySupported(): boolean;
    isWindowTranslucencySupported(arg0: GraphicsDevice$WindowTranslucency): boolean;
    setDisplayMode(arg0: DisplayMode): void;
    setFullScreenWindow(arg0: Window): void;
}