import type { AWTEvent } from '../../../java/awt/AWTEvent.d.ts'
import type { BufferCapabilities } from '../../../java/awt/BufferCapabilities.d.ts'
import type { BufferCapabilities$FlipContents } from '../../../java/awt/BufferCapabilities$FlipContents.d.ts'
import type { Color } from '../../../java/awt/Color.d.ts'
import type { Component } from '../../../java/awt/Component.d.ts'
import type { Dialog } from '../../../java/awt/Dialog.d.ts'
import type { Dimension } from '../../../java/awt/Dimension.d.ts'
import type { Font } from '../../../java/awt/Font.d.ts'
import type { FontMetrics } from '../../../java/awt/FontMetrics.d.ts'
import type { Graphics } from '../../../java/awt/Graphics.d.ts'
import type { GraphicsConfiguration } from '../../../java/awt/GraphicsConfiguration.d.ts'
import type { Image } from '../../../java/awt/Image.d.ts'
import type { Insets } from '../../../java/awt/Insets.d.ts'
import type { Point } from '../../../java/awt/Point.d.ts'
import type { Window } from '../../../java/awt/Window.d.ts'
import type { FocusEvent$Cause } from '../../../java/awt/event/FocusEvent$Cause.d.ts'
import type { PaintEvent } from '../../../java/awt/event/PaintEvent.d.ts'
import type { ColorModel } from '../../../java/awt/image/ColorModel.d.ts'
import type { VolatileImage } from '../../../java/awt/image/VolatileImage.d.ts'
import type { ComponentPeer } from '../../../java/awt/peer/ComponentPeer.d.ts'
import type { ContainerPeer } from '../../../java/awt/peer/ContainerPeer.d.ts'
import type { WindowPeer } from '../../../java/awt/peer/WindowPeer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Region } from '../../../sun/java2d/pipe/Region.d.ts'
export interface DialogPeer extends WindowPeer, Object{
    applyShape(arg0: Region): void;
    beginLayout(): void;
    beginValidate(): void;
    blockWindows(arg0: Window[]): void;
    canDetermineObscurity(): boolean;
    coalescePaintEvent(arg0: PaintEvent): void;
    createBuffers(arg0: number, arg1: BufferCapabilities): void;
    createImage(arg0: number, arg1: number): Image;
    createVolatileImage(arg0: number, arg1: number): VolatileImage;
    destroyBuffers(): void;
    dispose(): void;
    endLayout(): void;
    endValidate(): void;
    flip(arg0: number, arg1: number, arg2: number, arg3: number, arg4: BufferCapabilities$FlipContents): void;
    getAppropriateGraphicsConfiguration(arg0: GraphicsConfiguration): GraphicsConfiguration;
    getBackBuffer(): Image;
    getColorModel(): ColorModel;
    getFontMetrics(arg0: Font): FontMetrics;
    getGraphics(): Graphics;
    getGraphicsConfiguration(): GraphicsConfiguration;
    getInsets(): Insets;
    getLocationOnScreen(): Point;
    getMinimumSize(): Dimension;
    getPreferredSize(): Dimension;
    handleEvent(arg0: AWTEvent): void;
    handlesWheelScrolling(): boolean;
    isFocusable(): boolean;
    isObscured(): boolean;
    isReparentSupported(): boolean;
    layout(): void;
    paint(arg0: Graphics): void;
    print(arg0: Graphics): void;
    reparent(arg0: ContainerPeer): void;
    requestFocus(arg0: Component, arg1: boolean, arg2: boolean, arg3: number, arg4: FocusEvent$Cause): boolean;
    setBackground(arg0: Color): void;
    setBounds(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
    setEnabled(arg0: boolean): void;
    setFont(arg0: Font): void;
    setForeground(arg0: Color): void;
    setModalBlocked(arg0: Dialog, arg1: boolean): void;
    setOpacity(arg0: number): void;
    setOpaque(arg0: boolean): void;
    setResizable(arg0: boolean): void;
    setTitle(arg0: string): void;
    setVisible(arg0: boolean): void;
    setZOrder(arg0: ComponentPeer): void;
    toBack(): void;
    toFront(): void;
    updateAlwaysOnTopState(): void;
    updateCursorImmediately(): void;
    updateFocusableWindowState(): void;
    updateGraphicsData(arg0: GraphicsConfiguration): boolean;
    updateIconImages(): void;
    updateMinimumSize(): void;
    updateWindow(): void;
}