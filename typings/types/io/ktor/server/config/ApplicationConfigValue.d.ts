import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ApplicationConfigValue$Type } from '../../../../io/ktor/server/config/ApplicationConfigValue$Type.d.ts'
import type { TypeInfo } from '../../../../io/ktor/util/reflect/TypeInfo.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ApplicationConfigValue extends Object{
    readonly type: ApplicationConfigValue$Type;
    getAs(type: TypeInfo): Object | null;
    getList(): string[];
    getMap(): JavaMap<string, Object | null>;
    getString(): string;
}