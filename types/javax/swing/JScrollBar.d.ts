import type { Adjustable } from '../../java/awt/Adjustable.d.ts'
import type { Component } from '../../java/awt/Component.d.ts'
import type { Dimension } from '../../java/awt/Dimension.d.ts'
import type { AdjustmentListener } from '../../java/awt/event/AdjustmentListener.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
import type { BoundedRangeModel } from '../../javax/swing/BoundedRangeModel.d.ts'
import type { JComponent } from '../../javax/swing/JComponent.d.ts'
import type { ChangeListener } from '../../javax/swing/event/ChangeListener.d.ts'
import type { ScrollBarUI } from '../../javax/swing/plaf/ScrollBarUI.d.ts'
export class JScrollBar extends JComponent implements Adjustable, Accessible {
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
    static TOOL_TIP_TEXT_KEY: string;
    static TOP_ALIGNMENT: number;
    static UNDEFINED_CONDITION: number;
    static VERTICAL: number;
    static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
    static WHEN_FOCUSED: number;
    static WHEN_IN_FOCUSED_WINDOW: number;
    static WIDTH: number;
    static getDefaultLocale(): Locale;
    static isLightweightComponent(paramarg0: Component): boolean;
    static setDefaultLocale(paramarg0: Locale): void;
    constructor()
    constructor(arg0: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number)
    blockIncrement: number;
    // private fwdAdjustmentEvents: ChangeListener;
    model: BoundedRangeModel;
    orientation: number;
    unitIncrement: number;
    addAdjustmentListener(arg0: AdjustmentListener): void;
    // private checkOrientation(arg0: number): void;
    fireAdjustmentValueChanged(arg0: number, arg1: number, arg2: number): void;
    // private fireAdjustmentValueChanged(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
    getAccessibleContext(): AccessibleContext;
    getAdjustmentListeners(): AdjustmentListener[];
    getBlockIncrement(): number;
    getBlockIncrement(arg0: number): number;
    getMaximum(): number;
    getMaximumSize(): Dimension;
    getMinimum(): number;
    getMinimumSize(): Dimension;
    getModel(): BoundedRangeModel;
    getOrientation(): number;
    getUI(): ScrollBarUI;
    getUIClassID(): string;
    getUnitIncrement(): number;
    getUnitIncrement(arg0: number): number;
    getValue(): number;
    getValueIsAdjusting(): boolean;
    getVisibleAmount(): number;
    paramString(): string;
    removeAdjustmentListener(arg0: AdjustmentListener): void;
    setBlockIncrement(arg0: number): void;
    setEnabled(arg0: boolean): void;
    setMaximum(arg0: number): void;
    setMaximumSize(arg0: Dimension): void;
    setMinimum(arg0: number): void;
    setMinimumSize(arg0: Dimension): void;
    setModel(arg0: BoundedRangeModel): void;
    setOrientation(arg0: number): void;
    setUI(arg0: ScrollBarUI): void;
    setUnitIncrement(arg0: number): void;
    setValue(arg0: number): void;
    setValueIsAdjusting(arg0: boolean): void;
    setValues(arg0: number, arg1: number, arg2: number, arg3: number): void;
    setVisibleAmount(arg0: number): void;
    updateUI(): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}