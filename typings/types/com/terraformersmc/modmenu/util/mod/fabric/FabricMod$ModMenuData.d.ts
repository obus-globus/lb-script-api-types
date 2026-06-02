import type { Mod$Badge } from '../../../../../../com/terraformersmc/modmenu/util/mod/Mod$Badge.d.ts'
import type { FabricMod$ModMenuData$DummyParentData } from '../../../../../../com/terraformersmc/modmenu/util/mod/fabric/FabricMod$ModMenuData$DummyParentData.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FabricMod$ModMenuData extends Object {
    constructor(arg0: string[], arg1: Optional<string>, arg2: FabricMod$ModMenuData$DummyParentData, arg3: string)
    readonly badges: Mod$Badge[];
    readonly dummyParentData: FabricMod$ModMenuData$DummyParentData;
    readonly parent: Optional<string>;
    addClientBadge(arg0: boolean): void;
    addLibraryBadge(arg0: boolean): void;
    fillParentIfEmpty(arg0: string): void;
    getBadges(): Mod$Badge[];
    getDummyParentData(): FabricMod$ModMenuData$DummyParentData;
    getParent(): Optional<string>;
}