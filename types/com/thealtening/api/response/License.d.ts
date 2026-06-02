import type { Object } from '../../../../java/lang/Object.d.ts'
export class License extends Object {
    constructor()
    readonly expiryDate: string;
    readonly premium: boolean;
    readonly premiumName: string;
    readonly username: string;
    equals(arg0: Object | null): boolean;
    getExpiryDate(): string;
    getPremiumName(): string;
    getUsername(): string;
    isPremium(): boolean;
    toString(): string;
}