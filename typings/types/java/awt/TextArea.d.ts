import type { Dimension } from '../../java/awt/Dimension.d.ts'
import type { TextComponent } from '../../java/awt/TextComponent.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
export class TextArea extends TextComponent {
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
    static SCROLLBARS_BOTH: number;
    static SCROLLBARS_HORIZONTAL_ONLY: number;
    static SCROLLBARS_NONE: number;
    static SCROLLBARS_VERTICAL_ONLY: number;
    static SOMEBITS: number;
    static TOP_ALIGNMENT: number;
    static WIDTH: number;
    constructor()
    constructor(arg0: number, arg1: number)
    constructor(arg0: string)
    constructor(arg0: string, arg1: number, arg2: number)
    constructor(arg0: string, arg1: number, arg2: number, arg3: number)
    columns: number;
    rows: number;
    readonly scrollbarVisibility: number;
    // private textAreaSerializedDataVersion: number;
    addNotify(): void;
    append(arg0: string): void;
    appendText(arg0: string): void;
    constructComponentName(): string;
    getAccessibleContext(): AccessibleContext;
    getColumns(): number;
    getMinimumSize(): Dimension;
    getMinimumSize(arg0: number, arg1: number): Dimension;
    getPreferredSize(): Dimension;
    getPreferredSize(arg0: number, arg1: number): Dimension;
    getRows(): number;
    getScrollbarVisibility(): number;
    insert(arg0: string, arg1: number): void;
    insertText(arg0: string, arg1: number): void;
    minimumSize(): Dimension;
    minimumSize(arg0: number, arg1: number): Dimension;
    paramString(): string;
    preferredSize(): Dimension;
    preferredSize(arg0: number, arg1: number): Dimension;
    // private readObject(arg0: ObjectInputStream): void;
    replaceRange(arg0: string, arg1: number, arg2: number): void;
    replaceText(arg0: string, arg1: number, arg2: number): void;
    setColumns(arg0: number): void;
    setRows(arg0: number): void;
}