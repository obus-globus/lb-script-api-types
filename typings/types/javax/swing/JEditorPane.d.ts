import type { JavaMap } from '../../JavaMap.d.ts'
import type { Component } from '../../java/awt/Component.d.ts'
import type { Dimension } from '../../java/awt/Dimension.d.ts'
import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Reader } from '../../java/io/Reader.d.ts'
import type { ClassLoader } from '../../java/lang/ClassLoader.d.ts'
import type { HttpURLConnection } from '../../java/net/HttpURLConnection.d.ts'
import type { URL } from '../../java/net/URL.d.ts'
import type { URLConnection } from '../../java/net/URLConnection.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
import type { Action } from '../../javax/swing/Action.d.ts'
import type { SwingWorker } from '../../javax/swing/SwingWorker.d.ts'
import type { HyperlinkEvent } from '../../javax/swing/event/HyperlinkEvent.d.ts'
import type { HyperlinkListener } from '../../javax/swing/event/HyperlinkListener.d.ts'
import type { Document } from '../../javax/swing/text/Document.d.ts'
import type { EditorKit } from '../../javax/swing/text/EditorKit.d.ts'
import type { JTextComponent } from '../../javax/swing/text/JTextComponent.d.ts'
import type { JTextComponent$KeyBinding } from '../../javax/swing/text/JTextComponent$KeyBinding.d.ts'
import type { Keymap } from '../../javax/swing/text/Keymap.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class JEditorPane extends JTextComponent {
    static ABORT: number;
    static ALLBITS: number;
    static BOTTOM_ALIGNMENT: number;
    static CENTER_ALIGNMENT: number;
    static DEFAULT_KEYMAP: string;
    static ERROR: number;
    static FOCUS_ACCELERATOR_KEY: string;
    static FRAMEBITS: number;
    static HEIGHT: number;
    static HONOR_DISPLAY_PROPERTIES: string;
    static LEFT_ALIGNMENT: number;
    static PROPERTIES: number;
    static RIGHT_ALIGNMENT: number;
    static SOMEBITS: number;
    static TOOL_TIP_TEXT_KEY: string;
    static TOP_ALIGNMENT: number;
    static UNDEFINED_CONDITION: number;
    static W3C_LENGTH_UNITS: string;
    static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
    static WHEN_FOCUSED: number;
    static WHEN_IN_FOCUSED_WINDOW: number;
    static WIDTH: number;
    static addKeymap(paramarg0: string, paramarg1: Keymap): Keymap;
    static createEditorKitForContentType(paramarg0: string): EditorKit;
    static getDefaultLocale(): Locale;
    static getEditorKitClassNameForContentType(paramarg0: string): string;
    static getKeymap(paramarg0: string): Keymap;
    static isLightweightComponent(paramarg0: Component): boolean;
    static loadKeymap(paramarg0: Keymap, paramarg1: JTextComponent$KeyBinding[], paramarg2: Action[]): void;
    static registerEditorKitForContentType(paramarg0: string, paramarg1: string): void;
    static registerEditorKitForContentType(paramarg0: string, paramarg1: string, paramarg2: ClassLoader): void;
    static removeKeymap(paramarg0: string): Keymap;
    static setDefaultLocale(paramarg0: Locale): void;
    constructor()
    constructor(arg0: URL)
    constructor(arg0: string)
    constructor(arg0: string, arg1: string)
    // private isUserSetEditorKit: boolean;
    // private kit: EditorKit;
    // private pageLoader: SwingWorker<URL, Object>;
    // private pageProperties: JavaMap<string, Object>;
    // private typeHandlers: JavaMap<string, EditorKit>;
    addHyperlinkListener(arg0: HyperlinkListener): void;
    createDefaultEditorKit(): EditorKit;
    fireHyperlinkUpdate(arg0: HyperlinkEvent): void;
    getAccessibleContext(): AccessibleContext;
    // private getAsynchronousLoadPriority(arg0: Document): number;
    getContentType(): string;
    getEditorKit(): EditorKit;
    getEditorKitForContentType(arg0: string): EditorKit;
    getHyperlinkListeners(): HyperlinkListener[];
    getPage(): URL;
    // private getPostData(): Object;
    getPreferredSize(): Dimension;
    getScrollableTracksViewportHeight(): boolean;
    getScrollableTracksViewportWidth(): boolean;
    getStream(arg0: URL): InputStream;
    getText(): string;
    getText(arg0: number, arg1: number): string;
    getUIClassID(): string;
    // private handleConnectionProperties(arg0: URLConnection): void;
    // private handlePostData(arg0: HttpURLConnection, arg1: Object): void;
    // private initializeModel(arg0: EditorKit, arg1: URL): Document;
    paramString(): string;
    read(arg0: InputStream, arg1: Document): void;
    read(arg0: InputStream, arg1: Object): void;
    read(arg0: Reader, arg1: Object): void;
    removeHyperlinkListener(arg0: HyperlinkListener): void;
    replaceSelection(arg0: string): void;
    scrollToReference(arg0: string): void;
    // private setCharsetFromContentTypeParameters(arg0: string): void;
    setContentType(arg0: string): void;
    setEditorKit(arg0: EditorKit): void;
    setEditorKitForContentType(arg0: string, arg1: EditorKit): void;
    setPage(arg0: URL): void;
    setPage(arg0: string): void;
    setText(arg0: string): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}