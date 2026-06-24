import type { FabricMainWindow$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Component } from '../../../../../java/awt/Component.d.ts'
import type { Locale } from '../../../../../java/util/Locale.d.ts'
import type { JTree } from '../../../../../javax/swing/JTree.d.ts'
import type { DefaultTreeCellRenderer } from '../../../../../javax/swing/tree/DefaultTreeCellRenderer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricMainWindow$IconSet } from '../../../../../net/fabricmc/loader/impl/gui/FabricMainWindow$IconSet.d.ts'
export class FabricMainWindow$CustomTreeCellRenderer extends DefaultTreeCellRenderer {
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
    private constructor(arg0: FabricMainWindow$IconSet)
    constructor(arg0: FabricMainWindow$IconSet, arg1: FabricMainWindow$1)
    // private iconSet: FabricMainWindow$IconSet;
    getTreeCellRendererComponent(arg0: JTree, arg1: Object, arg2: boolean, arg3: boolean, arg4: boolean, arg5: number, arg6: boolean): Component;
}