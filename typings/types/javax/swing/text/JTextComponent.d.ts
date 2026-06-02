import type { Color } from '../../../java/awt/Color.d.ts'
import type { Component } from '../../../java/awt/Component.d.ts'
import type { ComponentOrientation } from '../../../java/awt/ComponentOrientation.d.ts'
import type { Dimension } from '../../../java/awt/Dimension.d.ts'
import type { Insets } from '../../../java/awt/Insets.d.ts'
import type { Point } from '../../../java/awt/Point.d.ts'
import type { Rectangle } from '../../../java/awt/Rectangle.d.ts'
import type { InputMethodEvent } from '../../../java/awt/event/InputMethodEvent.d.ts'
import type { InputMethodListener } from '../../../java/awt/event/InputMethodListener.d.ts'
import type { MouseEvent } from '../../../java/awt/event/MouseEvent.d.ts'
import type { Point2D } from '../../../java/awt/geom/Point2D.d.ts'
import type { Rectangle2D } from '../../../java/awt/geom/Rectangle2D.d.ts'
import type { InputMethodRequests } from '../../../java/awt/im/InputMethodRequests.d.ts'
import type { Printable } from '../../../java/awt/print/Printable.d.ts'
import type { ObjectInputStream } from '../../../java/io/ObjectInputStream.d.ts'
import type { Reader } from '../../../java/io/Reader.d.ts'
import type { Writer } from '../../../java/io/Writer.d.ts'
import type { AttributedCharacterIterator } from '../../../java/text/AttributedCharacterIterator.d.ts'
import type { MessageFormat } from '../../../java/text/MessageFormat.d.ts'
import type { Locale } from '../../../java/util/Locale.d.ts'
import type { Accessible } from '../../../javax/accessibility/Accessible.d.ts'
import type { AccessibleContext } from '../../../javax/accessibility/AccessibleContext.d.ts'
import type { PrintService } from '../../../javax/print/PrintService.d.ts'
import type { PrintRequestAttributeSet } from '../../../javax/print/attribute/PrintRequestAttributeSet.d.ts'
import type { Action } from '../../../javax/swing/Action.d.ts'
import type { DropMode } from '../../../javax/swing/DropMode.d.ts'
import type { JComponent } from '../../../javax/swing/JComponent.d.ts'
import type { Scrollable } from '../../../javax/swing/Scrollable.d.ts'
import type { TransferHandler$DropLocation } from '../../../javax/swing/TransferHandler$DropLocation.d.ts'
import type { CaretEvent } from '../../../javax/swing/event/CaretEvent.d.ts'
import type { CaretListener } from '../../../javax/swing/event/CaretListener.d.ts'
import type { TextUI } from '../../../javax/swing/plaf/TextUI.d.ts'
import type { Caret } from '../../../javax/swing/text/Caret.d.ts'
import type { Document } from '../../../javax/swing/text/Document.d.ts'
import type { Highlighter } from '../../../javax/swing/text/Highlighter.d.ts'
import type { JTextComponent$ComposedTextCaret } from '../../../javax/swing/text/JTextComponent$ComposedTextCaret.d.ts'
import type { JTextComponent$DropLocation } from '../../../javax/swing/text/JTextComponent$DropLocation.d.ts'
import type { JTextComponent$MutableCaretEvent } from '../../../javax/swing/text/JTextComponent$MutableCaretEvent.d.ts'
import type { Keymap } from '../../../javax/swing/text/Keymap.d.ts'
import type { NavigationFilter } from '../../../javax/swing/text/NavigationFilter.d.ts'
import type { Position } from '../../../javax/swing/text/Position.d.ts'
import type { SimpleAttributeSet } from '../../../javax/swing/text/SimpleAttributeSet.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class JTextComponent extends JComponent implements Accessible, Scrollable {
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
    readonly caret: Caret;
    readonly caretColor: Color;
    // private caretEvent: JTextComponent$MutableCaretEvent;
    // private checkedInputOverride: boolean;
    // private composedTextAttribute: SimpleAttributeSet;
    // private composedTextCaret: JTextComponent$ComposedTextCaret;
    // private composedTextContent: string;
    // private composedTextEnd: Position;
    // private composedTextStart: Position;
    readonly disabledTextColor: Color;
    readonly dragEnabled: boolean;
    readonly dropLocation: JTextComponent$DropLocation;
    readonly dropMode: DropMode;
    readonly editable: boolean;
    readonly focusAccelerator: string;
    readonly highlighter: Highlighter;
    // private inputMethodRequestsHandler: InputMethodRequests;
    readonly keymap: Keymap;
    // private latestCommittedTextEnd: Position;
    // private latestCommittedTextStart: Position;
    readonly margin: Insets;
    // private model: Document;
    readonly navigationFilter: NavigationFilter;
    // private needToSendKeyTypedEvent: boolean;
    // private originalCaret: Caret;
    readonly selectedTextColor: Color;
    readonly selectionColor: Color;
    addCaretListener(arg0: CaretListener): void;
    addInputMethodListener(arg0: InputMethodListener): void;
    composedTextExists(): boolean;
    copy(): void;
    // private createComposedTextAttribute(arg0: number, arg1: AttributedCharacterIterator): void;
    cut(): void;
    dropLocationForPoint(arg0: Point): JTextComponent$DropLocation;
    // private exchangeCaret(arg0: Caret, arg1: Caret): void;
    fireCaretUpdate(arg0: CaretEvent): void;
    getAccessibleContext(): AccessibleContext;
    getActions(): Action[];
    getCaret(): Caret;
    getCaretColor(): Color;
    getCaretListeners(): CaretListener[];
    getCaretPosition(): number;
    // private getCurrentEventModifiers(): number;
    getDisabledTextColor(): Color;
    getDocument(): Document;
    getDragEnabled(): boolean;
    getDropLocation(): JTextComponent$DropLocation;
    getDropMode(): DropMode;
    getFocusAccelerator(): string;
    getHighlighter(): Highlighter;
    getInputMethodRequests(): InputMethodRequests;
    getKeymap(): Keymap;
    getMargin(): Insets;
    getNavigationFilter(): NavigationFilter;
    getPreferredScrollableViewportSize(): Dimension;
    getPrintable(arg0: MessageFormat, arg1: MessageFormat): Printable;
    getScrollableBlockIncrement(arg0: Rectangle, arg1: number, arg2: number): number;
    getScrollableTracksViewportHeight(): boolean;
    getScrollableTracksViewportWidth(): boolean;
    getScrollableUnitIncrement(arg0: Rectangle, arg1: number, arg2: number): number;
    getSelectedText(): string;
    getSelectedTextColor(): Color;
    getSelectionColor(): Color;
    getSelectionEnd(): number;
    getSelectionStart(): number;
    getText(): string;
    getText(arg0: number, arg1: number): string;
    getToolTipText(arg0: MouseEvent): string;
    getUI(): TextUI;
    // private installDefaultTransferHandlerIfNecessary(): void;
    // private invokeAction(arg0: string, arg1: Action): void;
    isEditable(): boolean;
    // private mapCommittedTextToAction(arg0: string): void;
    modelToView(arg0: number): Rectangle;
    modelToView2D(arg0: number): Rectangle2D;
    moveCaretPosition(arg0: number): void;
    paramString(): string;
    paste(): void;
    print(): boolean;
    print(arg0: MessageFormat, arg1: MessageFormat): boolean;
    print(arg0: MessageFormat, arg1: MessageFormat, arg2: boolean, arg3: PrintService, arg4: PrintRequestAttributeSet, arg5: boolean): boolean;
    processInputMethodEvent(arg0: InputMethodEvent): void;
    read(arg0: Reader, arg1: Object): void;
    // private readObject(arg0: ObjectInputStream): void;
    removeCaretListener(arg0: CaretListener): void;
    removeNotify(): void;
    // private replaceInputMethodText(arg0: InputMethodEvent): void;
    replaceSelection(arg0: string): void;
    restoreComposedText(): void;
    saveComposedText(arg0: number): boolean;
    select(arg0: number, arg1: number): void;
    selectAll(): void;
    setCaret(arg0: Caret): void;
    setCaretColor(arg0: Color): void;
    setCaretPosition(arg0: number): void;
    setComponentOrientation(arg0: ComponentOrientation): void;
    setDisabledTextColor(arg0: Color): void;
    setDocument(arg0: Document): void;
    setDragEnabled(arg0: boolean): void;
    setDropLocation(arg0: TransferHandler$DropLocation, arg1: Object, arg2: boolean): Object;
    setDropMode(arg0: DropMode): void;
    setEditable(arg0: boolean): void;
    setFocusAccelerator(arg0: string): void;
    setHighlighter(arg0: Highlighter): void;
    // private setInputMethodCaretPosition(arg0: InputMethodEvent): void;
    setKeymap(arg0: Keymap): void;
    setMargin(arg0: Insets): void;
    setNavigationFilter(arg0: NavigationFilter): void;
    setSelectedTextColor(arg0: Color): void;
    setSelectionColor(arg0: Color): void;
    setSelectionEnd(arg0: number): void;
    setSelectionStart(arg0: number): void;
    setText(arg0: string): void;
    setUI(arg0: TextUI): void;
    // private shouldSynthensizeKeyEvents(): boolean;
    updateInputMap(arg0: Keymap, arg1: Keymap): void;
    updateUI(): void;
    viewToModel(arg0: Point): number;
    viewToModel2D(arg0: Point2D): number;
    write(arg0: Writer): void;
}