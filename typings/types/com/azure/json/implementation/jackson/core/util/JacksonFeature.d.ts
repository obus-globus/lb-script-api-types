import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface JacksonFeature extends Object{
    enabledByDefault(): boolean;
    enabledIn(arg0: number): boolean;
    getMask(): number;
}