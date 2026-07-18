import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface Selector extends Object{
    matches(value: Object, keys: string[], variableOptions: JavaMap<string, Object>): string[];
}