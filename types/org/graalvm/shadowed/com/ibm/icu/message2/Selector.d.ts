import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface Selector extends Object{
    matches(value: Object, keys: string[], variableOptions: { [key: string]: Object }): string[];
}