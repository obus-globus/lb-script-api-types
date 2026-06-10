import type { Graphics } from '../../../java/awt/Graphics.d.ts'
import type { Point } from '../../../java/awt/Point.d.ts'
import type { Rectangle } from '../../../java/awt/Rectangle.d.ts'
import type { Clipboard } from '../../../java/awt/datatransfer/Clipboard.d.ts'
import type { ClipboardOwner } from '../../../java/awt/datatransfer/ClipboardOwner.d.ts'
import type { FocusEvent } from '../../../java/awt/event/FocusEvent.d.ts'
import type { FocusListener } from '../../../java/awt/event/FocusListener.d.ts'
import type { MouseEvent } from '../../../java/awt/event/MouseEvent.d.ts'
import type { MouseListener } from '../../../java/awt/event/MouseListener.d.ts'
import type { MouseMotionListener } from '../../../java/awt/event/MouseMotionListener.d.ts'
import type { Rectangle2D } from '../../../java/awt/geom/Rectangle2D.d.ts'
import type { ObjectInputStream } from '../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../java/io/ObjectOutputStream.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { Timer } from '../../../javax/swing/Timer.d.ts'
import type { ChangeEvent } from '../../../javax/swing/event/ChangeEvent.d.ts'
import type { ChangeListener } from '../../../javax/swing/event/ChangeListener.d.ts'
import type { EventListenerList } from '../../../javax/swing/event/EventListenerList.d.ts'
import type { Caret } from '../../../javax/swing/text/Caret.d.ts'
import type { DefaultCaret$Handler } from '../../../javax/swing/text/DefaultCaret$Handler.d.ts'
import type { Highlighter$HighlightPainter } from '../../../javax/swing/text/Highlighter$HighlightPainter.d.ts'
import type { JTextComponent } from '../../../javax/swing/text/JTextComponent.d.ts'
import type { NavigationFilter$FilterBypass } from '../../../javax/swing/text/NavigationFilter$FilterBypass.d.ts'
import type { Position$Bias } from '../../../javax/swing/text/Position$Bias.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultCaret extends Rectangle implements FocusListener, MouseListener, MouseMotionListener, Caret {
    static ALWAYS_UPDATE: number;
    static NEVER_UPDATE: number;
    static OUT_BOTTOM: number;
    static OUT_LEFT: number;
    static OUT_RIGHT: number;
    static OUT_TOP: number;
    static UPDATE_WHEN_ON_EDT: number;
    static intersect(paramarg0: Rectangle2D, paramarg1: Rectangle2D, paramarg2: Rectangle2D): void;
    static union(paramarg0: Rectangle2D, paramarg1: Rectangle2D, paramarg2: Rectangle2D): void;
    constructor()
    active: boolean;
    // private aspectRatio: number;
    // private caretWidth: number;
    // private changeEvent: ChangeEvent;
    // private component: JTextComponent;
    dot: number;
    dotBias: Position$Bias;
    // private dotLTR: boolean;
    // private filterBypass: NavigationFilter$FilterBypass;
    // private flagXPoints: number[];
    // private flagYPoints: number[];
    // private flasher: Timer;
    // private forceCaretPositionChange: boolean;
    // private handler: DefaultCaret$Handler;
    // private isBlinkRateSaved: boolean;
    // private listenerList: EventListenerList;
    magicCaretPosition: Point;
    mark: number;
    markBias: Position$Bias;
    // private markLTR: boolean;
    // private ownsSelection: boolean;
    // private savedBlinkRate: number;
    // private selectedWordEvent: MouseEvent;
    // private selectionTag: Object;
    selectionVisible: boolean;
    // private shouldHandleRelease: boolean;
    updatePolicy: number;
    visible: boolean;
    // private _contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    addChangeListener(arg0: ChangeListener): void;
    // private adjustCaret(arg0: MouseEvent): void;
    adjustCaretAndFocus(arg0: MouseEvent): void;
    // private adjustFocus(arg0: boolean): void;
    adjustVisibility(arg0: Rectangle): void;
    changeCaretPosition(arg0: number, arg1: Position$Bias): void;
    damage(arg0: Rectangle): void;
    deinstall(arg0: JTextComponent): void;
    // private ensureValidPosition(): void;
    equals(arg0: Object | null): boolean;
    fireStateChanged(): void;
    focusGained(arg0: FocusEvent): void;
    focusLost(arg0: FocusEvent): void;
    getBlinkRate(): number;
    getCaretWidth(arg0: number): number;
    getChangeListeners(): ChangeListener[];
    // private getClipboardOwner(): ClipboardOwner;
    getComponent(): JTextComponent;
    getDot(): number;
    getDotBias(): Position$Bias;
    // private getFilterBypass(): NavigationFilter$FilterBypass;
    getListeners<T extends EventListener>(arg0: Class<T>): T[];
    getMagicCaretPosition(): Point;
    getMark(): number;
    getMarkBias(): Position$Bias;
    getSelectionPainter(): Highlighter$HighlightPainter;
    // private getSystemSelection(): Clipboard;
    getUpdatePolicy(): number;
    guessBiasForOffset(arg0: number, arg1: Position$Bias, arg2: boolean): Position$Bias;
    handleMoveDot(arg0: number, arg1: Position$Bias): void;
    handleSetDot(arg0: number, arg1: Position$Bias): void;
    install(arg0: JTextComponent): void;
    isActive(): boolean;
    isDotLeftToRight(): boolean;
    isMarkLeftToRight(): boolean;
    isPositionLTR(arg0: number, arg1: Position$Bias): boolean;
    isSelectionVisible(): boolean;
    isVisible(): boolean;
    mouseClicked(arg0: MouseEvent): void;
    mouseDragged(arg0: MouseEvent): void;
    mouseEntered(arg0: MouseEvent): void;
    mouseExited(arg0: MouseEvent): void;
    mouseMoved(arg0: MouseEvent): void;
    mousePressed(arg0: MouseEvent): void;
    mouseReleased(arg0: MouseEvent): void;
    moveCaret(arg0: MouseEvent): void;
    moveDot(arg0: number): void;
    moveDot(arg0: number, arg1: Position$Bias): void;
    paint(arg0: Graphics): void;
    positionCaret(arg0: MouseEvent): void;
    // private readObject(arg0: ObjectInputStream): void;
    removeChangeListener(arg0: ChangeListener): void;
    repaint(): void;
    repaintNewCaret(): void;
    // private selectWord(arg0: MouseEvent): void;
    setBlinkRate(arg0: number): void;
    setDot(arg0: number): void;
    setDot(arg0: number, arg1: Position$Bias): void;
    setMagicCaretPosition(arg0: Point): void;
    setSelectionVisible(arg0: boolean): void;
    setUpdatePolicy(arg0: number): void;
    setVisible(arg0: boolean): void;
    toString(): string;
    // private updateSystemSelection(): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}