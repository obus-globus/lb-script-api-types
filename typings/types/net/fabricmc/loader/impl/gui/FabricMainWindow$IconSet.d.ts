import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Icon } from '../../../../../javax/swing/Icon.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricMainWindow$IconInfo } from '../../../../../net/fabricmc/loader/impl/gui/FabricMainWindow$IconInfo.d.ts'
export class FabricMainWindow$IconSet extends Object {
    constructor()
    // private icons: JavaMap<FabricMainWindow$IconInfo, JavaMap<number, Icon>>;
    get(arg0: FabricMainWindow$IconInfo): Icon;
}