import type { Object } from '../../../../java/lang/Object.d.ts'
export class MacAddressUtil extends Object {
    static bestAvailableMac(): number[];
    static defaultMachineId(): number[];
    static formatAddress(paramarg0: number[]): string;
    static parseMAC(paramarg0: string): number[];
    private constructor()
}