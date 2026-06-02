import type { Image } from '../../java/awt/Image.d.ts'
import type { Point } from '../../java/awt/Point.d.ts'
import type { Clipboard } from '../../java/awt/datatransfer/Clipboard.d.ts'
import type { DataFlavor } from '../../java/awt/datatransfer/DataFlavor.d.ts'
import type { Transferable } from '../../java/awt/datatransfer/Transferable.d.ts'
import type { InputEvent } from '../../java/awt/event/InputEvent.d.ts'
import type { PropertyDescriptor } from '../../java/beans/PropertyDescriptor.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Action } from '../../javax/swing/Action.d.ts'
import type { Icon } from '../../javax/swing/Icon.d.ts'
import type { JComponent } from '../../javax/swing/JComponent.d.ts'
import type { TransferHandler$TransferSupport } from '../../javax/swing/TransferHandler$TransferSupport.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class TransferHandler extends Object implements Serializable {
    static COPY: number;
    static COPY_OR_MOVE: number;
    static LINK: number;
    static MOVE: number;
    static NONE: number;
    static getCopyAction(): Action;
    static getCutAction(): Action;
    static getPasteAction(): Action;
    constructor()
    constructor(arg0: string)
    readonly dragImage: Image;
    readonly dragImageOffset: Point;
    // private propertyName: string;
    canImport(arg0: JComponent, arg1: DataFlavor[]): boolean;
    canImport(arg0: TransferHandler$TransferSupport): boolean;
    createTransferable(arg0: JComponent): Transferable;
    exportAsDrag(arg0: JComponent, arg1: InputEvent, arg2: number): void;
    exportDone(arg0: JComponent, arg1: Transferable, arg2: number): void;
    exportToClipboard(arg0: JComponent, arg1: Clipboard, arg2: number): void;
    getDragImage(): Image;
    getDragImageOffset(): Point;
    // private getPropertyDataFlavor(arg0: Class<Object>, arg1: DataFlavor[]): DataFlavor;
    // private getPropertyDescriptor(arg0: JComponent): PropertyDescriptor;
    getSourceActions(arg0: JComponent): number;
    getVisualRepresentation(arg0: Transferable): Icon;
    importData(arg0: JComponent, arg1: Transferable): boolean;
    importData(arg0: TransferHandler$TransferSupport): boolean;
    setDragImage(arg0: Image): void;
    setDragImageOffset(arg0: Point): void;
}