import type { Component } from '../../java/awt/Component.d.ts'
import type { Container } from '../../java/awt/Container.d.ts'
import type { LayoutManager } from '../../java/awt/LayoutManager.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
import type { JButton } from '../../javax/swing/JButton.d.ts'
import type { JComponent } from '../../javax/swing/JComponent.d.ts'
import type { JLayeredPane } from '../../javax/swing/JLayeredPane.d.ts'
import type { JMenuBar } from '../../javax/swing/JMenuBar.d.ts'
import type { ComponentUI } from '../../javax/swing/plaf/ComponentUI.d.ts'
import type { RootPaneUI } from '../../javax/swing/plaf/RootPaneUI.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class JRootPane extends JComponent implements Accessible {
    static ABORT: number;
    static ALLBITS: number;
    static BOTTOM_ALIGNMENT: number;
    static CENTER_ALIGNMENT: number;
    static COLOR_CHOOSER_DIALOG: number;
    static ERROR: number;
    static ERROR_DIALOG: number;
    static FILE_CHOOSER_DIALOG: number;
    static FRAME: number;
    static FRAMEBITS: number;
    static HEIGHT: number;
    static INFORMATION_DIALOG: number;
    static LEFT_ALIGNMENT: number;
    static NONE: number;
    static PLAIN_DIALOG: number;
    static PROPERTIES: number;
    static QUESTION_DIALOG: number;
    static RIGHT_ALIGNMENT: number;
    static SOMEBITS: number;
    static TOOL_TIP_TEXT_KEY: string;
    static TOP_ALIGNMENT: number;
    static UNDEFINED_CONDITION: number;
    static WARNING_DIALOG: number;
    static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
    static WHEN_FOCUSED: number;
    static WHEN_IN_FOCUSED_WINDOW: number;
    static WIDTH: number;
    static getDefaultLocale(): Locale;
    static isLightweightComponent(paramarg0: Component): boolean;
    static setDefaultLocale(paramarg0: Locale): void;
    constructor()
    contentPane: Container;
    defaultButton: JButton;
    glassPane: Component;
    layeredPane: JLayeredPane;
    menuBar: JMenuBar;
    // private useTrueDoubleBuffering: boolean;
    readonly windowDecorationStyle: number;
    addImpl(arg0: Component, arg1: Object, arg2: number): void;
    addNotify(): void;
    createContentPane(): Container;
    createGlassPane(): Component;
    createLayeredPane(): JLayeredPane;
    createRootLayout(): LayoutManager;
    disableTrueDoubleBuffering(): void;
    getAccessibleContext(): AccessibleContext;
    getContentPane(): Container;
    getDefaultButton(): JButton;
    getGlassPane(): Component;
    getJMenuBar(): JMenuBar;
    getLayeredPane(): JLayeredPane;
    getMenuBar(): JMenuBar;
    getUI(): RootPaneUI;
    getUIClassID(): string;
    getUseTrueDoubleBuffering(): boolean;
    getWindowDecorationStyle(): number;
    isOptimizedDrawingEnabled(): boolean;
    isValidateRoot(): boolean;
    paramString(): string;
    removeNotify(): void;
    setContentPane(arg0: Container): void;
    setDefaultButton(arg0: JButton): void;
    setDoubleBuffered(arg0: boolean): void;
    setGlassPane(arg0: Component): void;
    setJMenuBar(arg0: JMenuBar): void;
    setLayeredPane(arg0: JLayeredPane): void;
    setMenuBar(arg0: JMenuBar): void;
    setUI(arg0: ComponentUI): void;
    setUI(arg0: RootPaneUI): void;
    setUseTrueDoubleBuffering(arg0: boolean): void;
    setWindowDecorationStyle(arg0: number): void;
    updateUI(): void;
}