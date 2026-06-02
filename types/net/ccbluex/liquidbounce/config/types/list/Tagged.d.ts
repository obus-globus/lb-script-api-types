import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Tagged extends Object{
    readonly tag: string;
    readonly tagAliases: string[];
}