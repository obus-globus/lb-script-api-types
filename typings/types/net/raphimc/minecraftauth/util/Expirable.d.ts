import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Expirable extends Object{
    getExpireTimeMs(): number;
    isExpired(): boolean;
}