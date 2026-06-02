import type { URL } from '../../../../java/net/URL.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Source$Data extends Object{
    data(): string;
    isEvalCode(): boolean;
    lastModified(): number;
    length(): number;
    url(): URL;
}