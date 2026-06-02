import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class MemberRef extends Object {
    constructor()
    equals(arg0: Object | null): boolean;
    getDesc(): string;
    getName(): string;
    getOpcode(): number;
    getOwner(): string;
    hashCode(): number;
    isField(): boolean;
    ownerIsMixin(): boolean;
    setDesc(arg0: string): void;
    setName(arg0: string): void;
    setOpcode(arg0: number): void;
    setOwner(arg0: string): void;
    toString(): string;
}