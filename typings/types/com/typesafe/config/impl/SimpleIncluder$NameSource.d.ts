import type { ConfigParseOptions } from '../../../../com/typesafe/config/ConfigParseOptions.d.ts'
import type { ConfigParseable } from '../../../../com/typesafe/config/ConfigParseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface SimpleIncluder$NameSource extends Object{
    nameToParseable(arg0: string, arg1: ConfigParseOptions): ConfigParseable;
}