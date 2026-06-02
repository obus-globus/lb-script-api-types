import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefMenuModel$MenuItemType } from '../../../org/cef/callback/CefMenuModel$MenuItemType.d.ts'
import type { BoolRef } from '../../../org/cef/misc/BoolRef.d.ts'
import type { IntRef } from '../../../org/cef/misc/IntRef.d.ts'
export interface CefMenuModel extends Object{
    addCheckItem(arg0: number, arg1: string): boolean;
    addItem(arg0: number, arg1: string): boolean;
    addRadioItem(arg0: number, arg1: string, arg2: number): boolean;
    addSeparator(): boolean;
    addSubMenu(arg0: number, arg1: string): CefMenuModel;
    clear(): boolean;
    getAccelerator(arg0: number, arg1: IntRef, arg2: BoolRef, arg3: BoolRef, arg4: BoolRef): boolean;
    getAcceleratorAt(arg0: number, arg1: IntRef, arg2: BoolRef, arg3: BoolRef, arg4: BoolRef): boolean;
    getCommandIdAt(arg0: number): number;
    getCount(): number;
    getGroupId(arg0: number): number;
    getGroupIdAt(arg0: number): number;
    getIndexOf(arg0: number): number;
    getLabel(arg0: number): string;
    getLabelAt(arg0: number): string;
    getSubMenu(arg0: number): CefMenuModel;
    getSubMenuAt(arg0: number): CefMenuModel;
    getType(arg0: number): CefMenuModel$MenuItemType;
    getTypeAt(arg0: number): CefMenuModel$MenuItemType;
    hasAccelerator(arg0: number): boolean;
    hasAcceleratorAt(arg0: number): boolean;
    insertCheckItemAt(arg0: number, arg1: number, arg2: string): boolean;
    insertItemAt(arg0: number, arg1: number, arg2: string): boolean;
    insertRadioItemAt(arg0: number, arg1: number, arg2: string, arg3: number): boolean;
    insertSeparatorAt(arg0: number): boolean;
    insertSubMenuAt(arg0: number, arg1: number, arg2: string): CefMenuModel;
    isChecked(arg0: number): boolean;
    isCheckedAt(arg0: number): boolean;
    isEnabled(arg0: number): boolean;
    isEnabledAt(arg0: number): boolean;
    isVisible(arg0: number): boolean;
    isVisibleAt(arg0: number): boolean;
    remove(arg0: number): boolean;
    removeAccelerator(arg0: number): boolean;
    removeAcceleratorAt(arg0: number): boolean;
    removeAt(arg0: number): boolean;
    setAccelerator(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean): boolean;
    setAcceleratorAt(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean): boolean;
    setChecked(arg0: number, arg1: boolean): boolean;
    setCheckedAt(arg0: number, arg1: boolean): boolean;
    setCommandIdAt(arg0: number, arg1: number): boolean;
    setEnabled(arg0: number, arg1: boolean): boolean;
    setEnabledAt(arg0: number, arg1: boolean): boolean;
    setGroupId(arg0: number, arg1: number): boolean;
    setGroupIdAt(arg0: number, arg1: number): boolean;
    setLabel(arg0: number, arg1: string): boolean;
    setLabelAt(arg0: number, arg1: string): boolean;
    setVisible(arg0: number, arg1: boolean): boolean;
    setVisibleAt(arg0: number, arg1: boolean): boolean;
}