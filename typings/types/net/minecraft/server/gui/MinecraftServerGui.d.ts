import type { Component } from '../../../../java/awt/Component.d.ts'
import type { Graphics } from '../../../../java/awt/Graphics.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { JComponent } from '../../../../javax/swing/JComponent.d.ts'
import type { JScrollPane } from '../../../../javax/swing/JScrollPane.d.ts'
import type { JTextArea } from '../../../../javax/swing/JTextArea.d.ts'
import type { DedicatedServer } from '../../../../net/minecraft/server/dedicated/DedicatedServer.d.ts'
export class MinecraftServerGui extends JComponent {
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
    static TOOL_TIP_TEXT_KEY: string;
    static TOP_ALIGNMENT: number;
    static UNDEFINED_CONDITION: number;
    static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
    static WHEN_FOCUSED: number;
    static WHEN_IN_FOCUSED_WINDOW: number;
    static WIDTH: number;
    static getDefaultLocale(): Locale;
    static isLightweightComponent(paramarg0: Component): boolean;
    static setDefaultLocale(paramarg0: Locale): void;
    static showFrameFor(paramserver: DedicatedServer): MinecraftServerGui;
    private constructor(server: DedicatedServer)
    // private finalizers: () => void[];
    // private isClosing: AtomicBoolean;
    // private logAppenderThread: Thread;
    // private server: DedicatedServer;
    addFinalizer(finalizer: () => void): void;
    // private buildChatPanel(): JComponent;
    // private buildInfoPanel(): JComponent;
    // private buildPlayerPanel(): JComponent;
    close(): void;
    print(arg0: Graphics): void;
    print(console: JTextArea, scrollPane: JScrollPane, line: string): void;
    // private runFinalizers(): void;
    start(): void;
}