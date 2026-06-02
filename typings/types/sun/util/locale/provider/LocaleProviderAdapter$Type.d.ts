import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class LocaleProviderAdapter$Type extends Enum<LocaleProviderAdapter$Type> {
    static CLDR: LocaleProviderAdapter$Type;
    static FALLBACK: LocaleProviderAdapter$Type;
    static HOST: LocaleProviderAdapter$Type;
    static JRE: LocaleProviderAdapter$Type;
    static SPI: LocaleProviderAdapter$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LocaleProviderAdapter$Type;
    static values(): (Object | null)[];
    private constructor(arg2: string)
    private constructor(arg2: string, arg3: string, arg4: string)
    // private CLASSNAME: string;
    // private TEXT_RESOURCES_PACKAGE: string;
    // private UTIL_RESOURCES_PACKAGE: string;
    getAdapterClassName(): string;
    getTextResourcesPackage(): string;
    getUtilResourcesPackage(): string;
    name(): "JRE" | "CLDR" | "SPI" | "HOST" | "FALLBACK";
}