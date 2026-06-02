import type { BufferCapabilities } from '../../java/awt/BufferCapabilities.d.ts'
import type { Component } from '../../java/awt/Component.d.ts'
import type { Graphics } from '../../java/awt/Graphics.d.ts'
import type { GraphicsConfiguration } from '../../java/awt/GraphicsConfiguration.d.ts'
import type { BufferStrategy } from '../../java/awt/image/BufferStrategy.d.ts'
import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
export class Canvas extends Component implements Accessible {
    static ABORT: number;
    static ALLBITS: number;
    static BOTTOM_ALIGNMENT: number;
    static CENTER_ALIGNMENT: number;
    static ERROR: number;
    static FRAMEBITS: number;
    static HEIGHT: number;
    static LEFT_ALIGNMENT: number;
    static PROPERTIES: number;
    static RIGHT_ALIGNMENT: number;
    static SOMEBITS: number;
    static TOP_ALIGNMENT: number;
    static WIDTH: number;
    constructor()
    constructor(arg0: GraphicsConfiguration)
    addNotify(): void;
    constructComponentName(): string;
    createBufferStrategy(arg0: number): void;
    createBufferStrategy(arg0: number, arg1: BufferCapabilities): void;
    getAccessibleContext(): AccessibleContext;
    getBufferStrategy(): BufferStrategy;
    paint(arg0: Graphics): void;
    postsOldMouseEvents(): boolean;
    setGraphicsConfiguration(arg0: GraphicsConfiguration): void;
    update(arg0: Graphics): void;
}