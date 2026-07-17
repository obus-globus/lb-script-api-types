import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ISyntheticClassInfo } from '../../../../../org/spongepowered/asm/service/ISyntheticClassInfo.d.ts'
import type { ISyntheticClassRegistry } from '../../../../../org/spongepowered/asm/service/ISyntheticClassRegistry.d.ts'
export class SyntheticClassRegistry extends Object implements ISyntheticClassRegistry {
    constructor()
    // private classes: JavaMap<string, ISyntheticClassInfo>;
    findSyntheticClass(arg0: string): ISyntheticClassInfo;
    registerSyntheticClass(arg0: ISyntheticClassInfo): void;
}