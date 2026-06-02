import type { DataInputStream } from '../../../../../java/io/DataInputStream.d.ts'
import type { DataOutputStream } from '../../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricStatusTree$FabricBasicButtonType } from '../../../../../net/fabricmc/loader/impl/gui/FabricStatusTree$FabricBasicButtonType.d.ts'
import type { FabricStatusTree$FabricStatusButton } from '../../../../../net/fabricmc/loader/impl/gui/FabricStatusTree$FabricStatusButton.d.ts'
import type { FabricStatusTree$FabricStatusTab } from '../../../../../net/fabricmc/loader/impl/gui/FabricStatusTree$FabricStatusTab.d.ts'
export class FabricStatusTree extends Object {
    static ICON_TYPE_DEFAULT: string;
    static ICON_TYPE_FABRIC: string;
    static ICON_TYPE_FABRIC_JAR_FILE: string;
    static ICON_TYPE_FABRIC_JSON: string;
    static ICON_TYPE_FOLDER: string;
    static ICON_TYPE_JAR_FILE: string;
    static ICON_TYPE_JAVA_CLASS: string;
    static ICON_TYPE_JAVA_PACKAGE: string;
    static ICON_TYPE_JSON: string;
    static ICON_TYPE_LESSER_CROSS: string;
    static ICON_TYPE_PACKAGE: string;
    static ICON_TYPE_TICK: string;
    static ICON_TYPE_UNKNOWN_FILE: string;
    constructor(arg0: DataInputStream)
    constructor(arg0: string, arg1: string)
    buttons: FabricStatusTree$FabricStatusButton[];
    mainText: string;
    tabs: FabricStatusTree$FabricStatusTab[];
    title: string;
    addButton(arg0: string, arg1: FabricStatusTree$FabricBasicButtonType): FabricStatusTree$FabricStatusButton;
    addTab(arg0: string): FabricStatusTree$FabricStatusTab;
    writeTo(arg0: DataOutputStream): void;
}