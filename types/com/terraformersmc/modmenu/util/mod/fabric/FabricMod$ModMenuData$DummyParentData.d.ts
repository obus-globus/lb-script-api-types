import type { Mod$Badge } from '../../../../../../com/terraformersmc/modmenu/util/mod/Mod$Badge.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FabricMod$ModMenuData$DummyParentData extends Object {
    constructor(arg0: string, arg1: Optional<string>, arg2: Optional<string>, arg3: Optional<string>, arg4: string[])
    readonly badges: Mod$Badge[];
    readonly description: Optional<string>;
    readonly icon: Optional<string>;
    readonly id: string;
    readonly name: Optional<string>;
    getBadges(): Mod$Badge[];
    getDescription(): Optional<string>;
    getIcon(): Optional<string>;
    getId(): string;
    getName(): Optional<string>;
}