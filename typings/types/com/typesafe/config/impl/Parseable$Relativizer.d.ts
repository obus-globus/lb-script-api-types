import type { ConfigParseable } from '../../../../com/typesafe/config/ConfigParseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Parseable$Relativizer extends Object{
    relativeTo(arg0: string): ConfigParseable;
}