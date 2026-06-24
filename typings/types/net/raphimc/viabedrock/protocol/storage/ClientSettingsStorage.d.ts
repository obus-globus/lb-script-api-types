import type { StorableObject } from '../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ClientSettingsStorage extends Record implements StorableObject {
    constructor(locale: string, viewDistance: number, chatVisibility: number, chatColors: boolean, skinParts: number, mainHand: number, textFiltering: boolean, allowsListing: boolean, particleStatus: number)
    // private allowsListing: boolean;
    // private chatColors: boolean;
    // private chatVisibility: number;
    // private locale: string;
    // private mainHand: number;
    // private particleStatus: number;
    // private skinParts: number;
    // private textFiltering: boolean;
    // private viewDistance: number;
    allowsListing(): boolean;
    chatColors(): boolean;
    chatVisibility(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    locale(): string;
    mainHand(): number;
    onRemove(): void;
    particleStatus(): number;
    skinParts(): number;
    textFiltering(): boolean;
    toString(): string;
    viewDistance(): number;
}