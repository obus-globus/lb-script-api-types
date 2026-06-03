import type { Color } from '../../../java/awt/Color.d.ts'
import type { Component } from '../../../java/awt/Component.d.ts'
import type { Dimension } from '../../../java/awt/Dimension.d.ts'
import type { Font } from '../../../java/awt/Font.d.ts'
import type { Graphics } from '../../../java/awt/Graphics.d.ts'
import type { Rectangle } from '../../../java/awt/Rectangle.d.ts'
import type { Locale } from '../../../java/util/Locale.d.ts'
import type { Icon } from '../../../javax/swing/Icon.d.ts'
import type { JLabel } from '../../../javax/swing/JLabel.d.ts'
import type { JTree } from '../../../javax/swing/JTree.d.ts'
import type { TreeCellRenderer } from '../../../javax/swing/tree/TreeCellRenderer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultTreeCellRenderer extends JLabel implements TreeCellRenderer {
    static ABORT: number;
    static ALLBITS: number;
    static BOTTOM: number;
    static BOTTOM_ALIGNMENT: number;
    static CENTER: number;
    static CENTER_ALIGNMENT: number;
    static EAST: number;
    static ERROR: number;
    static FRAMEBITS: number;
    static HEIGHT: number;
    static HORIZONTAL: number;
    static LEADING: number;
    static LEFT: number;
    static LEFT_ALIGNMENT: number;
    static NEXT: number;
    static NORTH: number;
    static NORTH_EAST: number;
    static NORTH_WEST: number;
    static PREVIOUS: number;
    static PROPERTIES: number;
    static RIGHT: number;
    static RIGHT_ALIGNMENT: number;
    static SOMEBITS: number;
    static SOUTH: number;
    static SOUTH_EAST: number;
    static SOUTH_WEST: number;
    static TOOL_TIP_TEXT_KEY: string;
    static TOP: number;
    static TOP_ALIGNMENT: number;
    static TRAILING: number;
    static UNDEFINED_CONDITION: number;
    static VERTICAL: number;
    static WEST: number;
    static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
    static WHEN_FOCUSED: number;
    static WHEN_IN_FOCUSED_WINDOW: number;
    static WIDTH: number;
    static getDefaultLocale(): Locale;
    static isLightweightComponent(paramarg0: Component): boolean;
    static setDefaultLocale(paramarg0: Locale): void;
    constructor()
    backgroundNonSelectionColor: Color;
    backgroundSelectionColor: Color;
    borderSelectionColor: Color;
    closedIcon: Icon;
    // private drawDashedFocusIndicator: boolean;
    // private drawsFocusBorderAroundIcon: boolean;
    // private fillBackground: boolean;
    // private focusBGColor: Color;
    // private hasFocus: boolean;
    // private inited: boolean;
    // private isDropCell: boolean;
    leafIcon: Icon;
    openIcon: Icon;
    // private selected: boolean;
    textNonSelectionColor: Color;
    textSelectionColor: Color;
    // private tree: JTree;
    // private treeBGColor: Color;
    firePropertyChange(arg0: string, arg1: Object, arg2: Object): void;
    firePropertyChange(arg0: string, arg1: boolean, arg2: boolean): void;
    firePropertyChange(arg0: string, arg1: number, arg2: number): void;
    firePropertyChange(arg0: string, arg1: string, arg2: string): void;
    firePropertyChange(arg0: string, arg1: number, arg2: number): void;
    firePropertyChange(arg0: string, arg1: number, arg2: number): void;
    firePropertyChange(arg0: string, arg1: number, arg2: number): void;
    firePropertyChange(arg0: string, arg1: number, arg2: number): void;
    firePropertyChange(arg0: string, arg1: number, arg2: number): void;
    getBackgroundNonSelectionColor(): Color;
    getBackgroundSelectionColor(): Color;
    getBorderSelectionColor(): Color;
    getClosedIcon(): Icon;
    getDefaultClosedIcon(): Icon;
    getDefaultLeafIcon(): Icon;
    getDefaultOpenIcon(): Icon;
    getFont(): Font;
    // private getLabelStart(): number;
    getLeafIcon(): Icon;
    getOpenIcon(): Icon;
    getPreferredSize(): Dimension;
    getTextNonSelectionColor(): Color;
    getTextSelectionColor(): Color;
    getTreeCellRendererComponent(arg0: JTree, arg1: Object, arg2: boolean, arg3: boolean, arg4: boolean, arg5: number, arg6: boolean): Component;
    invalidate(): void;
    paint(arg0: Graphics): void;
    // private paintFocus(arg0: Graphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Color): void;
    repaint(): void;
    repaint(arg0: Rectangle): void;
    repaint(arg0: number, arg1: number, arg2: number, arg3: number): void;
    repaint(arg0: number): void;
    repaint(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
    revalidate(): void;
    setBackground(arg0: Color): void;
    setBackgroundNonSelectionColor(arg0: Color): void;
    setBackgroundSelectionColor(arg0: Color): void;
    setBorderSelectionColor(arg0: Color): void;
    setClosedIcon(arg0: Icon): void;
    setFont(arg0: Font): void;
    setLeafIcon(arg0: Icon): void;
    setOpenIcon(arg0: Icon): void;
    setTextNonSelectionColor(arg0: Color): void;
    setTextSelectionColor(arg0: Color): void;
    updateUI(): void;
    validate(): void;
}