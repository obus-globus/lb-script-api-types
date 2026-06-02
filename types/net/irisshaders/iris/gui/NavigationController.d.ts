import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ShaderPackOptionList } from '../../../../net/irisshaders/iris/gui/element/ShaderPackOptionList.d.ts'
import type { OptionMenuContainer } from '../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuContainer.d.ts'
export class NavigationController extends Object {
    constructor(arg0: OptionMenuContainer)
    readonly currentScreen: string;
    // private history: string[];
    // private optionList: ShaderPackOptionList;
    back(): void;
    getCurrentScreen(): string;
    hasHistory(): boolean;
    open(arg0: string): void;
    rebuild(): void;
    refresh(): void;
    setActiveOptionList(arg0: ShaderPackOptionList): void;
}