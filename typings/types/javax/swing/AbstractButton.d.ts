import type { Component } from '../../java/awt/Component.d.ts'
import type { Graphics } from '../../java/awt/Graphics.d.ts'
import type { Image } from '../../java/awt/Image.d.ts'
import type { Insets } from '../../java/awt/Insets.d.ts'
import type { ItemSelectable } from '../../java/awt/ItemSelectable.d.ts'
import type { LayoutManager } from '../../java/awt/LayoutManager.d.ts'
import type { ActionEvent } from '../../java/awt/event/ActionEvent.d.ts'
import type { ActionListener } from '../../java/awt/event/ActionListener.d.ts'
import type { ItemEvent } from '../../java/awt/event/ItemEvent.d.ts'
import type { ItemListener } from '../../java/awt/event/ItemListener.d.ts'
import type { PropertyChangeListener } from '../../java/beans/PropertyChangeListener.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { AbstractButton$Handler } from '../../javax/swing/AbstractButton$Handler.d.ts'
import type { Action } from '../../javax/swing/Action.d.ts'
import type { ButtonModel } from '../../javax/swing/ButtonModel.d.ts'
import type { Icon } from '../../javax/swing/Icon.d.ts'
import type { JComponent } from '../../javax/swing/JComponent.d.ts'
import type { SwingConstants } from '../../javax/swing/SwingConstants.d.ts'
import type { ChangeEvent } from '../../javax/swing/event/ChangeEvent.d.ts'
import type { ChangeListener } from '../../javax/swing/event/ChangeListener.d.ts'
import type { ButtonUI } from '../../javax/swing/plaf/ButtonUI.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class AbstractButton extends JComponent implements ItemSelectable, SwingConstants {
    static ABORT: number;
    static ALLBITS: number;
    static BORDER_PAINTED_CHANGED_PROPERTY: string;
    static BOTTOM: number;
    static BOTTOM_ALIGNMENT: number;
    static CENTER: number;
    static CENTER_ALIGNMENT: number;
    static CONTENT_AREA_FILLED_CHANGED_PROPERTY: string;
    static DISABLED_ICON_CHANGED_PROPERTY: string;
    static DISABLED_SELECTED_ICON_CHANGED_PROPERTY: string;
    static EAST: number;
    static ERROR: number;
    static FOCUS_PAINTED_CHANGED_PROPERTY: string;
    static FRAMEBITS: number;
    static HEIGHT: number;
    static HORIZONTAL: number;
    static HORIZONTAL_ALIGNMENT_CHANGED_PROPERTY: string;
    static HORIZONTAL_TEXT_POSITION_CHANGED_PROPERTY: string;
    static ICON_CHANGED_PROPERTY: string;
    static LEADING: number;
    static LEFT: number;
    static LEFT_ALIGNMENT: number;
    static MARGIN_CHANGED_PROPERTY: string;
    static MNEMONIC_CHANGED_PROPERTY: string;
    static MODEL_CHANGED_PROPERTY: string;
    static NEXT: number;
    static NORTH: number;
    static NORTH_EAST: number;
    static NORTH_WEST: number;
    static PRESSED_ICON_CHANGED_PROPERTY: string;
    static PREVIOUS: number;
    static PROPERTIES: number;
    static RIGHT: number;
    static RIGHT_ALIGNMENT: number;
    static ROLLOVER_ENABLED_CHANGED_PROPERTY: string;
    static ROLLOVER_ICON_CHANGED_PROPERTY: string;
    static ROLLOVER_SELECTED_ICON_CHANGED_PROPERTY: string;
    static SELECTED_ICON_CHANGED_PROPERTY: string;
    static SOMEBITS: number;
    static SOUTH: number;
    static SOUTH_EAST: number;
    static SOUTH_WEST: number;
    static TEXT_CHANGED_PROPERTY: string;
    static TOOL_TIP_TEXT_KEY: string;
    static TOP: number;
    static TOP_ALIGNMENT: number;
    static TRAILING: number;
    static UNDEFINED_CONDITION: number;
    static VERTICAL: number;
    static VERTICAL_ALIGNMENT_CHANGED_PROPERTY: string;
    static VERTICAL_TEXT_POSITION_CHANGED_PROPERTY: string;
    static WEST: number;
    static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
    static WHEN_FOCUSED: number;
    static WHEN_IN_FOCUSED_WINDOW: number;
    static WIDTH: number;
    static getDefaultLocale(): Locale;
    static isLightweightComponent(paramarg0: Component): boolean;
    static setDefaultLocale(paramarg0: Locale): void;
    constructor()
    readonly action: Action;
    // private actionListener: ActionListener;
    // private actionPropertyChangeListener: PropertyChangeListener;
    // private borderPaintedSet: boolean;
    // private changeEvent: ChangeEvent;
    // private changeListener: ChangeListener;
    readonly contentAreaFilled: boolean;
    // private contentAreaFilledSet: boolean;
    // private defaultCapable: boolean;
    // private defaultIcon: Icon;
    // private defaultMargin: Insets;
    readonly disabledIcon: Icon;
    readonly disabledSelectedIcon: Icon;
    // private handler: AbstractButton$Handler;
    readonly hideActionText: boolean;
    readonly horizontalAlignment: number;
    readonly horizontalTextPosition: number;
    readonly iconTextGap: number;
    // private iconTextGapSet: boolean;
    // private itemListener: ItemListener;
    readonly margin: Insets;
    readonly mnemonic: number;
    // private mnemonicIndex: number;
    model: ButtonModel;
    readonly multiClickThreshhold: number;
    // private paintBorder: boolean;
    // private paintFocus: boolean;
    readonly pressedIcon: Icon;
    readonly rolloverEnabled: boolean;
    // private rolloverEnabledSet: boolean;
    readonly rolloverIcon: Icon;
    readonly rolloverSelectedIcon: Icon;
    readonly selectedIcon: Icon;
    // private setLayout: boolean;
    readonly text: string;
    readonly verticalAlignment: number;
    readonly verticalTextPosition: number;
    actionPropertyChanged(arg0: Action, arg1: string): void;
    addActionListener(arg0: ActionListener): void;
    addChangeListener(arg0: ChangeListener): void;
    addImpl(arg0: Component, arg1: Object, arg2: number): void;
    addItemListener(arg0: ItemListener): void;
    checkHorizontalKey(arg0: number, arg1: string): number;
    checkVerticalKey(arg0: number, arg1: string): number;
    clientPropertyChanged(arg0: Object, arg1: Object, arg2: Object): void;
    configurePropertiesFromAction(arg0: Action): void;
    createActionListener(): ActionListener;
    createActionPropertyChangeListener(arg0: Action): PropertyChangeListener;
    createActionPropertyChangeListener0(arg0: Action): PropertyChangeListener;
    createChangeListener(): ChangeListener;
    createItemListener(): ItemListener;
    doClick(): void;
    doClick(arg0: number): void;
    fireActionPerformed(arg0: ActionEvent): void;
    fireItemStateChanged(arg0: ItemEvent): void;
    fireStateChanged(): void;
    getAction(): Action;
    getActionCommand(): string;
    getActionListeners(): ActionListener[];
    getChangeListeners(): ChangeListener[];
    getDisabledIcon(): Icon;
    getDisabledSelectedIcon(): Icon;
    getDisplayedMnemonicIndex(): number;
    // private getHandler(): AbstractButton$Handler;
    getHideActionText(): boolean;
    getHorizontalAlignment(): number;
    getHorizontalTextPosition(): number;
    getIcon(): Icon;
    getIconTextGap(): number;
    getItemListeners(): ItemListener[];
    getLabel(): string;
    getMargin(): Insets;
    getMnemonic(): number;
    getModel(): ButtonModel;
    getMultiClickThreshhold(): number;
    getPressedIcon(): Icon;
    getRolloverIcon(): Icon;
    getRolloverSelectedIcon(): Icon;
    getSelectedIcon(): Icon;
    getSelectedObjects(): Object[];
    getText(): string;
    getUI(): ButtonUI;
    getVerticalAlignment(): number;
    getVerticalTextPosition(): number;
    imageUpdate(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
    init(arg0: string, arg1: Icon): void;
    isBorderPainted(): boolean;
    isContentAreaFilled(): boolean;
    isFocusPainted(): boolean;
    // private isListener(arg0: Class<Object>, arg1: ActionListener): boolean;
    isRolloverEnabled(): boolean;
    isSelected(): boolean;
    largeIconChanged(arg0: Action): void;
    paintBorder(arg0: Graphics): void;
    paramString(): string;
    removeActionListener(arg0: ActionListener): void;
    removeChangeListener(arg0: ChangeListener): void;
    removeItemListener(arg0: ItemListener): void;
    removeNotify(): void;
    setAction(arg0: Action): void;
    setActionCommand(arg0: string): void;
    // private setActionCommandFromAction(arg0: Action): void;
    setBorderPainted(arg0: boolean): void;
    setContentAreaFilled(arg0: boolean): void;
    setDisabledIcon(arg0: Icon): void;
    setDisabledSelectedIcon(arg0: Icon): void;
    setDisplayedMnemonicIndex(arg0: number): void;
    // private setDisplayedMnemonicIndexFromAction(arg0: Action, arg1: boolean): void;
    setEnabled(arg0: boolean): void;
    setFocusPainted(arg0: boolean): void;
    setHideActionText(arg0: boolean): void;
    setHorizontalAlignment(arg0: number): void;
    setHorizontalTextPosition(arg0: number): void;
    setIcon(arg0: Icon): void;
    setIconFromAction(arg0: Action): void;
    setIconTextGap(arg0: number): void;
    setLabel(arg0: string): void;
    setLayout(arg0: LayoutManager): void;
    setMargin(arg0: Insets): void;
    setMnemonic(arg0: string): void;
    setMnemonic(arg0: number): void;
    // private setMnemonicFromAction(arg0: Action): void;
    setModel(arg0: ButtonModel): void;
    setMultiClickThreshhold(arg0: number): void;
    setPressedIcon(arg0: Icon): void;
    setRolloverEnabled(arg0: boolean): void;
    setRolloverIcon(arg0: Icon): void;
    setRolloverSelectedIcon(arg0: Icon): void;
    setSelected(arg0: boolean): void;
    // private setSelectedFromAction(arg0: Action): void;
    setSelectedIcon(arg0: Icon): void;
    setText(arg0: string): void;
    // private setTextFromAction(arg0: Action, arg1: boolean): void;
    setUI(arg0: ButtonUI): void;
    setUIProperty(arg0: string, arg1: Object): void;
    setVerticalAlignment(arg0: number): void;
    setVerticalTextPosition(arg0: number): void;
    shouldUpdateSelectedStateFromAction(): boolean;
    smallIconChanged(arg0: Action): void;
    // private updateDisplayedMnemonicIndex(arg0: string, arg1: number): void;
    // private updateMnemonicProperties(): void;
    updateUI(): void;
}