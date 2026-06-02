import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IGlobalPropertyService } from '../../../../org/spongepowered/asm/service/IGlobalPropertyService.d.ts'
import type { IPropertyKey } from '../../../../org/spongepowered/asm/service/IPropertyKey.d.ts'
export class GlobalProperties$Keys extends Object {
    static AGENTS: GlobalProperties$Keys;
    static CONFIGS: GlobalProperties$Keys;
    static FML_CORE_MOD_MANAGER: GlobalProperties$Keys;
    static FML_GET_IGNORED_MODS: GlobalProperties$Keys;
    static FML_GET_REPARSEABLE_COREMODS: GlobalProperties$Keys;
    static FML_LOAD_CORE_MOD: GlobalProperties$Keys;
    static INIT: GlobalProperties$Keys;
    static PLATFORM_MANAGER: GlobalProperties$Keys;
    static of(paramarg0: string): GlobalProperties$Keys;
    private constructor(arg0: string)
    // private key: IPropertyKey;
    // private name: string;
    resolve(arg0: IGlobalPropertyService): IPropertyKey;
    toString(): string;
}