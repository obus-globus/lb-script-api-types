import type { Component } from '../../java/awt/Component.d.ts'
import type { Dimension } from '../../java/awt/Dimension.d.ts'
import type { Font } from '../../java/awt/Font.d.ts'
import type { Rectangle } from '../../java/awt/Rectangle.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
import type { Document } from '../../javax/swing/text/Document.d.ts'
import type { JTextComponent } from '../../javax/swing/text/JTextComponent.d.ts'
import type { Keymap } from '../../javax/swing/text/Keymap.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class JTextArea extends JTextComponent {
    static ABORT: number;
    static ALLBITS: number;
    static BOTTOM_ALIGNMENT: number;
    static CENTER_ALIGNMENT: number;
    static DEFAULT_KEYMAP: string;
    static ERROR: number;
    static FOCUS_ACCELERATOR_KEY: string;
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
    static addKeymap(paramarg0: string, paramarg1: Keymap): Keymap;
    static getDefaultLocale(): Locale;
    static getKeymap(paramarg0: string): Keymap;
    static isLightweightComponent(paramarg0: Component): boolean;
    static loadKeymap(paramarg0: Keymap, paramarg1: (Object | null)[], paramarg2: (Object | null)[]): void;
    static removeKeymap(paramarg0: string): Keymap;
    static setDefaultLocale(paramarg0: Locale): void;
    constructor()
    constructor(arg0: Document)
    constructor(arg0: Document, arg1: string, arg2: number, arg3: number)
    constructor(arg0: number, arg1: number)
    constructor(arg0: string)
    constructor(arg0: string, arg1: number, arg2: number)
    // private columnWidth: number;
    readonly columns: number;
    // private rowHeight: number;
    readonly rows: number;
    // private word: boolean;
    // private wrap: boolean;
    append(arg0: string): void;
    createDefaultModel(): Document;
    getAccessibleContext(): AccessibleContext;
    getColumnWidth(): number;
    getColumns(): number;
    getLineCount(): number;
    getLineEndOffset(arg0: number): number;
    getLineOfOffset(arg0: number): number;
    getLineStartOffset(arg0: number): number;
    getLineWrap(): boolean;
    getPreferredScrollableViewportSize(): Dimension;
    getPreferredSize(): Dimension;
    getRowHeight(): number;
    getRows(): number;
    getScrollableTracksViewportWidth(): boolean;
    getScrollableUnitIncrement(arg0: Rectangle, arg1: number, arg2: number): number;
    getTabSize(): number;
    getUIClassID(): string;
    getWrapStyleWord(): boolean;
    insert(arg0: string, arg1: number): void;
    paramString(): string;
    replaceRange(arg0: string, arg1: number, arg2: number): void;
    setColumns(arg0: number): void;
    setFont(arg0: Font): void;
    setLineWrap(arg0: boolean): void;
    setRows(arg0: number): void;
    setTabSize(arg0: number): void;
    setWrapStyleWord(arg0: boolean): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}