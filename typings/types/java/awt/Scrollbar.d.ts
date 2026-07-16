import type { AWTEvent } from '../../java/awt/AWTEvent.d.ts'
import type { Adjustable } from '../../java/awt/Adjustable.d.ts'
import type { Component } from '../../java/awt/Component.d.ts'
import type { AdjustmentEvent } from '../../java/awt/event/AdjustmentEvent.d.ts'
import type { AdjustmentListener } from '../../java/awt/event/AdjustmentListener.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { EventListener } from '../../java/util/EventListener.d.ts'
import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
export class Scrollbar extends Component implements Adjustable, Accessible {
    static ABORT: number;
    static ALLBITS: number;
    static BOTTOM_ALIGNMENT: number;
    static CENTER_ALIGNMENT: number;
    static ERROR: number;
    static FRAMEBITS: number;
    static HEIGHT: number;
    static HORIZONTAL: number;
    static LEFT_ALIGNMENT: number;
    static NO_ORIENTATION: number;
    static PROPERTIES: number;
    static RIGHT_ALIGNMENT: number;
    static SOMEBITS: number;
    static TOP_ALIGNMENT: number;
    static VERTICAL: number;
    static WIDTH: number;
    constructor()
    constructor(arg0: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number)
    // private adjustmentListener: AdjustmentListener;
    // private isAdjusting: boolean;
    lineIncrement: number;
    maximum: number;
    minimum: number;
    orientation: number;
    pageIncrement: number;
    // private scrollbarSerializedDataVersion: number;
    value: number;
    visibleAmount: number;
    addAdjustmentListener(arg0: AdjustmentListener): void;
    addNotify(): void;
    constructComponentName(): string;
    eventEnabled(arg0: AWTEvent): boolean;
    getAccessibleContext(): AccessibleContext;
    getAdjustmentListeners(): AdjustmentListener[];
    getBlockIncrement(): number;
    getLineIncrement(): number;
    getListeners<T extends EventListener>(arg0: Class<T>): T[];
    getMaximum(): number;
    getMinimum(): number;
    getOrientation(): number;
    getPageIncrement(): number;
    getUnitIncrement(): number;
    getValue(): number;
    getValueIsAdjusting(): boolean;
    getVisible(): number;
    getVisibleAmount(): number;
    paramString(): string;
    processAdjustmentEvent(arg0: AdjustmentEvent): void;
    processEvent(arg0: AWTEvent): void;
    // private readObject(arg0: ObjectInputStream): void;
    removeAdjustmentListener(arg0: AdjustmentListener): void;
    setBlockIncrement(arg0: number): void;
    setLineIncrement(arg0: number): void;
    setMaximum(arg0: number): void;
    setMinimum(arg0: number): void;
    setOrientation(arg0: number): void;
    setPageIncrement(arg0: number): void;
    setUnitIncrement(arg0: number): void;
    setValue(arg0: number): void;
    setValueIsAdjusting(arg0: boolean): void;
    setValues(arg0: number, arg1: number, arg2: number, arg3: number): void;
    setVisibleAmount(arg0: number): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}