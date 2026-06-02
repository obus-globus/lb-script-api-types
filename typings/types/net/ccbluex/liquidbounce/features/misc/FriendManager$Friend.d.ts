import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export class FriendManager$Friend extends Object implements Comparable<FriendManager$Friend> {
    constructor(name: string, alias: string | null)
    alias: string | null;
    readonly name: string;
    compareTo(other: FriendManager$Friend): number;
    equals(other: Object | null): boolean;
    getDefaultName(id: number): string;
    hashCode(): number;
}