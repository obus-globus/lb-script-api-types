import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ProfileSet } from '../../../../../../net/irisshaders/iris/shaderpack/option/ProfileSet.d.ts'
import type { ShaderPackOptions } from '../../../../../../net/irisshaders/iris/shaderpack/option/ShaderPackOptions.d.ts'
import type { OptionMenuElement } from '../../../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuElement.d.ts'
import type { OptionMenuElementScreen } from '../../../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuElementScreen.d.ts'
import type { OptionMenuOptionElement } from '../../../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuOptionElement.d.ts'
import type { ShaderProperties } from '../../../../../../net/irisshaders/iris/shaderpack/properties/ShaderProperties.d.ts'
export class OptionMenuContainer extends Object {
    constructor(arg0: ShaderProperties, arg1: ShaderPackOptions, arg2: ProfileSet)
    mainScreen: OptionMenuElementScreen;
    readonly profiles: ProfileSet;
    subScreens: JavaMap<string, OptionMenuElementScreen>;
    // private unusedOptionDumpQueue: JavaMap<OptionMenuElement[], number>;
    // private unusedOptions: string[];
    // private usedOptionElements: OptionMenuOptionElement[];
    // private usedOptions: string[];
    getProfiles(): ProfileSet;
    notifyOptionAdded(arg0: string, arg1: OptionMenuOptionElement): void;
    queueForUnusedOptionDump(arg0: number, arg1: OptionMenuElement[]): void;
}