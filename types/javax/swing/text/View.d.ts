import type { Container } from '../../../java/awt/Container.d.ts'
import type { Graphics } from '../../../java/awt/Graphics.d.ts'
import type { Shape } from '../../../java/awt/Shape.d.ts'
import type { SwingConstants } from '../../../javax/swing/SwingConstants.d.ts'
import type { DocumentEvent } from '../../../javax/swing/event/DocumentEvent.d.ts'
import type { DocumentEvent$ElementChange } from '../../../javax/swing/event/DocumentEvent$ElementChange.d.ts'
import type { AttributeSet } from '../../../javax/swing/text/AttributeSet.d.ts'
import type { Document } from '../../../javax/swing/text/Document.d.ts'
import type { Element } from '../../../javax/swing/text/Element.d.ts'
import type { Position$Bias } from '../../../javax/swing/text/Position$Bias.d.ts'
import type { ViewFactory } from '../../../javax/swing/text/ViewFactory.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class View extends Object implements SwingConstants {
    static BOTTOM: number;
    static BadBreakWeight: number;
    static CENTER: number;
    static EAST: number;
    static ExcellentBreakWeight: number;
    static ForcedBreakWeight: number;
    static GoodBreakWeight: number;
    static HORIZONTAL: number;
    static LEADING: number;
    static LEFT: number;
    static NEXT: number;
    static NORTH: number;
    static NORTH_EAST: number;
    static NORTH_WEST: number;
    static PREVIOUS: number;
    static RIGHT: number;
    static SOUTH: number;
    static SOUTH_EAST: number;
    static SOUTH_WEST: number;
    static TOP: number;
    static TRAILING: number;
    static VERTICAL: number;
    static WEST: number;
    static X_AXIS: number;
    static Y_AXIS: number;
    constructor(arg0: Element)
    // private elem: Element;
    // private firstUpdateIndex: number;
    // private lastUpdateIndex: number;
    readonly parent: View;
    append(arg0: View): void;
    breakView(arg0: number, arg1: number, arg2: number, arg3: number): View;
    calculateUpdateIndexes(arg0: DocumentEvent): void;
    changedUpdate(arg0: DocumentEvent, arg1: Shape, arg2: ViewFactory): void;
    createFragment(arg0: number, arg1: number): View;
    forwardUpdate(arg0: DocumentEvent$ElementChange, arg1: DocumentEvent, arg2: Shape, arg3: ViewFactory): void;
    forwardUpdateToView(arg0: View, arg1: DocumentEvent, arg2: Shape, arg3: ViewFactory): void;
    getAlignment(arg0: number): number;
    getAttributes(): AttributeSet;
    getBreakWeight(arg0: number, arg1: number, arg2: number): number;
    getChildAllocation(arg0: number, arg1: Shape): Shape;
    getContainer(): Container;
    getDocument(): Document;
    getElement(): Element;
    getEndOffset(): number;
    getGraphics(): Graphics;
    getMaximumSpan(arg0: number): number;
    getMinimumSpan(arg0: number): number;
    getNextVisualPositionFrom(arg0: number, arg1: Position$Bias, arg2: Shape, arg3: number, arg4: Position$Bias[]): number;
    getParent(): View;
    getPreferredSpan(arg0: number): number;
    getResizeWeight(arg0: number): number;
    getStartOffset(): number;
    getToolTipText(arg0: number, arg1: number, arg2: Shape): string;
    getView(arg0: number): View;
    getViewCount(): number;
    getViewFactory(): ViewFactory;
    getViewIndex(arg0: number, arg1: number, arg2: Shape): number;
    getViewIndex(arg0: number, arg1: Position$Bias): number;
    insert(arg0: number, arg1: View): void;
    insertUpdate(arg0: DocumentEvent, arg1: Shape, arg2: ViewFactory): void;
    isVisible(): boolean;
    modelToView(arg0: number, arg1: Shape): Shape;
    modelToView(arg0: number, arg1: Shape, arg2: Position$Bias): Shape;
    modelToView(arg0: number, arg1: Position$Bias, arg2: number, arg3: Position$Bias, arg4: Shape): Shape;
    paint(arg0: Graphics, arg1: Shape): void;
    preferenceChanged(arg0: View, arg1: boolean, arg2: boolean): void;
    remove(arg0: number): void;
    removeAll(): void;
    removeUpdate(arg0: DocumentEvent, arg1: Shape, arg2: ViewFactory): void;
    replace(arg0: number, arg1: number, arg2: View[]): void;
    setParent(arg0: View): void;
    setSize(arg0: number, arg1: number): void;
    updateAfterChange(): void;
    updateChildren(arg0: DocumentEvent$ElementChange, arg1: DocumentEvent, arg2: ViewFactory): boolean;
    updateLayout(arg0: DocumentEvent$ElementChange, arg1: DocumentEvent, arg2: Shape): void;
    viewToModel(arg0: number, arg1: number, arg2: Shape): number;
    viewToModel(arg0: number, arg1: number, arg2: Shape, arg3: Position$Bias[]): number;
}